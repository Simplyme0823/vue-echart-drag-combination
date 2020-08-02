/** @format */

export function getLegendConfig(type, options) {
  if (!type || !options) return {};
  return options.legend;
}
