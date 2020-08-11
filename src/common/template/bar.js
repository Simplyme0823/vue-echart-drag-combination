/** @format */

import { calMax } from "../utils/tool";
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
    label: {
      show: true,
      position: "top",
      fontSize: 12,
    },
    name: item,
    encode: {
      y: item,
      x: BarX,
    },
  };
});
const { max, interval } = calMax(localMockBarData);
export const DefaultBarOpts = {
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
  yAxis: {
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
  dataset: [
    {
      source: localMockBarData,
    },
  ],
  series: seriesBarY,
};
