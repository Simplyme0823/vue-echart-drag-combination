/** @format */

import { getColorConfig } from "./getColorConfig";
import { getDataConfig } from "./getDataConfig";
import { getGridConfig } from "./getGridConfig";
import { getLabelConfig } from "./getLabelConfig";
import { getLegendConfig } from "./getLegendConfig";
import { getTitleConfig } from "./getTitleConfig";
import { getXAxisConfig } from "./getXAxisConfig";
import { getYAxisConfig } from "./getYAxisConfig";
import { getTooltipConfig } from "./getTooltipConfig";
export const readChartConfig = {
  color: getColorConfig,
  data: getDataConfig,
  grid: getGridConfig,
  label: getLabelConfig,
  legend: getLegendConfig,
  title: getTitleConfig,
  xAxis: getXAxisConfig,
  yAxis: getYAxisConfig,
  tooltip: getTooltipConfig,
};
