<template>
<section class="bar">
<el-menu mode="horizontal" class="navbar" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <span class="title">vue-steven</span>
   <div class="navbar-dropdown">
        <el-dropdown trigger="click" :show-timeout="100" >
            <span class="el-dropdown-link">
                <svg-icon :icon-class="'user-2'"></svg-icon>steven
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <!-- <el-dropdown-item command="a">我的信息</el-dropdown-item> -->
                <el-dropdown-item command="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</el-menu>
</section>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.bar{
    height: 50px;
}
.title {
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
}
.navbar {
    height:100%
}
.navbar-dropdown {
    display: inline-block;
    position: absolute;
    right: 30px;
    margin-right: 20px;
    line-height: 50px;
}
</style>