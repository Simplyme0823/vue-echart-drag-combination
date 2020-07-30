/** @format */
import { merge } from "merge-anything";
import * as echarts from "echarts/lib/echarts";

import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/sunburst";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/heatmap";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

import { DefaultBarOpts } from "../../common/template/bar";
import { DefalutLineOpts } from "../../common/template/line";
import { DefalutPieOpts } from "../../common/template/pie";
import { DefaultHeatOpts } from "../../common/template/heat";
import { DefaultRadarOpts } from "../../common/template/radar";
import { DefaultSunburstOpts } from "../../common/template/sunburst";

const strategies = {
  bar: DefaultBarOpts,
  line: DefalutLineOpts,
  pie: DefalutPieOpts,
  heat: DefaultHeatOpts,
  radar: DefaultRadarOpts,
  sunburst: DefaultSunburstOpts,
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
    this.ins.resize({ width: "auto", height: "auto" });
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
