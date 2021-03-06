/** @format */
import { calMax } from "../utils/tool";
const localMockLineData = [
  { year: 2015, mount: 11, test: 15 },
  { year: 2016, mount: 12, test: 16 },
];
const { max, interval } = calMax(localMockLineData);
const LineDims = Object.keys(localMockLineData[0]);
const LineX = LineDims[0];
const LineY = LineDims.slice(1);
const seriesLineY = LineY.map(item => {
  return {
    type: "line",
    yAxisIndex: 0,
    datasetIndex: 0,
    label: {
      show: true,
      position: "top",
      fontSize: 12,
    },
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
      color: "#333",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 25,
    },
  },
  legend: {
    textStyle: {
      fontSize: 12,
    },
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
    axisLabel: { fontSize: 15, rotate: 0 },
  },
  yAxis: [
    {
      max: max,
      min: 0,
      interval: interval,
      name: "test",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 16,
        fontWeight: "normal",
      },
      nameGap: 20,
      axisTick: { inside: true },
      axisLabel: { fontSize: 15 },
    },
  ],
  dataset: [
    {
      source: localMockLineData,
    },
  ],
  series: seriesLineY,
};
