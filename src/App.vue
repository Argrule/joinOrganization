<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/background.jpg'
export default {
  name:'App',
  methods:{
    },
}
</script>

<style scoped>
#app{
    background-image: url('./assets/background.jpg');
    background-size: cover;
    /* background-color: rgb(1, 0, 0); */
  }
  div{
    text-align: center;
  }
</style>