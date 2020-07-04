/* eslint-disable */
<template>
  <div id="index">
    <div id="shadowmenu">
      <x-frame :isCollapse="isCollapse"></x-frame>
    </div>
    <div class="right">
      <div style="height: 20px;border:1px solid red">s</div>
      <div></div>
    </div>
  </div>
</template>
<script>
import XFrame from "../components/Frame/XFrame.vue";
export default {
  components: {
    XFrame
  },
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>

<style>
header {
  text-align: center;
}
#shadowmenu {
  width: 204px;
}
.right {
  display: flex;
  flex: 1;
  flex-direction: column;
}
#index {
  display: flex;
  flex: 1;
}
</style>
