/** @format */

const labelStras = {
  sunburst(options) {
    return options.series.label;
  },
  default(options) {
    return options.series[0].label;
  },
};

export function getLabelConfig(type, options) {
  if (!type || !options) return {};
  const stra = labelStras[type] || labelStras.default;
  return stra(options);
}
