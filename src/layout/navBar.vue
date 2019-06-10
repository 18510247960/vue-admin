<template>
  <div class="an-header">
    <div class="an-header-item">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="an-navbar">
      <el-scrollbar wrap-class="an-navbar-scrollbar">
        <ul class="an-navbar-list">
          <li><a href="javascript:;"><i class="el-icon-user-solid"></i>首页</a></li>
          <li><a href="javascript:;"><i class="el-icon-s-tools"></i>系统</a></li>
          <li><a href="javascript:;"><i class="el-icon-user-solid"></i>首页</a></li>
          <li><a href="javascript:;"><i class="el-icon-s-tools"></i>系统</a></li>
          <li><a href="javascript:;"><i class="el-icon-user-solid"></i>首页</a></li>
          <li><a href="javascript:;"><i class="el-icon-s-tools"></i>系统</a></li>
          <li><a href="javascript:;"><i class="el-icon-user-solid"></i>首页</a></li>
          <li><a href="javascript:;"><i class="el-icon-s-tools"></i>系统</a></li>
          <li><a href="javascript:;"><i class="el-icon-user-solid"></i>首页</a></li>
          <li><a href="javascript:;"><i class="el-icon-s-tools"></i>系统</a></li>
          <li><a href="javascript:;"><i class="el-icon-user-solid"></i>首页</a></li>
          <li><a href="javascript:;"><i class="el-icon-s-tools"></i>系统</a></li>
        </ul>
      </el-scrollbar>
    </div>
    <div class="an-header-right">
      <div class="an-header-item">
        <i class="el-icon-bell"></i>
      </div>
      <div class="an-header-item">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="an-dropdown-menu clearfix">
        <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="头像" class="an-dropdown-menu_img">
        <span>安鹏程</span>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div class="an-header-item">
        <i class="el-icon-more" style="transform: rotate(90deg);"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
ul, li{padding: 0;margin: 0;}
li{list-style: none;}
a{color: inherit;text-decoration: none;}
.clearfix:after,.clearfix:before{content:"";display:block;clear:both;}
.an-header{position: fixed;top: 0;left: 0;width: 100%;height: 50px;border-bottom: 1px solid #f6f6f6;box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);white-space: nowrap;padding-left: 200px;box-sizing: border-box;}
.an-header-item{line-height: 50px;padding: 0 20px;display: inline-block;vertical-align: middle;cursor: pointer;}
.an-header-item i{font-size: 20px;color: #666;}
.an-navbar{display: inline-block;color: #333;overflow: auto;vertical-align: middle;width: calc( 100% - 400px );}
.an-navbar-scrollbar{width: 100%;}
.an-navbar-list{white-space: nowrap;width: 100%;}
.an-navbar-list li{display: inline-block;}
.an-navbar-list li i{margin-right: 8px;}
.an-navbar-list li a{display: inline-block;padding: 0 15px;line-height: 50px;}
.an-navbar-list li:hover{background-color: #f6f6f6;}
.an-header-right{position: absolute;top: 0;right: 0;}
.an-header-right .an-header-item:hover{background-color: #eee;}
.an-dropdown-menu{display: inline-block;line-height: 50px;vertical-align: middle;position: relative;box-sizing: border-box;cursor: pointer;margin-right: 15px;}
.an-dropdown-menu_img{width: 40px;height: 40px;border-radius: 10px;vertical-align: middle;float: left;margin: 5px 5px 0 0;}
.an-dropdown-menu i{vertical-align: middle;position: absolute;top: 50%;right: -18px;transform: translateY(-50%);color: #666;}
</style>
