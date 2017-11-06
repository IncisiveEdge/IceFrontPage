<style>
html,body{
  overflow: hidden;
}
</style>

<style scoped>

</style>

<template>
    <div style="height: 100%">
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".nav-collpase">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">Ice创客基地(前台)</a>
          </div>
          <div class="navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="/">首页</a></li>
              <li><a href="/news">新闻资讯</a></li>
              <li><a href="#">课程体系</a></li>
              <li><a href="#">营地赛事</a></li>
              <li><a href="/products">产品教具</a></li>
              <li><a href="#">关于ICE</a></li>
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
                  预约联系
                  <b class="caret"></b>
                </a>
              </li>
              <ul class="dropdown-menu">
                <li><a href="#">预约</a></li>
                <li><a href="#">报名</a></li>
                <li><a href="#">加盟咨询</a></li>
                <li><a href="#">公众号</a></li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <!--<div class="container">-->
      <!--<div class="alert">-->
      <!--<a href="#" class="close" data-dismiss="alert">&times;</a>-->
      <!--</div>-->
      <!--</div>-->
      <div id="container" style="margin-top: 50px; height:calc(100% - 80px);overflow-x: hidden; overflow-y: auto; background-color: #eaeaea">
        <router-view></router-view>
        <hr>
        <footer style="position: fixed;bottom:0;left:0;height: 30px;width: 100%; background-color: #eee">
          <p>
            <a href="#" target="_blank">
              Caro  2017
            </a>
          </p>
        </footer>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Index',
    computed: {
      user () {
        this.$store.commit('getSessionUser')
        return this.$store.state.user
      }
    }
  }
</script>
