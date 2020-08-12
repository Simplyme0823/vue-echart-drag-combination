/** @format */
const YAxisStras = {
  line(options) {
    return options.yAxis[0];
  },
  default(options) {
    return options.yAxis;
  },
};

export function getYAxisConfig(type, options) {
  if (!type || !options) return {};
  const stra = YAxisStras[type] || YAxisStras.default;
  return stra(options);
}
