<template>
  <div>
    <side></side>
    <navBar />
  </div>
</template>

<script>
import side from './side.vue'
import navBar from './navBar.vue'
// import { login } from '@/api/user.js'
import request from '@/utils/request'
export default {
  components: {
    side, navBar
  },
  data () {
    return {
    }
  },
  created () {
    let data = {
      phone: '100',
      password: '101'
    }
    request.post('http://127.0.0.1:3000/api/login', data).then(res => {
      console.log(res)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
