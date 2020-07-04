<template>
  <!--二选一所以不会报错-->
  <el-menu-item :index="second.name" v-if="!second.children">
    {{ second.CNname }}
  </el-menu-item>
  <el-submenu :index="second.name" v-else>
    <span slot="title">{{ second.name }}</span>
    <el-menu-item
      v-for="item in second.children"
      :index="item.name"
      :key="item.name"
      >{{ item.CNname }}
    </el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "Choice",
  props: {
    second: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    console.log(this.props);
  }
};
</script>

<style scoped></style>
