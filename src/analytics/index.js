import format from 'date-fns/format';
import { getFCP, getLCP, getFID, getCLS } from 'web-vitals';
import { nanoid } from 'nanoid';

import { Counter } from '@/analytics/lib';
import { APP_GUID, getBrowser, printMetrics } from '@/analytics/utils';

const counter = new Counter();
window.counter = counter;

counter.init(APP_GUID, nanoid(), window.location.pathname);
counter.setAdditionalParams({
  env: process.env.NODE_ENV,
  ...getBrowser(),
});

const [firstEntry] = window.performance.getEntriesByType('navigation');
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

const byToday = format(new Date(), 'yyyy-MM-dd');
printMetrics(byToday);
