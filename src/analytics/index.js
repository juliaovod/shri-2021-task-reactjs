import format from 'date-fns/format';
import { getFCP, getLCP, getFID, getCLS } from 'web-vitals';
import { nanoid } from 'nanoid';

import stdout from 'UiKit/utils/stdout';

import Counter from './lib/send';
import { APP_GUID, calcMetrics, displayTable, compareMetricsByVendor } from './utils';
import { prepareData } from './lib/utils';

const {
  location: { pathname },
  navigator: { userAgent, vendor },
  performance,
} = window;

const counter = new Counter();
window.counter = counter;

counter.init(APP_GUID, nanoid(), pathname);
counter.setAdditionalParams({
  env: process.env.NODE_ENV,
  userAgent,
  vendor,
});

const [firstEntry] = performance.getEntriesByType('navigation');
const entry = firstEntry.toJSON();

counter.send('connect', entry.connectEnd - entry.connectStart);
counter.send('ttfb', entry.responseEnd - entry.requestStart);
getFCP((metric) => {
  counter.send('fcp', metric.value);
});
getLCP((metric) => {
  counter.send('lcp', metric.value);
});
getCLS((metric) => {
  counter.send('cls', metric.value);
});
getFID((metric) => {
  counter.send('fid', metric.value);
});

fetch(`https://shri.yandex/hw/stat/data?counterId=${APP_GUID}`)
  .then((res) => res.json())
  .then((res) => {
    const date = format(new Date(), 'yyyy-MM-dd');
    const data = prepareData(res).filter((item) => item.date === date);

    stdout('Metrics by date — ', date);

    stdout('All metrics');
    displayTable(calcMetrics(data));

    stdout('All metrics by vendor');
    compareMetricsByVendor(data);
  });
