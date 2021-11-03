export function quantile(arr, q) {
  const sorted = arr.sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  if (sorted[base + 1] !== undefined) {
    return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
  } else {
    return Math.floor(sorted[base]);
  }
}

export function prepareData(result) {
  return result.data.map(item => {
    item.date = item.timestamp.split('T')[0];

    return item;
  });
}

export function addMetricByDate(data, page, name, date) {
  let sampleData = data
    .filter(item => item.page == page && item.name == name && item.date == date)
    .map(item => item.value);

  let result = {};

  result.hits = sampleData.length;
  result.p25 = quantile(sampleData, 0.25);
  result.p50 = quantile(sampleData, 0.5);
  result.p75 = quantile(sampleData, 0.75);
  result.p95 = quantile(sampleData, 0.95);

  return result;
}
