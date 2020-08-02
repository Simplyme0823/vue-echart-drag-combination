/** @format */

const gridStras = {
  pie(options) {
    const { radius, center } = options.series[0];
    return {
      radius,
      center,
    };
  },
  sunburst(options) {
    const { radius, center } = options.radar;
    return {
      radius,
      center,
    };
  },
  radar(options) {
    const { radius, center } = options.radar;
    return {
      radius,
      center,
    };
  },
  default(options) {
    return options.grid;
  },
};

export function getGridConfig(type, options) {
  if (!type || !options) return {};
  const stra = gridStras[type] || gridStras.default;
  return stra(options);
}
