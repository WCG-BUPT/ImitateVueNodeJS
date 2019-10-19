<template>
  <div id="app">
    <my-header />
    <div class='main-section'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.main-section {
  margin: auto;
  margin-top: 50px;   /* for Header */
  width: 1200px;
}
</style>
