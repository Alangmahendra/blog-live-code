<template>
  <div id="app">
    <headers/>
    <router-view/>
  </div>
</template>

<script>
import headers from './components/Headers'
import store from './vuex/store'
export default {
  components:{headers},
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
