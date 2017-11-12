<style>
  html,body{
    overflow: hidden;
  }
</style>

<style scoped>
  /******** footer **********/
  footer {
    background: #333;
    color: #eee;
    font-size: 11px;
    padding: 20px;
  }

  footer ul{
    padding-left:0;
  }

  footer ul>li {
    list-style: none;
    padding: 0;
  }

  footer ul>li>a{
    font-size: 15px;
    line-height:27px;
    color: #aaa;
  }

  footer p{
    color: #aaa;
  }

  footer ul>li>a:hover{
    color: white;
  }

  footer ul>li>a>span{
    font-size: 14px!important;
    display: inline-block;
    margin-right: 5px;
  }

  footer h4{
    border-bottom: 1px dashed #666;
    padding-bottom:8px;
    position: relative;
  }

  footer h4:after{
    content: '';
    position: absolute;
    bottom:-1px;
    left:0;
    height: 1px;
    width: 80px;
    background-color: #0c79bc;

  }

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
              <ul class="dropdown-menu dropdown-menu-default">
                <li><a href="#">预约</a></li>
                <li><a href="#">报名</a></li>
                <li><a href="#">加盟咨询</a></li>
                <li><a href="#">公众号</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--<div class="container">-->
    <!--<div class="alert">-->
    <!--<a href="#" class="close" data-dismiss="alert">&times;</a>-->
    <!--</div>-->
    <!--</div>-->
    <div id="container" style="margin-top: 50px; height:calc(100% - 50px);overflow-x: hidden; overflow-y: auto; background-color: #eaeaea">
      <router-view></router-view>
      <hr>
      <footer>
        <div class="container">
          <div class="row">
           <div class="col-sm-4">
            <h4>关于我们</h4>
            <p>ICE创客基地全称...是一个及...与...为一体的...平台，旨在建立一个...环境</p>
            <p>本网站由&nbsp;<span class="glyphicon glyphicon-heart"></span>&nbsp;Insicive Edge 团队制作</p>
          </div>

          <div class="col-sm-4">
            <h4>导航</h4>
            <ul class="unstyled">
              <li><a href=""><span class="fa fa-tachometer"></span>主页</a></li>
              <li><a href=""><span class="fa fa-server"></span>服务</a></li>
              <li><a href=""><span class="fa fa-link"></span>链接</a></li>
              <li><a href=""><span class="fa fa-send"></span>联系我们</a></li>
            </ul>
          </div>

          <div class="col-sm-4">
            <h4>关注我们</h4>
            <ul class="unstyled">
              <li><a href=""><span class="fa fa-weibo"></span>微博</a></li>
              <li><a href=""><span class="fa fa-wechat"></span>微信</a></li>
              <li><a href=""><span class="fa fa-qq"></span>QQ</a></li>
            </ul>
          </div>

          <div class="col-sm-12">
          <h5 id="copyright">Copyright &copy; Insicive Edge</h5>
          </div>
        </div>
      </div>

    </footer><!--页脚结束-->
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
