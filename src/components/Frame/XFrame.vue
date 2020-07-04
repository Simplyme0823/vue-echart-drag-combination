<template>
  <el-menu
    id="menu"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    @select="changeRouter"
  >
    <choice v-for="item in list" :key="item.name" :second="item"></choice>
  </el-menu>
</template>
<script>
import Choice from "./Choice.vue";
import { menus } from "../../router/index.js";

export default {
  components: {
    Choice
  },
  data() {
    return {
      list: menus
    };
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.list);
  },
  methods: {
    open() {},
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeRouter(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#menu {
  position: fixed;
  height: 100%;
}
</style>
