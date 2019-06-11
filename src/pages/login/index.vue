<template>
  <div>
    <div class="an-login-bg"></div>
    <div class="an-login">
      <div class="an-login-header">登录</div>
      <el-input v-model="userInfo.userName" placeholder="请输入账号" class="an-login-input"></el-input>
      <el-input v-model="userInfo.password" placeholder="请输入密码" class="an-login-input"></el-input>
      <el-button type="primary" class="an-login-btn">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      userInfo: {
        userName: '',
        password: ''
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>
.an-login{width: 300px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);background: rgba(0, 0, 0, .5);border-radius: 8px;padding: 20px 30px 40px;}
.an-login-header{font-size: 18px;text-align: center;margin-bottom: 30px;color: #fff;}
.an-login-input{margin-bottom: 20px;}
.an-login .el-input__inner{background: transparent;border-color: rgba(255, 255, 255, .3);color: rgba(255, 255, 255, .7);}
.an-login .el-input__inner:focus{border-color: #409EFF;}
.an-login-btn{width: 100%;}
.an-login-bg{width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: url(/static/images/timg.jpg) center;}
</style>
