<template>
  <div class="wrapper">
    <Aside class="aside-container" />
    <div class="main-container" :class="isCollapse == true ? 'container_collapse' : ''">
      <Header />
      <Main />
    </div>
  </div>
</template>
<script>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    Aside,
    Header,
    Main
  },
  computed: {
    ...mapState(["isCollapse"])
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  .main-container {
    position: relative;
    width: 100%;
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    border-left: 1px solid #f0f0f0;
  }
}
</style>


