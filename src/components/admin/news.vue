<template>
  <data-grid :rows="news.listData" :columns="news.tplData" :config="news.globalConfig"></data-grid>
</template>
<script>
  import DataGrid from '../partical/DataGrid/index'
  const dataGrid = DataGrid.builder('news')
  dataGrid.render({api: '/getPostTpl'}, {api: '/getPostAll'}).done(() => {
//    console.warn(this.news.listData, this.news.listData instanceof Array)
//    console.warn(this.news.tplData, this.news.tplData instanceof Array)
  })

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
    }
  }
</script>
