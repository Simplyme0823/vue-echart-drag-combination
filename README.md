<!-- @format -->

# vue-xjm

## 拖拽出图

    由于开发中经常碰到报表类需求，多数情况下，此类需求比较简单但是工作的重复度高。
    因此基于Echart开发了一个可以自由添加/排列不同Echart图的小工具。
    编辑完成以JSON格式保存每张图的信息，然后存入后端数据库。

## 小记

    大概的想法是做一层echarts配置的封装，提供交互界面可以在UI中修改配置，
    然后每次merge一下保存起来，再结合每个dom的位置，
    这样就以DOM为单位记录DOM的位置大小，DOM中Echart配置信息。

    今天利用了事件委托，修改了下代码统一在workarea进行mousemove控制，并且开始封装Echart。

    关于配置合并这块，准备用merge-anything合并每次的配置。

## 小记 2

    计算div之间的间距，idea是维护一个递增的坐标数组，用二分查找法找到开始移动的时候数组的目标index
    然后再移动的时候动态改变index,每次之和相邻的div做计算，以避免暴力遍历及重复计算
    不过优先级放在所有功能之后，目前基本的吸附功能已经完成。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
