<template>
  <div>
    <div class="an-login-bg"></div>
    <div class="an-login">
      <div class="an-login-header">登录</div>
      <input v-model="userInfo.phone" placeholder="请输入账号" class="an-login-input" @keyup="enter($event)" />
      <input v-model="userInfo.password" placeholder="请输入密码" class="an-login-input" @keyup="enter($event)" />
      <button class="an-login-btn" @click="login">登录</button>
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
        phone: '',
        password: ''
      }
    }
  },
  created () {
  },
  methods: {
    login () {
      this.axios.post('/api/login', this.userInfo).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.$router.push({ path: '/' })
        }
      })
    },
    enter (e) {
      if (e.key === 'Enter') {
        this.login()
      }
    }
  }
}
</script>

<style scoped>
.an-login{width: 340px;position: fixed;top: 50%;left: 50%;z-index: 2;transform: translate(-50%, -50%);background: rgba(0, 0, 0, .5);border-radius: 8px;padding: 20px 30px 40px;}
.an-login-header{font-size: 18px;text-align: center;margin-bottom: 30px;color: #fff;}
.an-login-input{width: 100%;height: 40px;background: transparent;border-color: rgba(255, 255, 255, .5);color: rgba(255, 255, 255, .7);margin-bottom: 20px;border-radius: 4px;padding: 0 10px;transition: .4s;}
.an-login-input:focus{border-color: #26b9af;}
.an-login-btn{display: inline-block;width: 100%;height: 40px;background-color: #26b9af;border: 1px solid #26b9af;border-radius: 4px;color: #fff;transition: .4s;line-height: 40px;cursor: pointer;padding: 0;}
.an-login-btn:hover{opacity: 0.8;}
.an-login-bg{width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: url(/static/images/an-login-bg.jpg) center;z-index: 0;background-size: cover;}
</style>
