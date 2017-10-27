<template>
  <div style="padding: 20px">
    <Button type="primary" icon="plus-round" @click="toggleSelection">新增</Button>
    <data-grid :rows="news.listData" :columns="news.tplData" :config="news.globalConfig"></data-grid>
  </div>
</template>
<script>
  import DataGrid from '../partical/DataGrid/index'
//  import Buttons from '../partical/Buttons/index'
  const dataGrid = DataGrid.builder('news')
  dataGrid.setWrapperMode(true)
  export default {
    name: 'News',
    components: {
      DataGrid: DataGrid.component
    },
    data () {
      return {
        news: dataGrid.vm
      }
    },
    created: function () {
      dataGrid.setElement({
        key: 'options',
        title: '操作',
//        fixed: 'right',
        width: 160,
        render: (h, params) => {
          return h('ButtonGroup', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
              },
              on: {
                click: () => {
//                  console.log(111111, this)
                  this.$Modal.info({
                    title: '用户信息',
                    content: params
                  })
                }
              }
            }, '查看'),
            h('Button', {
              props: {
                type: 'success',
                size: 'small'
              },
              on: {
                click: () => {
                  this.remove(params.index)
                }
              }
            }, '编辑'),
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.remove(params.index)
                }
              }
            }, '删除')
          ])
        }
      })
      dataGrid.render({api: '/getPostTpl'}, {api: '/getPostAll'}).done(() => {
//    console.warn(this.news.listData, this.news.listData instanceof Array)
//    console.warn(this.news.tplData, this.news.tplData instanceof Array)
      })
    },
    methods: {
      show: (text) => {
        console.log(22222, this)
//        this.$Modal.info({
//          title: '用户信息',
//          content: text
//        })
      },
      toggleSelection: () => {
        const mode = dataGrid.getSelectedMode() !== 'multiple' ? 'multiple' : 'single'
        dataGrid.setSelectedMode(mode)
      }
    }
  }
</script>
