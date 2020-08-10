/** @format */

export function calMax(data, scale, split) {
  let max = 0;
  let length = data.length;
  let i = -1;
  while (++i < length) {
    Object.values(data[i]).forEach((item, index) => {
      if (index > 0) {
        max = Math.max(item, max);
      }
    });
  }
  return round(max, scale, split);
}

function round(num, scale = 1.2, split = 4) {
  if (num % 5 === 0) {
    const max = Math.ceil(num / split) * (split + 1);
    const interval = Math.ceil(num / split);
    return { max, interval };
  } else {
    const max = Math.ceil((num * scale) / split) * split;
    const interval = Math.ceil((num * scale) / split);
    return { max, interval };
  }
}
