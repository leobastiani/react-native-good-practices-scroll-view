/* eslint-disable @typescript-eslint/no-shadow */
import {existsSync} from 'node:fs';
import {readFile, writeFile} from 'node:fs/promises';

(async () => {
  const content = await readDocs();
  const parsed = content.split('## Methods')[0].split('### `');
  parsed.shift();
  const ret = parsed
    .map(item => {
      const name = item.split('`')[0];
      if (name.match(/^on[A-Z]/)) {
        return;
      }
      const isBoolean = item.includes('| bool | ');
      let defaultValueLabel =
        (() => {
          return isBoolean
            ? item.match(/\| bool \| `(\w+)/)?.[1]
            : item.match(/ \| `'(\w+)'` \|\n/)?.[1];
        })() ?? '';
      const only = item.match(/div class="label (\w+)"/)?.[1] ?? '';
      let values: any = isBoolean
        ? ''
        : item
            .match(/enum\(([^)]+)\)/)?.[1]
            .replace(/[`']/g, '')
            .split(', ') ?? [];
      const ret = {
        name,
      } as any;

      if (
        name === 'alwaysBounceHorizontal' ||
        name === 'alwaysBounceVertical'
      ) {
        defaultValueLabel = '';
      }

      if (name === 'contentInset' || name === 'scrollIndicatorInsets') {
        defaultValueLabel = '{top:0,left:0,bottom:0,right:0}';
        values = [
          {top: -10, left: -10, bottom: -10, right: -10},
          {top: 0, left: 0, bottom: 0, right: 0},
          {top: 25, left: 25, bottom: 25, right: 25},
          {top: 50, left: 50, bottom: 50, right: 50},
        ];
      }

      if (name === 'contentOffset') {
        defaultValueLabel = '{x:0,y:0}';
        values = [
          {x: -10, y: -10},
          {x: 0, y: 0},
          {x: 25, y: 25},
          {x: 50, y: 50},
        ];
      }

      if (name === 'decelerationRate') {
        values.push(-10, 0, 25, 50);
      }

      if (name === 'endFillColor') {
        values = ['red', 'blue', 'green'];
      }

      if (name === 'fadingEdgeLength') {
        defaultValueLabel = '0';
        values = [-10, 0, 25, 50];
      }

      if (name === 'keyboardDismissMode') {
        values.push('interactive');
      }

      if (name === 'keyboardShouldPersistTaps') {
        values = ['always', 'never', 'handled', false, true];
      }

      if (name === 'maintainVisibleContentPosition') {
        values = [
          {minIndexForVisible: -10, autoscrollToTopThreshold: -10},
          {minIndexForVisible: 0, autoscrollToTopThreshold: 0},
          {minIndexForVisible: 25, autoscrollToTopThreshold: 25},
          {minIndexForVisible: 50, autoscrollToTopThreshold: 50},
        ];
      }

      if (
        name === 'maximumZoomScale' ||
        name === 'minimumZoomScale' ||
        name === 'zoomScale'
      ) {
        defaultValueLabel = '1.0';
        values = [-0.5, 0, 0.5, 1, 1.5];
      }

      if (name === 'scrollEventThrottle') {
        defaultValueLabel = '0';
        values = Array.from({length: 18})
          .map((_, i) => i - 1)
          .concat([20, 25, 50]);
      }

      if (name === 'scrollPerfTag') {
        values = ['someScrollPerfTag'];
      }

      if (name === 'snapToInterval') {
        defaultValueLabel = '0';
        values = [-10, 0, 25, 50];
      }

      if (name === 'snapToInterval' || name === 'stickyHeaderIndices') {
        values = [
          [0],
          [250],
          [500],
          [250, 500],
          [0, 250, 500],
          [-100, 0, 250, 500],
        ];
      }

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
    })
    .filter(Boolean);

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
