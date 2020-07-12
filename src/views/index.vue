<!-- @format -->

/* eslint-disable */
<template>
  <div>
    <div class="tool-menu" @click="changeTool" style=" border:0px solid red;">
      <img class="tool" id="legend" src="../assets/legend.jpg" draggable="false" alt="legend" />
      <img class="tool" id="color" src="../assets/color.svg" draggable="false" alt="color" />
      <img class="tool" id="title" src="../assets/title.svg" draggable="false" alt="title" />
      <img class="tool" id="XAxis" src="../assets/axis.svg" draggable="false" alt="x-axis" />
      <img class="tool" id="YAxis" src="../assets/y-axis.svg" draggable="false" alt="y-axis" />
      <img class="tool" id="data" src="../assets/data.svg" draggable="false" alt="data" />
      <img class="tool" id="grid" src="../assets/grid.svg" draggable="false" alt="grid" />
      <img class="tool" id="download" src="../assets/download.svg" draggable="false" alt="download" />
      <img class="tool" id="save" src="../assets/save.svg" draggable="false" alt="save" />
    </div>
    <div class="chart-title" >
        <el-form :inline="true" v-show="currentTool==='title'">
          <el-form-item label="标题">
            <el-input v-model="title.text" style="width:400px"></el-input>
          </el-form-item>
          <el-form-item label="标题字号">
            <el-input-number v-model="title.textStyle.fontSize" :step="2"  :min="min" :max="max"></el-input-number>
          </el-form-item>
          <el-form-item label="标题字体粗细">
            <el-select v-model="title.textStyle.fontWeight"  style="width:120px">
              <el-option label="normal" value="normal">
              </el-option>
              <el-option label="bold" value="bold">
              </el-option>
              <el-option label='bolder' value='bolder'>
              </el-option>
              <el-option label='lighter' value='lighter'>
              </el-option>
            </el-select>
          </el-form-item>
        <el-form-item label="标题位置">
            <el-select v-model="title.left"  style="width:120px">
              </el-option>
              <el-option label="left" value="left">
              </el-option>
              <el-option label='right' value='right'>
              </el-option>
              <el-option label='center' value='center'>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="changeTitle">应用</el-button>
          </el-form-item>
        </el-form>

        <el-form :inline="true" v-show="currentTool==='grid'">
          <el-form-item label="上">
            <el-input-number v-model="grid.top" :step="1"  :min="0" :max="50"></el-input-number>
          </el-form-item>
          <el-form-item label="下">
            <el-input-number v-model="grid.bottom" :step="1"  :min="0" :max="50"></el-input-number>
          </el-form-item>
          <el-form-item label="左">
            <el-input-number v-model="grid.left" :step="1"  :min="0" :max="50"></el-input-number>
          </el-form-item>
          <el-form-item label="右">
            <el-input-number v-model="grid.right" :step="1"  :min="0" :max="50"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button @click="changeGrid">应用</el-button>
          </el-form-item>
        </el-form>

          <el-form :inline="true" :model="yAxis" v-show="currentTool==='YAxis'">
            <el-form-item label="显示" prop="show">
              <el-switch v-model="yAxis.show" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-form-item>
            <el-form-item label="最大值" prop="max">
              <el-input-number v-model="yAxis.max" :step="1"  :min="0" :max="50"></el-input-number>
            </el-form-item>
            <el-form-item label="最小值" prop="min">
              <el-input-number v-model="yAxis.min" :step="1"  :min="0" :max="50"></el-input-number>
            </el-form-item>
            <el-form-item label="间距" prop="interval">
              <el-input-number v-model="yAxis.interval" :step="1"  :min="0" :max="50"></el-input-number>
            </el-form-item>
            <el-form-item label="轴名称" prop="name">
              <el-input v-model="yAxis.name"></el-input>
            </el-form-item>
            <el-form-item label="字号" prop="nameTextStyle.fontSize">
              <el-input v-model="yAxis.nameTextStyle.fontSize" style="width:80px"></el-input>
            </el-form-item>
            <el-form-item label="粗细" prop="nameTextStyle.fontWeight">
              <el-select v-model="yAxis.nameTextStyle.fontWeight" style="width:120px">
                <el-option label="normal" value="normal">
                </el-option>
                <el-option label="bold" value="bold">
                </el-option>
                <el-option label='bolder' value='bolder'>
                </el-option>
                <el-option label='lighter' value='lighter'>
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="刻度大小" prop="axisLabel.fontSize">
                <el-input v-model="yAxis.axisLabel.fontSize" style="width:80px"></el-input>
            </el-form-item>
            <el-form-item label="位置" prop="nameGap">
              <el-input v-model="yAxis.nameGap" style="width:80px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="changeYAxis">应用</el-button>
            </el-form-item>
          </el-form>

          <el-form :inline="true" :model="xAxis" v-show="currentTool==='XAxis'">
            <el-form-item label="显示" prop="show">
              <el-switch v-model="xAxis.show" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-form-item>
            <el-form-item label="刻度大小" prop="axisLabel.fontSize">
              <el-input v-model="xAxis.axisLabel.fontSize" style="width:80px"></el-input>
            </el-form-item>
            <el-form-item label="旋转" prop="axisLabel.rotate">
              <el-input-number v-model="xAxis.axisLabel.rotate"></el-input-number>
            </el-form-item>
            <el-form-item>
              <el-button @click="changeXAxis">应用</el-button>
            </el-form-item>
          </el-form>

      <div v-show="currentTool==='legend'">
        <el-input></el-input>
      </div>
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
        ref="workArea" @mouseup="fangshou($event)" @mousemove="weituo($event)" @mouseenter="enterDesign($event)" @mousedown="control($event)">
        <div style="position: relative;">
          <div class="mask" :class="{active:isActive}" :style="{height: activeItem.h, width: activeItem.w, left: activeItem.l, top: activeItem.t}" ref="mask">
            <div class="corner" style="left:-4px; top:-4px" ref="LT"></div>
            <div class="corner" :style="{left: CRS.RT.left, top: CRS.RT.top}" ref="RT"></div>
            <div class="corner" :style="{left: CRS.LB.left, top: CRS.LB.top}" ref="LB"></div>
            <div class="corner rb" :style="{left: CRS.RB.left, top: CRS.RB.top}" ref="RB" @mousedown="crsChoose($event)">
          </div>
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
  import  * as html2canvas from "html2canvas"

  const saveFile = function(data, filename){
                var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                save_link.href = data;
                save_link.download = filename;
                var event = document.createEvent('MouseEvents');
                event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                save_link.dispatchEvent(event);
            };
  // 保存作图实例
  const map ={}

  let activeDom;
  let activeAdd = false

  let typeList = ["line", "pie", "bar"]

  export default {
    name: "echarts",
    data() {
      return {
        shouldMove: false,
        crsShouldMove: false,
        distanceX: 0,
        distanceY: 0,
        currentTool: "title",
        activeItem:{h:0,w:0,l:0,t:0},
        min: 12,
        drawer: false,
        max: 40,
        charts: [],
        newChart: "",
        oldPageX:"",
        oldPageY:"",
        isActive:true,
        CRS: {
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
        title:{
          text:"在Vue中使用Eharts",
          textStyle:{
            color:'#333',
            fontStyle:"normal",
            fontWeight:"normal",
            fontSize:18,
          },
          left:"center"
        },
        grid:{
          left:'10%',
          top:60,
          right:"10%",
          bottom:60
        },
        yAxis:{
          max:null,
          min:null,
          interval:null,
          nameLocation:"middle",
          name:"",
          show:true,
          nameTextStyle:{
            fontSize:16,
            fontWeight:"normal"
          },
          nameGap:20,
          axisLabel: {fontSize:15}
        },
        xAxis:{
          name:"",
          show:true,
          axisLabel: {fontSize:15, rotate:0}
        }
      }
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
    },
    created(){
      this.readConfig()
    },
    mounted(){
          this.charts.forEach(item=>{
            const ins = new YmsCharts("bar")
            map[item.id] = ins
             ins.chart(this.$refs[item.id][0])
          })
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
          html2canvas(this.$refs.workArea).
          then(canvas => {
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
							saveFile(pageData.replace("image/jpeg", "image/octet-stream"),new Date().getTime()+".jpeg");
          })
          return
        }
        if(this.currentTool === "save"){
          console.log(this.charts)
        console.log(map)
        this.charts
        }
      },
      changeTitle(e) {
        map[activeDom.id].setOption({title:this.title})
      },
      changeYAxis(e){
        map[activeDom.id].setOption({yAxis:this.yAxis})
      },
      changeXAxis(e){
        map[activeDom.id].setOption({xAxis:this.xAxis})
      },
      changeGrid(e){
        map[activeDom.id].setOption({grid:this.grid})
      },
      tool(e) {
        map[activeDom.id].setOption()
      },
      cancel(e) {
        activeAdd = false
      },
      control(e){
        if(e.target === e.currentTarget){
          this.isActive = true
          return
        }
        this.isActive = false
      },
      enterDesign(e) {
        if (!activeAdd) return
        const id = "chart" + Math.random()
        this.newChart = { id, h: "300px", w: "300px", l: `${e.clientX - 200}px`, t: `${e.clientY - 150}px` }
        this.charts.push(this.newChart)

        activeAdd = true
        this.$nextTick(() => {
          activeDom = this.$refs[this.newChart.id][0]
          activeDom.style.left = `${e.clientX - 200}px`
          activeDom.style.top = `${e.clientY - 200}px`
          this.activeItem.w = "300px"
          this.activeItem.h = "300px"
          const line = new YmsCharts("line")
          map[id] = line
          line.chart(activeDom)
        })
      },
      drag(e) {
        if (!activeAdd) return
        this.isActive = false
        activeDom = this.$refs[this.newChart.id][0]
        const { h, l, w, t } = this.charts.find(
          item => item.id === activeDom.id,
        );
        this.h = h;
        this.l = l;
        this.w = w;
        this.t = t;
        this.shouldMove = true;
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
        if(!activeDom) return
        this.crsShouldMove = false;
        const target = this.charts.find(item => item.id === activeDom.id);
        if (!target) return
        target.w = activeDom.style.width;
        target.h = activeDom.style.height;
        map[activeDom.id].resize()
      },
      weituo(e) {
        // echarts图形移动
        this.move(e)
        // 大小调整
        if (!this.crsShouldMove) return;

        const{pageX, pageY} = e
        const baseWidth = parseInt(this.w) + (pageX - this.oldPageX)
        const baseHeight = parseInt(this.h) + (pageY - this.oldPageY)
        if(baseWidth <= 0 || baseHeight <= 0) return
        this.w =  this.$refs.mask.style.width = activeDom.style.width =  baseWidth + "px"
        this.h =  this.$refs.mask.style.height = activeDom.style.height =   baseHeight + "px"
        this.$refs.RB.style.left = this.$refs.RT.style.left = baseWidth -4 + "px"
        this.$refs.RB.style.top = this.$refs.LB.style.top = baseHeight -4 + "px"
        this.oldPageX = pageX
        this.oldPageY = pageY
      },
      crsChoose(e) {
        this.crsShouldMove = true;
        const{pageX, pageY} = e
        this.oldPageX =pageX
        this.oldPageY = pageY
      },
      cornorsMoveControl() {
        this.CRS.RT.left = parseInt(this.w) - 4 + "px";
        this.CRS.RT.top = "-4px";
        this.CRS.LB.left = "-4px";
        this.CRS.LB.top = parseInt(this.h) - 4 + "px";
        this.CRS.RB.left = parseInt(this.w) -4 + "px";
        this.CRS.RB.top = parseInt(this.h) - 4 + "px";
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
        const { offsetLeft, offsetTop } = e.currentTarget;
        this.cornorsMoveControl();
        this.distanceX = e.clientX - offsetLeft;
        this.distanceY = e.clientY - offsetTop;
        this.activeItem = { h, l, w, t }
      },
      move(e) {
        if (!this.shouldMove) return;
        const { distanceX, distanceY } = this;
        const { offsetLeft, offsetTop } = activeDom
        const newTop = e.clientY - distanceY
        const newLeft = e.clientX - distanceX
        const { w: width, h: height } = this.charts.find(item => item.id === activeDom.id)
        const bottomBorder = newTop + height
        const rightBorder = newLeft + width
        if (newTop < 0 || bottomBorder > 900 || rightBorder > 1500) return
        this.t = activeDom.style.top = newTop + "px";
        this.l = activeDom.style.left = newLeft + "px";
        this.$refs.mask.style.top = newTop + "px";
        this.$refs.mask.style.left = newLeft + "px";
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
      readConfig(){
        const config = [{h: "439px",
        id: "chart0.6122708683743796",
        l: "205px",
        t: "191px",
        w: "524px"}]
        this.charts = config
      }
    }
  }
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
    background-color: white;
  }

  .corner:nth-child(4):hover {
    cursor: se-resize;
  }

  .test {
    position: absolute;
  }
.chart-title{
display: flex
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



.scroller {
  height: 100%;
}

.user {
  height: 10%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
.mask{
  pointer-events: none;
  position:absolute;
  border: 1px solid green
}
.rb{
  pointer-events: all;
}
.active{
  display: none
}
</style>
/* eslint-disable */