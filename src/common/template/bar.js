/** @format */

const localMockBarData = [
  { year: 2015, raido: 0.5, test: 6 },
  { year: 2016, raido: 0.6, test: 8 },
];

const BarDims = Object.keys(localMockBarData[0]);
const BarX = BarDims[0];
const BarY = BarDims.slice(1);
const seriesBarY = BarY.map(item => {
  return {
    type: "bar",
    yAxisIndex: 0,
    datasetIndex: 0,
    name: item,
    encode: {
      y: item,
      x: BarX,
    },
  };
});

export const DefaultBarOpts = {
  title: {
    text: "在Vue中使用echarts",
    left: "center",
    textStyle: {
      color: "black",
      fontWeight: "normal",
      fontSize: 30,
    },
  },
  legend: {
    show: true,
    icon: "roundRect",
    itemWidth: 25,
    itemHeight: 14,
    bottom: 0,
  },
  grid: {
    top: "15%",
    left: "8%",
    right: "4%",
    bottom: "15%",
  },
  tooltip: {},
  xAxis: {
    type: "category",
    axisTick: { inside: true },
    axisLabel: { fontSize: 15 },
  },
  yAxis: {
    min: 0,
    axisTick: { inside: true },
    axisLabel: { fontSize: 15 },
  },
  dataset: [
    {
      source: localMockBarData,
    },
  ],
  series: seriesBarY,
};
