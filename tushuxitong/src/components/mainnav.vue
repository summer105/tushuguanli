<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item v-for="route in $route.matched" :key='route.path'>
        {{route.name}}
        </el-breadcrumb-item> 

    </el-breadcrumb>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "mainnav",
  // mounted(){
  //   console.log( this.$route);
    
  // }
};
</script>

<style  scoped>
.breadcrumb{
    margin: 10px
}
</style>