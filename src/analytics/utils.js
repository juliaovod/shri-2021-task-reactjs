import Bowser from 'bowser';

import { prepareData, quantile } from '@/analytics/lib';

export const APP_GUID = '57F8966B-ABA2-4ABB-99A3-757C2537064C';
export const Browsers = {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  InternetExplorer: 'Internet Explorer',
  Safari: 'Safari',
};
export const Platforms = { Desktop: 'desktop', Touch: 'touch' };
export const CustomMetrics = {
  request: {
    BUILD_ADD: 'request/BUILD_ADD',
    BUILD_LIST: 'request/BUILD_LIST',
    CONNECT_SETTINGS: 'request/CONNECT_SETTINGS',
  },
};

export const getBrowser = () => {
  const { browser, os, platform, engine } = Bowser.parse(window.navigator.userAgent);
  return {
    browser: browser.name,
    engine: engine.name,
    os: os.name,
    platform: platform.type,
  };
};

export const calcQuantile = (data, name) => {
  const sampleData = data
    .filter((curr) => curr.name === name)
    .map((curr) => curr.value);

  const result = {};

  result.hits = sampleData.length;
  result.p25 = quantile(sampleData, 0.25);
  result.p50 = quantile(sampleData, 0.5);
  result.p75 = quantile(sampleData, 0.75);
  result.p95 = quantile(sampleData, 0.95);

  return result;
};

export const calcMetrics = (data) => {
  window.console.log('All metrics');

  const table = {};

  table.connect = calcQuantile(data, 'connect');
  table.ttfb = calcQuantile(data, 'ttfb');
  table.fcp = calcQuantile(data, 'fcp');
  table.lcp = calcQuantile(data, 'lcp');
  table.cls = calcQuantile(data, 'cls');
  table.fid = calcQuantile(data, 'fid');

  table[CustomMetrics.request.BUILD_LIST] = calcQuantile(data, CustomMetrics.request.BUILD_ADD);
  table[CustomMetrics.request.BUILD_ADD] = calcQuantile(data, CustomMetrics.request.BUILD_ADD);
  table[CustomMetrics.request.CONNECT_SETTINGS] = calcQuantile(
    data,
    CustomMetrics.request.CONNECT_SETTINGS,
  );

  window.console.table(table);
  return table;
};

export const compareMetrics = () => {};

export const printMetrics = (date) => {
  fetch(`https://shri.yandex/hw/stat/data?counterId=${APP_GUID}`)
    .then((response) => response.json())
    .then((response) => {
      const preparedData = prepareData(response).filter((curr) => curr.date === date);
      window.console.log(preparedData);

      calcMetrics(preparedData);
    });
};
