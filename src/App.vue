<style>
  html,body{
    font-family: "Microsoft Yahei";
    overflow-x: hidden;
  }
  .navbar{
    border-radius: 0;
  }
  a{
    color: #00B7FF;
  }
</style>
<template>
  <div id="app">
    <admin-index v-if="isAdminPage"></admin-index>
    <index v-else></index>

  </div>
</template>

<script>
import index from './components/index/index'
import adminIndex from './components/admin/index'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    index,
    adminIndex
  },
  beforeCreate () {
    if (!this.$route.path.indexOf('/admin/')) {
      this.isAdminPage = true
    }
    console.log(this.$route)
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
