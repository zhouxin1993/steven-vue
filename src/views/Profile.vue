<template>
  <div>
    <el-container>
      <el-aside width="200px" style="height:800px">
        <el-menu :default-openeds="['1']" style="padding-top:45px">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/user/profile">个人信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/list">用户列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>
            <e1-menu-item-group>
              <el-menu-item index="2-1">分类管理</el-menu-item>
              <el-menu-item index="2-2">内容列表</el-menu-item>
            </e1-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;display:flex">
          <span style="font-size:18px;font-weight:600;text-align:center;display:inline-block;width:95%">steven-vue</span>
          <el-dropdown style="display:inline-block;flex:1">
            <i class="el-icon-setting" style="margin-right:15px"></i>
            steven
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped >
.el-header {
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #e6e6e6;
}

.el-aside {
  color: #333;
}
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>