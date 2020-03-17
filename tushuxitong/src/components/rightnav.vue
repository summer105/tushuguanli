<template>
  <div>
    <div class="rightnav">
      <!-- 当前用户显示盒子 -->
      <div class="userbox">
        <!-- 用户头像 -->
        <div class="imgbox">
          <img src="../assets/logo2.png" />
        </div>
        <!-- 用户名 -->
        <span class="username">alice</span>
        <!-- 下拉列表功能 -->
        <div class="downlist">
          <el-dropdown>
          <span class="el-dropdown-link">
            退出
<!--            <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          </span>
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>退出</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
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
    border-left:none;
    border-right:none;
    position:relative;
  }
  .userbox {
    float: right;
    margin: 5px 0;
    height: 50px;
    width: 230px;
  }
  .userbox .imgbox {
    position: absolute;
    top: 15px;
    right:165px;
    width: 35px;
    height: 35px;
  }
  .userbox .imgbox img {
    width: 100%;
  }
  .userbox .username {
    position: absolute;
    right: 120px;
    top: 20px;
  }
  .userbox .downlist {
    position: absolute;
    right: 55px;
    top: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
</style>
