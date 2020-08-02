/** @format */

const arr = ["line", "bar", "heat"];

export function getXAxisConfig(type, options) {
  if (!type || !options) return {};
  if (arr.indexOf(type) > -1) {
    return options.xAxis.axisLabel;
  }
  return;
}
