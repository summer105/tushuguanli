<template>
  <div id="app">
    <!-- 顶部 -->
    <el-row>
      <!-- 顶部左侧logo -->
      <el-col :span="4">
        <div class="logoBox">
          <img class="logo" src="./assets/logo2.png" />
        </div>
        <!-- 顶部右侧导航 -->
      </el-col>
      <el-col :span="20">
        <div>
          <rightnav></rightnav>
        </div>
      </el-col>
    </el-row>
    <!-- main内容 -->
    <el-row>
      <!-- main左侧导航 -->
      <el-col class="left" :span="4">
        <leftnav></leftnav>
      </el-col>
      <!-- main右侧内容 -->
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import leftnav from "./components/leftnav";
import rightnav from "./components/rightnav";

export default {
  name: "App",
  components: {
    leftnav,
    rightnav
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.logoBox {
  text-align: center;
  background-color: #dee;
}
.logo {
  display: inline-block;
  height: 60px;
}

</style>
