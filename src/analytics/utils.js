import Bowser from 'bowser';

import { prepareData, quantile } from '@/analytics/lib';

export const APP_GUID = 'F53AAF0C-1149-4891-B5CB-C792B9204237';
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

export const getMetrics = (data) => {
  const result = {};

  result.hits = data.length;
  result.p25 = quantile(data, 0.25);
  result.p50 = quantile(data, 0.5);
  result.p75 = quantile(data, 0.75);
  result.p95 = quantile(data, 0.95);

  return result;
};

export const filterDataByDate = (data, date, name) => data
  .filter((curr) => curr.name === name && curr.date === date);

export const addMetricsByDate = (data, date, name) => {
  const sampleData = filterDataByDate(data, date, name)
    .map((curr) => curr.value);

  return getMetrics(sampleData);
};

export const showMetricsByLayer = (data, date, name, layer) => {
  window.console.log('Metrics of', name, 'by layer', layer.toUpperCase());

  const table = {};

  const sampleData = filterDataByDate(data, date, name);

  const layers = sampleData.reduce((accum, curr) => {
    if (accum.includes(curr.additional[layer])) {
      return accum;
    }
    accum.push(curr.additional[layer]);
    return accum;
  }, []);

  for (let i = 0; i < layers.length; i += 1) {
    table[layers[i]] = getMetrics(
      sampleData.reduce((accum, curr) => {
        if (curr.additional[layer] === layers[i]) {
          accum.push(curr.value);
        }
        return accum;
      }, []),
    );
  }

  window.console.table(table);
  return table;
};

export const calcMetrics = (data, date) => {
  window.console.log('All metrics');

  const table = {};

  table.connect = addMetricsByDate(data, date, 'connect');
  table.ttfb = addMetricsByDate(data, date, 'ttfb');
  table.fcp = addMetricsByDate(data, date, 'fcp');
  table.lcp = addMetricsByDate(data, date, 'lcp');
  table.cls = addMetricsByDate(data, date, 'cls');
  table.fid = addMetricsByDate(data, date, 'fid');

  table[CustomMetrics.request.BUILD_LIST] = addMetricsByDate(
    data, date, CustomMetrics.request.BUILD_ADD,
  );

  table[CustomMetrics.request.BUILD_ADD] = addMetricsByDate(
    data, date, CustomMetrics.request.BUILD_ADD,
  );

  table[CustomMetrics.request.CONNECT_SETTINGS] = addMetricsByDate(
    data, date, CustomMetrics.request.CONNECT_SETTINGS,
  );

  window.console.table(table);
  return table;
};

export const compareMetrics = (data, date) => {
  showMetricsByLayer(data, date, CustomMetrics.request.BUILD_LIST, 'browser');
  showMetricsByLayer(data, date, CustomMetrics.request.BUILD_LIST, 'os');
  showMetricsByLayer(data, date, CustomMetrics.request.BUILD_LIST, 'platform');

  showMetricsByLayer(data, date, 'fcp', 'browser');
  showMetricsByLayer(data, date, 'fcp', 'os');
  showMetricsByLayer(data, date, 'fcp', 'platform');
};

export const printMetrics = (date) => {
  fetch(`https://shri.yandex/hw/stat/data?counterId=${APP_GUID}`)
    .then((response) => response.json())
    .then((response) => {
      const preparedData = prepareData(response);

      calcMetrics(preparedData, date);
      compareMetrics(preparedData, date);
    });
};
