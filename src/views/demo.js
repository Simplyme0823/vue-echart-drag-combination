/** @format */
import {merge} from "merge-anything";
import * as echarts from "echarts/lib/echarts";

import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/scatter";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

const localMockBarData = [
  {year: 2015, raido: 0.5, test: 6},
  {year: 2016, raido: 0.6, test: 8},
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

const DefaultBarOpts = {
  title: {
    text: "在Vue中使用echarts",
    left: "center",
    textStyle: {
      color: "black",
      fontWeight: "normal",
      fontSize: 30,
    },
  },
  legend: {show: true, data: BarY, bottom: 20},
  tooltip: {},
  xAxis: {
    type: "category",
    axisTick: {inside: true},
    axisLabel: {fontSize: 15},
  },
  yAxis: [{min: 0, axisTick: {inside: true}, axisLabel: {fontSize: 15}}],
  dataset: [
    {
      source: localMockBarData,
    },
  ],
  series: seriesBarY,
};

const localMockLineData = [
  {year: 2015, mount: 11, test: 15},
  {year: 2016, mount: 12, test: 16},
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

const DefalutLineOpts = {
  title: {
    text: "在Vue中使用echarts",
    left: "center",
    textStyle: {
      color: "black",
      fontWeight: "normal",
      fontSize: 30,
    },
  },
  legend: {show: true, data: LineY, bottom: 0},
  tooltip: {},
  xAxis: {type: "category"},
  yAxis: [{min: 0}],
  dataset: [
    {
      source: localMockLineData,
    },
  ],
  series: seriesLineY,
};

const DefalutPieOpts = {};

const strategies = {
  bar: DefaultBarOpts,
  line: DefalutLineOpts,
  pie: DefalutPieOpts,
};

export class YmsCharts {
  constructor(type) {
    this.ins = null;
    this.options = strategies[type];
  }
  chart(el, options = {}) {
    this.ins = echarts.init(el);
    this.mergeOpts(options);
    // 出图
    this.ins.setOption(this.options);
  }
  resize() {
    this.ins.resize({width: "auto", height: "auto"});
  }
  // 外部传入的
  mergeOpts(options) {
    this.options = merge(this.options, options);
  }
  dispose() {
    this.ins.dispose();
  }

  setOption(options) {
    //合并配置
    this.mergeOpts(options);
    this.ins.setOption(this.options);
  }
}
