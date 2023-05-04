/* eslint-disable @typescript-eslint/no-shadow */
import {existsSync} from 'node:fs';
import {readFile, writeFile} from 'node:fs/promises';

(async () => {
  const content = await readDocs();
  const parsed = content.split('## Methods')[0].split('### `');
  parsed.shift();
  const ret = parsed.map(item => {
    const isBoolean = item.includes('| bool | ');
    const defaultValueLabel =
      (() => {
        return isBoolean
          ? item.match(/\| bool \| `(\w+)/)?.[1]
          : item.match(/ \| `'(\w+)'` \|\n/)?.[1];
      })() ?? '';
    const only = item.match(/div class="label (\w+)"/)?.[1] ?? '';
    const values: any = isBoolean
      ? 'boolean'
      : item
          .match(/enum\(([^)]+)\)/)?.[1]
          .replace(/[`']/g, '')
          .split(', ') ?? [];
    const ret = {
      name: item.split('`')[0],
    } as any;

    if (defaultValueLabel) {
      ret.defaultValueLabel = defaultValueLabel;
    }
    if (only) {
      ret.only = only;
    }
    if (values.length) {
      ret.values = values;
    }

    return ret as unknown;
  });

  await writeFile('src/properties.json', JSON.stringify(ret, null, 2), 'utf-8');
})();

async function readDocs() {
  if (existsSync('docs/scrollview.md')) {
    return readFile('docs/scrollview.md', 'utf-8');
  }
  const resp = await fetch(
    'https://raw.githubusercontent.com/facebook/react-native-website/main/docs/scrollview.md',
  );
  const content = await resp.text();
  writeFile('docs/scrollview.md', content, 'utf-8');

  return content;
}
