<!-- @format -->

/* eslint-disable */
<template>
  <div>
    <div class="tool-menu" @click="changeTool" style=" border:0px solid red;">
      <img class="tool" id="legend" src="../assets/legend.jpg" draggable="false" alt="legend" />
      <img class="tool" id="color" src="../assets/color.svg" draggable="false" alt="color" />
      <img class="tool" id="title" src="../assets/title.svg" draggable="false" alt="title" />
      <img class="tool" id="x-axis" src="../assets/axis.svg" draggable="false" alt="x-axis" />
      <img class="tool" id="y-axis" src="../assets/y-axis.svg" draggable="false" alt="y-axis" />
      <img class="tool" id="data" src="../assets/data.svg" draggable="false" alt="data" />
      <img class="tool" id="grid" src="../assets/grid.svg" draggable="false" alt="grid" />
      <img class="tool" id="download" src="../assets/download.svg" draggable="false" alt="download" />
    </div>
    <div class="chart-title">
      <div v-show="currentTool==='title'">
        标题：
        <el-input v-model="chartTitle" style="width:400px"></el-input>
        <el-input-number v-model="fontSize" :step="2" @change="chart" :min="min" :max="max"></el-input-number>
        <el-select v-model="fontWeight" @change="chart" style="width:120px">
          <el-option label="normal" value="normal">
          </el-option>
          <el-option label="bold" value="bold">
          </el-option>
          <el-option label='bolder' value='bolder'>
          </el-option>
          <el-option label='lighter' value='lighter'>
          </el-option>
        </el-select>
      </div>
      <div v-show="currentTool==='legend'">
        <el-input></el-input>
      </div>
      <div v-show="currentTool==='xAxis'">
        <el-input></el-input>
      </div>
      <div v-show="currentTool==='yAxis'">
        Max：<el-input v-model="yAxis.max"></el-input>
        Min：<el-input v-model="yAxis.max"></el-input>
      </div>
      <el-button @click="changTitle">确定</el-button>
    </div>
    <div style="position: relative;">
      <ul class="chart-menu" @mousedown="chooseType($event)" @mouseup="cancel($event)">
        <li>
          <div style="
          display: inline-block;
          width: 0; 
          height: 0;
          border-width: 8px;
          border-style: solid;
          border-color: blue transparent  transparent transparent  ;
         "></div>
          基础图形
        </li>
        <li>
          <div id="line""></div>
          <div id="pie"></div>
          <div id="bar"></div>
        </li>
      </ul>

      <div style="border: 1px solid red;height: 900px; position: relative;margin-left: 152px;" class="work-area"
        ref="workArea" @mouseup="fangshou($event)" @mousemove="weituo($event)" @mouseenter="enterDesign($event)">
        <div style="position: relative;">
          <div class="corner" :style="{left: CRS.LT.left, top: CRS.LT.top}" ref="LT"></div>
          <div class="corner" :style="{left: CRS.RT.left, top: CRS.RT.top}" ref="RT"></div>
          <div class="corner" :style="{left: CRS.LB.left, top: CRS.LB.top}" ref="LB"></div>
          <div class="corner" :style="{left: CRS.RB.left, top: CRS.RB.top}" @mousedown="crsChoose($event)" ref="RB">
          </div>
          <div v-for="(item, index) in charts" :key="index"
            :style="{height: item.h, width: item.w, left: item.l, top: item.t}" :id="item.id" :ref="item.id"
            class="test" @mouseenter="drag($event)" @mousedown="choose($event)" @mouseup="up($event)"></div>
        </div>
      </div>
    </div>
    <el-drawer title="我是标题" :visible.sync="drawer">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
  import { YmsCharts } from "./demo.js"
const charts = new YmsCharts("line")



let orignData =  [
  { "year": 2015, "mount": 11 },
  { "year": 2016, "mount": 12 },            
  { "year": 2015, "raido": 0.5 },
  { "year": 2016, "raido": 0.6 }
]



  let myChart;
  let activeDom;
  let activeDomLeft;
  let activeDomTop;
  let activeAdd = false
  let activeCorner;
  let typeList = ["line", "pie", "bar"]
  export default {
    name: "echarts",
    data() {
      return {
        shouldMove: false,
        crsShouldMove: false,
        distanceX: 0,
        distanceY: 0,
        crsDistanceX: 0,
        crsDistanceY: 0,
        activeCorner: undefined,
        chartTitle: "",
        currentTool: "title",
        min: 12,
        drawer: false,
        fontSize: 20,
        max: 40,
        yAxis: {
          max: 100,
          min: 100
        },
        fontWeight: this.fontWeight,
        charts: [
          { id: "charts", h: "300px", w: "500px", l: "100px", t: "200px", instance: undefined }
        ],
        toollegends: [{ src: "../assets/legend.jpg" }, { src: "../assets/title.svg" }],
        newChart: "",
        CRS: {
          LT: {
            left: "",
            top: "",
          },
          RT: {
            left: "",
            top: "",
          },
          LB: {
            left: "",
            top: "",
          },
          RB: {
            left: "",
            top: "",
          },
        },
        h: "",
        w: "",
        l: "",
        t: "",
        find: {
          LT: "RB",
          RT: "LB",
          LB: "RT",
          RB: "LT",
        },
      };
    },
    mounted() {
      document.addEventListener("keyup", e => {
        if (e.keyCode === 46) {
          if (activeDom) {
            this.$confirm('此操作将永久删除该图表, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              charts.dispose()
              this.charts = this.charts.filter(item => item.id !== activeDom.id)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch((err) => {
              console.log(err)
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
        }
      })
      this.chart();
    },
    methods: {
      stop(e) {
        if (e.target.className === 'work-erea') {
          activeAdd = false
        }
      },
      changeTool(e) {
        this.currentTool = e.target.id
        if (this.currentTool === "data") {
          this.drawer = true
          return
        }
        if (this.currentTool === "download") {
          return
        }
      },
      changTitle(e) {
        myChart.setOption({
          title: {
            text: this.chartTitle
          }
        })
      },
      tool(e) {
        console.log(e)
        myChart.setOption()
      },
      cancel(e) {
        activeAdd = false
      },
      enterDesign(e) {
        if (!activeAdd) return
        const id = "chart" + Math.random()
        this.newChart = { id, h: "300px", w: "300px", l: `${e.clientX - 200}px`, t: `${e.clientY - 150}px` }
        this.charts.push(this.newChart)
        activeAdd = true
        this.$nextTick(() => {
          activeDom = this.$refs[this.newChart.id][0]
          activeDom.style.outline = "#0000FF dotted thin";
          activeDom.style.left = `${e.clientX - 200}px`
          activeDom.style.top = `${e.clientY - 200}px`
          const line = new YmsCharts("line")
          line.chart(activeDom)
        })
      },
      drag(e) {
        if (!activeAdd) return
        activeDom = this.$refs[this.newChart.id][0]
        const { h, l, w, t } = this.charts.find(
          item => item.id === activeDom.id,
        );
        this.h = h;
        this.l = l;
        this.w = w;
        this.t = t;
        this.shouldMove = true;
        activeDom.style.outline = "#0000FF dotted thin";
        const { offsetLeft, offsetTop } = activeDom;
        this.cornorsMoveControl(offsetLeft, offsetTop);
        this.distanceX = e.clientX - offsetLeft;
        this.distanceY = e.clientY - offsetTop;
      },
      chooseType(e) {
        if (typeList.indexOf(e.target.id) === -1) return
        activeAdd = true
      },
      fangshou(e) {
        this.crsShouldMove = false;
        const target = this.charts.find(item => item.id === activeDom.id);
        if (!target) return
        target.w = activeDom.style.width;
        target.h = activeDom.style.height;
        charts.resize()
      },
      weituo(e) {
        // echarts图形移动
        this.move(e)
        // 大小调整

        if (!this.crsShouldMove) return;
        const { crsDistanceX, crsDistanceY } = this;
        this.CRS.LB.top = this.CRS.RB.top = this.$refs.LB.style.top = activeCorner.style.top =
          e.clientY - crsDistanceY + "px";
        this.CRS.RT.left = this.CRS.RB.left = this.$refs.RT.style.left = activeCorner.style.left =
          e.clientX - crsDistanceX + "px";
        const { left, top } = this.CRS[this.activeCorner];
        this.h = activeDom.style.height =
          Math.abs(parseInt(top) - (e.clientY - crsDistanceY)) + "px";
        this.w = activeDom.style.width =
          Math.abs(parseInt(left) - (e.clientX - crsDistanceX)) + "px";
      },
      crsChoose(e) {
        this.crsShouldMove = true;
        activeCorner = e.currentTarget;
        const { offsetLeft, offsetTop } = e.currentTarget;
        const { left, top } = e.currentTarget.style;
        this.crsDistanceX = e.clientX - offsetLeft;
        this.crsDistanceY = e.clientY - offsetTop;
        const active = Object.entries(this.CRS).find(
          item => item[1].left === left && item[1].top === top,
        )[0];
        this.activeCorner = this.find[active];
      },
      cornorsMoveControl(offsetLeft, offsetTop) {
        const { LT, RT, LB, RB } = this.CRS;
        if (parseInt(RB.left) - parseInt(LT.left) < 0) return;
        LT.left = offsetLeft - 4 + "px";
        LT.top = offsetTop - 4 + "px";
        RT.left = offsetLeft + parseInt(this.w) - 4 + "px";
        RT.top = offsetTop - 4 + "px";
        LB.left = offsetLeft - 4 + "px";
        LB.top = offsetTop + parseInt(this.h) - 4 + "px";
        RB.left = offsetLeft - 4 + parseInt(this.w) + "px";
        RB.top = offsetTop + parseInt(this.h) - 4 + "px";
      },
      choose(e) {
        activeDom = e.currentTarget;
        const { h, l, w, t } = this.charts.find(
          item => item.id === e.currentTarget.id,
        );
        this.h = h;
        this.l = l;
        this.w = w;
        this.t = t;
        this.shouldMove = true;
        e.currentTarget.style.outline = "#0000FF dotted thin";
        const { offsetLeft, offsetTop } = e.currentTarget;
        this.cornorsMoveControl(offsetLeft, offsetTop);
        this.distanceX = e.clientX - offsetLeft;
        this.distanceY = e.clientY - offsetTop;
      },
      move(e) {
        if (!this.shouldMove) return;
        const { distanceX, distanceY } = this;
        const { offsetLeft, offsetTop } = activeDom
        const newTop = e.clientY - distanceY
        const newLeft = e.clientX - distanceX
        const { w: width, h: height } = this.charts.find(item => item.id === activeDom.id)
        const bottomBorder = newTop + parseInt(height)
        const rightBorder = newLeft + parseInt(width)
        if (newTop < 0 || bottomBorder > 900 || rightBorder > 1500) return
        this.t = activeDom.style.top = newTop + "px";
        this.l = activeDom.style.left = newLeft + "px";
        this.cornorsMoveControl(offsetLeft, offsetTop);
      },
      up(e) {
        this.shouldMove = false;
        activeAdd = false
        const { top, left, width, height } = activeDom.style
        const index = this.charts.findIndex(item => item.id === activeDom.id)
        this.charts[index].h = height
        this.charts[index].w = width
        this.charts[index].l = left
        this.charts[index].t = top
      },
      chart() {
        const el = document.getElementById("charts")
        const options = {
          title: {
            text: "在Vue中使用echarts", left: "center", textStyle: {
              color: "black",
              fontWeight: this.fontWeight,
              fontSize: this.fontSize
            }
          },
          legend: {show:true,data:["mount",2015,2016]},
          tooltip: {},
          xAxis: { type: 'category' },
          yAxis: {},
          dataset: [
            {source: [
              { "year": 2015, "mount": 11 },
              { "year": 2016, "mount": 12 },
            ]}, 
            {source: [
            { "year": 2015, "raido": 0.5,"test":6 },
            { "year": 2016, "raido": 0.6,"test":8 }
          ]
        }],
          series: [
            {
              type: 'line',
              
              datasetIndex:0,
              name:"mount",
              encode: {
                y: 'mount',
                x: 'year'
              }
            }, 
            {
              type: 'bar',
              datasetIndex:1,
              stack:"总量",
              name:"raido",
              encode: {
                y: "raido",
                x: "year"
              }
            },
            {
              type: 'bar',
              datasetIndex:1,
              stack:"总量",
              name:"test",
              encode: {
                y: "test",
                x: "year"
              }
            }],
        }
        charts.chart(el, options)
      },
    },
  };
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .corner {
    width: 8px;
    height: 8px;
    outline: solid thin;
    position: absolute;
  }

  .corner:nth-child(4):hover {
    cursor: se-resize;
  }

  .test {
    position: absolute;
  }

  .chart-menu {
    min-width: 150px;
    width: 150px;
    height: 500px;
    border: 1px solid red;
    float: left;
    user-select: none;
    position: absolute;
    background-color: white;
    z-index: 9;
  }

  .chart-menu li {
    list-style: none;
  }

  .chart-menu li div {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 5px;
  }

  #line {
    background-image: url("../assets/line_chart.svg");
  }

  #pie {
    background-image: url("../assets/pie_chart.svg");
  }

  #bar {
    background-image: url("../assets/bars_chart.svg");
  }

  .tool {
    float: left;
    width: 25px;
    height: 25px;
    margin: 0 10px 0 0;
    border: 1px solid gray
  }

  .tool-menu:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
  }

  .tool-menu {
    margin-bottom: 10px;
  }

  .tool :nth-child(1) {
    background-image: url("../assets/pie_chart.svg");
  }
</style>
/* eslint-disable */