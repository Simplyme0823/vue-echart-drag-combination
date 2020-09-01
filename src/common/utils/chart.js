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

import { getColorConfig } from "../config/getColorConfig";
import { getDataConfig } from "../config/getDataConfig";
import { getGridConfig } from "../config/getGridConfig";
import { getLabelConfig } from "../config/getLabelConfig";
import { getLegendConfig } from "../config/getLegendConfig";
import { getTitleConfig } from "../config/getTitleConfig";
import { getXAxisConfig } from "../config/getXAxisConfig";
import { getYAxisConfig } from "../config/getYAxisConfig";

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
    this.type = type;
    this.SuperType="chart"
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
    if (Object.keys(options)[0] === "label") {
      if (this.type === "line" || this.type === "bar") {
        const length = this.options.dataset[0].source.length;
        for (let i = 0; i < length; i++) {
          this.options.series[i].label = options.label;
        }
      } else if (this.type === "sunburst") {
        console.log(this.options.series.label);
        this.options.series.label = merge(
          this.options.series.label,
          options.label,
        );
      } else {
        this.options.series[0].label = options.label;
      }
    } else {
      this.mergeOpts(options);
    }
    console.log(this.options);
    this.ins.setOption(this.options);
  }
}

export class YmsPanel {
  constructor(type) {
    this.type = type;
    this.options = {};
    this.SuperType = "panel";
  }
}
