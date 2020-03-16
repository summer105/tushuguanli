<template>
  <div>
    <div class="rightnav">
      <!-- 当前用户显示盒子 -->
      <div class="userbox">
        <!-- 用户头像 -->
        <div class="imgbox">
          <img src="../assets/logo.png" />
        </div>
        <!-- 用户名 -->
        <span class="username">alice</span>
        <!-- 下拉列表功能 -->
        <div class="downlist">
          <el-dropdown>
          <span class="el-dropdown-link">
            更多
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "rightnav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style  scoped>
.el-menu-demo {
  background-color: rgba(221, 238, 238, 0.418);
  border: 1px solid #eee;
}
.rightnav {
  width: 100%;
  height: 62px;
  background-color: rgba(221, 238, 238, 0.418);
  border: 1px solid #eee;
}
.userbox {
  float: right;
  margin: 5px 0;
  height: 50px;
  width: 230px;
}
.userbox .imgbox {
  position: absolute;
  width: 50px;
  height: 50px;
}
.userbox .imgbox img {
  width: 100%;
}
.userbox .username {
  position: relative;
  left: 60px;
  top: 15px;
}
.userbox .downlist {
  position: relative;
  left: 110px;
  top: -5px;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>
