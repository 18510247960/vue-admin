<template>
  <div class="an-side" :class="[isCollapse ? 'an-collapse' : '']">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="an-side-menu" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-data-line"></i>
            <span slot="title">表单</span>
          </template>
          <router-link to="/table/index">
            <el-menu-item index="1-1">表格</el-menu-item>
          </router-link>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <router-link to="/dashboard">
          <el-menu-item index="2">
              <i class="el-icon-data-line"></i>
              <span slot="title">dashboard</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="3">
            <i class="el-icon-data-line"></i>
            <span slot="title">导航一</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  .an-side{width: 200px;height: 100%;position: fixed;top: 0;left: 0;bottom: 0;z-index: 100;background-color: #304156;}
  .an-side.an-collapse{width: 64px;}
  .an-side-menu{overflow: hidden;border: none;}
  .el-submenu, .el-menu-item{background-color: #304156;color: rgb(191, 203, 217);}
  .el-menu-item i{color: rgb(191, 203, 217);}
  .el-submenu .el-menu-item{background-color: #1f2d3d;}
  .el-submenu .el-menu-item:hover{background-color: #001528 !important;}
  .el-menu-item:focus, .el-menu-item:hover {background-color: #1f2d3d;}
  .el-submenu__title, .el-submenu__title i{color: rgb(191, 203, 217);}
  .el-submenu__title:hover, .el-submenu:hover, .el-menu-item:hover {background-color:#263445;}
  .el-scrollbar{height: 100%;}
  .scrollbar-wrapper{overflow-x: hidden!important;margin-bottom: -17px;margin-right: -17px;}
</style>
