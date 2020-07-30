/** @format */

const localMockLineData = [
  { year: 2015, mount: 11, test: 15 },
  { year: 2016, mount: 12, test: 16 },
];

const LineDims = Object.keys(localMockLineData[0]);
const LineX = LineDims[0];
const LineY = LineDims.slice(1);
const seriesLineY = LineY.map(item => {
  return {
    type: "line",
    yAxisIndex: 0,
    datasetIndex: 0,
    name: item,
    encode: {
      y: item,
      x: LineX,
    },
  };
});

export const DefalutLineOpts = {
  title: {
    text: "在Vue中使用echarts",
    left: "center",
    textStyle: {
      color: "black",
      fontWeight: "normal",
      fontSize: 30,
    },
  },
  legend: { show: true, data: LineY, bottom: 0 },
  grid: {
    top: "15%",
    left: "8%",
    right: "4%",
    bottom: "15%",
  },
  tooltip: {},
  xAxis: { type: "category" },
  yAxis: [{ min: 0 }],
  dataset: [
    {
      source: localMockLineData,
    },
  ],
  series: seriesLineY,
};
