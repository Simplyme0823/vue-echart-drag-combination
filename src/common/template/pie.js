/** @format */

const localMockPieData = [
  {
    name: "Apples",
    value: 70,
  },
  {
    name: "Strawberries",
    value: 68,
  },
  {
    name: "Bananas",
    value: 48,
  },
  {
    name: "Oranges",
    value: 40,
  },
  {
    name: "Pears",
    value: 32,
  },
  {
    name: "Pineapples",
    value: 27,
  },
  {
    name: "Grapes",
    value: 18,
  },
];

export const DefalutPieOpts = {
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
  tooltip: {},
  series: [
    {
      type: "pie",
      radius: ["20%", "60%"],
      roseType: false, // area radius
      center: ["50%", "50%"],
      data: localMockPieData,
      label: {
        position: "outer",
        // bleedMargin: 5,
        show: true,
        fontSize: 12,
      },
    },
  ],
};
