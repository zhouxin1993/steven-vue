<template>
<section class='main'>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">需求管理</span>
    </template>
    <el-menu-item-group>
        <el-menu-item v-for="item in haveList" @click="navClick(item.path)">{{item.name}}</el-menu-item>
      <!-- <el-menu-item index="1-1" @click="">已上线任务列表</el-menu-item>
      <el-menu-item index="1-2">待开发任务列表</el-menu-item> -->
    </el-menu-item-group>
  </el-submenu>
   <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">暂无1</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">暂无2</span>
    </el-menu-item>
</el-menu>
</section>
</template>

<script>
export default {
  name: 'navmenu',
  data() {
      return {
        isCollapse: false,
        haveList: [
            {
                name:"已上线任务列表",
                path:"online"
            },
            {
                name:"待开发任务列表",
                path:"dev"
            }
        ]
      };
    },
    methods: {
        navClick(e){
            console.log(e,'e')
        },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 1000px;
  }
</style>