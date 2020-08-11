/** @format */

var data = [
  {
    name: "Grandpa",
    children: [
      {
        name: "Uncle Leo",
        value: 15,
        children: [
          {
            name: "Cousin Jack",
            value: 2,
          },
          {
            name: "Cousin Mary",
            value: 5,
            children: [
              {
                name: "Jackson",
                value: 2,
              },
            ],
          },
          {
            name: "Cousin Ben",
            value: 4,
          },
        ],
      },
      {
        name: "Father",
        value: 10,
        children: [
          {
            name: "Me",
            value: 5,
          },
          {
            name: "Brother Peter",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Nancy",
    children: [
      {
        name: "Uncle Nike",
        children: [
          {
            name: "Cousin Betty",
            value: 1,
          },
          {
            name: "Cousin Jenny",
            value: 2,
          },
        ],
      },
    ],
  },
];

export const DefaultSunburstOpts = {
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
  tooltip: {},
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
  series: {
    type: "sunburst",
    highlightPolicy: "ancestor",
    data: data,
    radius: [0, "80%"],
    center: ["50%", "60%"],
    label: {
      rotate: "radial",
      minAngle: 10,
      position: "inside",
      show: true,
      fontSize: 12,
    },
  },
};
