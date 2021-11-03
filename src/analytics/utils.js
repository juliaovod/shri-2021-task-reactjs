import stdout from 'UiKit/utils/stdout';

import { quantile } from './lib/utils';

export const APP_GUID = '92848993-B209-4A79-AE00-24D22456FFFC';
export const Vendors = {
  Chrome: 'Google Inc.',
  Gecko: '',
  WebKit: 'Apple Computer, Inc.',
};

export const displayTable = (...args) => {
  window.console.table(...args);
};

export const metricsInQuantile = (data, filter = () => true) => {
  const sampleData = data.filter(filter).map((item) => item.value);

  const result = {};

  result.hits = sampleData.length;
  result.p25 = quantile(sampleData, 0.25);
  result.p50 = quantile(sampleData, 0.5);
  result.p75 = quantile(sampleData, 0.75);
  result.p95 = quantile(sampleData, 0.95);

  return result;
};

export const calcMetrics = (data) => {
  const table = {};

  // NOTE: Render metrics
  table.connect = metricsInQuantile(data, (item) => item.name === 'connect');
  table.ttfb = metricsInQuantile(data, (item) => item.name === 'ttfb');
  table.fcp = metricsInQuantile(data, (item) => item.name === 'fcp');
  table.lcp = metricsInQuantile(data, (item) => item.name === 'lcp');
  table.cls = metricsInQuantile(data, (item) => item.name === 'cls');
  table.fid = metricsInQuantile(data, (item) => item.name === 'fid');

  // NOTE: Request metrics
  table.buildsLoad = metricsInQuantile(data, (item) => item.name === 'buildsLoad');
  table.buildAdd = metricsInQuantile(data, (item) => item.name === 'buildAdd');
  table.connectSettingsSave = metricsInQuantile(data, (item) => item.name === 'connectSettingsSave');

  return table;
};

export const compareMetricsByVendor = (data) => {
  const dataByChrome = data.filter((item) => item.additional.vendor === Vendors.Chrome);
  const dataByWebkit = data.filter((item) => item.additional.vendor === Vendors.WebKit);
  const dataByGecko = data.filter((item) => item.additional.vendor === Vendors.Gecko);

  stdout(Vendors.Chrome);
  displayTable(calcMetrics(dataByChrome));

  stdout(Vendors.WebKit);
  displayTable(calcMetrics(dataByWebkit));

  stdout(Vendors.Gecko);
  displayTable(calcMetrics(dataByGecko));
};
