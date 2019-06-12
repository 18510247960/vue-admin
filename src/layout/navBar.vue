<template>
  <div class="an-header">
    <div class="an-header-item an-header-switch_side">
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
        <i class="iconfont icon-theme"></i>
      </div>
      <div class="an-dropdown-menu clearfix">
        <div class="an-dropdown-menu_btn" @click="dropdownMenu">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="头像" class="an-dropdown-menu_img">
          <span>安鹏程</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="an-dropdown-menu_list" v-if="isShowMenu">
          <div class="an-dropdown-menu_item">基本资料</div>
          <div class="an-dropdown-menu_item">修改密码</div>
        </div>
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
      isShowMenu: false
    }
  },
  created () {
  },
  methods: {
    dropdownMenu () {
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style scoped>
ul, li{padding: 0;margin: 0;}
li{list-style: none;}
a{color: inherit;text-decoration: none;}
.fl{float: left;}
.fr{float: right;}

.clearfix:after,.clearfix:before{content:"";display:block;clear:both;}
.an-header{position: fixed;top: 0;left: 0;width: 100%;height: 50px;background-color: #fff;border-bottom: 1px solid #f6f6f6;box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);white-space: nowrap;padding-left: 200px;box-sizing: border-box;font-size: 14px;user-select:none;z-index: 99;}
.an-header-item{padding: 0 20px;display: inline-block;vertical-align: middle;cursor: pointer;}
.an-header-item i{font-size: 20px;color: #666;line-height: 50px;}
.an-header-switch_side{float: left;line-height: 54px;}
.an-navbar{display: inline-block;color: #333;overflow: auto;vertical-align: middle;width: calc( 100% - 380px );}
.an-navbar-scrollbar{width: 100%;}
.an-navbar-list{white-space: nowrap;width: 100%;}
.an-navbar-list li{display: inline-block;}
.an-navbar-list li i{margin-right: 8px;}
.an-navbar-list li a{display: inline-block;padding: 0 15px;line-height: 50px;}
.an-navbar-list li:hover{background-color: #f6f6f6;}
.an-header-right{position: absolute;top: 0;right: 0;}
.an-header-right .an-header-item:hover{background-color: #eee;}
.an-dropdown-menu{display: inline-block;line-height: 50px;vertical-align: middle;position: relative;box-sizing: border-box;cursor: pointer;}
.an-dropdown-menu_btn{padding-right: 15px;}
.an-dropdown-menu_img{width: 40px;height: 40px;border-radius: 10px;vertical-align: middle;float: left;margin: 5px 5px 0 0;}
.an-dropdown-menu i{vertical-align: middle;position: absolute;top: 50%;right: 0;transform: translateY(-50%);color: #666;}
.an-dropdown-menu_list{position: absolute;top: 55px;left: 0;background-color: #fff;box-shadow: 0 2px 4px rgba(0,0,0,.12);border: 1px solid #d2d2d2;animation: showDropdownMenu .2s;}
.an-dropdown-menu_item{padding: 0 15px;line-height: 40px;width: 100px;}
.an-dropdown-menu_item:hover{background-color: #f2f2f2;}

@keyframes showDropdownMenu {
  0% {transform: translateY(30px);opacity: 0.3;}
  100% {transform: translateY(0);opacity: 1;}
}
</style>
