<template>
  <div>
    <side></side>
    <navBar />
    <div class="an-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import side from './side.vue'
import navBar from './navBar.vue'
export default {
  components: {
    side, navBar
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
.an-main{width: 100%;height: calc(100% - 50px);background-color: #f2f2f2;position: fixed;top: 50px;left: 0;overflow: auto;z-index: 98;box-sizing: border-box;padding-left: 200px;overflow: hidden;}
</style>
