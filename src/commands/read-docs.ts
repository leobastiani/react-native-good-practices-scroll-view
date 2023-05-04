import {existsSync} from 'node:fs';
import {readFile, writeFile} from 'node:fs/promises';

(async () => {
  const content = await readDocs();
  console.log(content);
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
