<style scoped>
  html, body {
    height: 100%;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .ivu-row-flex {
    height: 100%;
  }

  .layout-breadcrumb {
    padding: 0 15px;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px 0;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    height: calc(100% - 140px);
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
  }

  .layout-logo-left {
    width: 90%;
    height: 40px;
    line-height: 40px;
    background: #5b6270;
    /*text-align: center;*/
    padding-left: 10px;
    border-radius: 3px;
    margin: 15px auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }

  .ivu-tabs {
    height: 100%;
  }

  .ivu-tabs-bar{
    margin-bottom: 0;
  }

  .main-tabs-container > ul.nav-tabs > li.active {
    position: relative;
  }

  .tab-close,.tab-refresh{
    display: none;
    position:absolute;
    z-index:880;
    color:#ccc;
    -webkit-font-size:xx-small;
    -moz-font-size:x-small;
    font-size:xx-small;
    cursor: pointer;
  }
  .tab-close{
    top:4px;
    right:6px;
  }

  .tab-refresh{
    top:5px;
    left:2px;
  }

  li:hover >.tab-close{
    display: block;
  }

  li.active >.tab-close {
    display: block;
  }

  li.active:hover >.tab-refresh {
    display: block;
  }

  .tabsmore {
    float: right;
    position: relative;
    list-style: none;
    margin-top: -30px;
    padding-right: 5px;
  }
  .tabsmore a {
    text-decoration: none;
    color: #777;
  }

  .tabsmore a:hover {
    cursor: pointer;
  }

  .tabsmore .ivu-dropdown-menu>.ivu-dropdown-item{
    padding-right:5px !important;
  }


  .tabdrop {
    position: relative;
    list-style: none;
    margin-top: 10px;
    padding-right: 20px;
  }

  .tabdrop a {
    text-decoration: none;
    color: #777;
    cursor: pointer;
    z-index:900;
  }

  .collapse-tab {
    position: relative;
  }

  .remove-collapse-tab {
    color: #ccc;
    float: right;
  }

</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1" theme="dark" width="auto"  @on-select="selectItem">
        <div class="layout-logo-left">
          <span style="color: rgb(45, 140, 240);font-size: larger">
            Ice 创客基地管理系统
          </span>
        </div>
        <MenuItem v-for="(menuItem, index) in menuData" :id="'menu-item-'+ menuItem.id" :key="index" :name="index">
          <Icon :type="menuItem.icon" :size="iconSize"></Icon>
          <span class="layout-text" v-text="menuItem.name"></span>
        </MenuItem>
      </Menu>
      </Col>
      <Col :span="spanRight" style="height: 100%">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="#">首页</BreadcrumbItem>
            <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
            <BreadcrumbItem>某应用</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <div class="layout-content">
        <div class="page-content-wrapper" id="main-content">
          <div class="page-content">
            <div class="main-tabs-container">
              <ul class="nav nav-tabs" ng-if="tabsData.length || tabsCollapse.length">
                <li v-for="(tabItem, index) in tabsData" :key="index" :class="{'active':tabItem.active}">
                  <div class="glyphicon glyphicon-remove tab-close" @click="closeTabItem(tabItem)"></div>
                  <div class="glyphicon glyphicon-refresh tab-refresh" @click="refreshTabContent(tabItem)"></div>
                  <a :title="tabItem.allName" @click="selectTabItem(tabItem)" :id="'tab-nav-'+tabItem.id" v-text="tabItem.header">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Dropdown class="tabsmore" v-if="tabsCollapse && tabsCollapse.length" placement="bottom-end" trigger="click">
          <a href="javascript:void(0)">
            <span class="badge" v-cloak v-text="tabsCollapse.length"></span>
            <b class="caret"></b>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item  v-for="(tabItem, index) in tabsCollapse" :key="index">
              <a class="collapse-tab" @click="openCollapseMenuInTabs(tabItem)">
                {{tabItem.header}}
                <b class="glyphicon glyphicon-remove remove-collapse-tab" @click="closeCollapseTabItem(tabItem,$event)">
                </b>
              </a>
            </Dropdown-item>
          </Dropdown-menu>
        </Dropdown>

        <div class="layout-content">
          <!--<transition class="animate-content" mode="out-in" :enter-active-class="'animated '+config.animateIn" :leave-active-class="'animated '+config.animateOut">-->
            <!--<keep-alive>-->
          <router-view class="content-router-view"></router-view>
            <!--</keep-alive>-->
          <!--</transition>-->
        </div>
        <!--<Tabs type="card" closable :animated="false" @on-tab-remove="handleTabRemove">-->
          <!--<TabPane v-for="(item, index) in tabItems" :key="index" v-if="item.active" :label="item.name" :id="'tab-item-'+ item.id">-->
          <!--</TabPane>-->
          <!--<TabPane label="标签一">-->
            <!--<div class="layout-content-main">-->
              <!--<router-view></router-view>-->
            <!--</div>-->
          <!--</TabPane>-->
          <!--<TabPane label="标签二" v-if="tab1">-->
          <!--</TabPane>-->
          <!--<TabPane label="标签三" v-if="tab2">-->
          <!--</TabPane>-->
        <!--</Tabs>-->
        <!--<div class="layout-content-main">内容区域</div>-->
      </div>

      <div class="layout-copy">
        2011-2017 &copy; Ice
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import 'iview/dist/styles/iview.css'
  import $ from 'jquery'
  import navPageFactory from '../../assets/js/nav-controller'
  export default {
    name: 'AdminIndex',
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        menuData: [{
          id: 'images',
          url: '/admin/images',
          name: '轮播图片',
          icon: 'aperture'
        }, {
          id: 'news',
          url: '/admin/news',
          name: '新闻管理',
          icon: 'compose'
        }, {
          id: 'matchs',
          url: '/admin/matchs',
          name: '赛事营地',
          icon: 'filing'
        }, {
          id: 'products',
          url: '/admin/products',
          name: '产品管理',
          icon: 'cube'
        }, {
          id: 'reports',
          url: '/admin/reports',
          name: '报告信息',
          icon: 'android-contacts'
        }],
        tabsData: [],
        tabsCollapse: [],
        tabsDataStack: [],
        tabContents: [],
        width: {}
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      },
      handleTabRemove (name) {
        this['tab' + name] = false
      },
      selectItem (name) {
        const menuItem = this.menuData[name]
        this.selectMegaMenuItem(menuItem)
      },
      selectMegaMenuItem (menuItem, flag) {
        // 点击三级菜单项弹出四级菜单项
        if (flag && menuItem.children && menuItem.children.length) {
          menuItem.isCollapse = !menuItem.isCollapse
//           改变isCollapse状态
        }
        if (!menuItem.children || !menuItem.children.length) {
          this.openMenuInTabs(menuItem)
//          $('.pulldown-menu').css('display', 'none')
        }
      }
    },
    created () {
      $.extend(this, navPageFactory)
      setTimeout(() => {
        this.selectMegaMenuItem(this.menuData[0])
        this.mainMenuResize(this, this)

        $('.ivu-tabs-bar').css('margin-bottom', '0')
        $('.ivu-tabs-content').css({'height': 'calc(100% - 48px)', 'overflow-y': 'auto', 'overflow-x': 'hidden', 'padding': '10px'})
      })
    }
  }
</script>

