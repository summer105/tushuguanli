<template>
  <div class="leftnav">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/even">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图书查询与借阅</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/even/create">图书查询</el-menu-item>
          <el-menu-item index="/even/list">图书借阅</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index>
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>系统管理页面</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/xitongguanli/yhguanli">用户管理</el-menu-item>
          <el-menu-item index="/xitongguanli/bookguanli">图书管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "leftnav",
  methods: {}
};
</script>

<style  scoped>
  .leftnav{
    height: 557px;
    border-right:1px solid #ccc ;
  }

</style>
