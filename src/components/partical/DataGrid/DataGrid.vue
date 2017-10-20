<style scoped>

</style>
<template>
  <div style="padding: 20px">
    <div style="margin: 10px">
      <Button v-for="(btn, index) in buttonsList" :key="index" :id="btn.id" :type="btn.type" :size="btn.size" :icon="btn.icon" @click="btn.onclick">{{btn.name}}</Button>
      <!--<Button type="primary" icon="plus-round">新增</Button>-->
      <!--<Button type="warning" icon="edit">修改</Button>-->
      <!--<Button type="success" icon="eye">查看</Button>-->
      <!--<Button type="error" icon="close-round">删除</Button>-->
      <!--显示边框 <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>-->
      <!--显示斑马纹 <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>-->
      <!--显示索引 <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>-->
      <!--显示多选框 <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>-->
      <!--显示表头 <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>-->
      <!--表格滚动 <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>-->
      <!--<br>-->
      <!--<br>-->
      <!--表格尺寸-->
      <!--<Radio-group v-model="tableSize" type="button">-->
      <!--<Radio label="large">大</Radio>-->
      <!--<Radio label="default">中</Radio>-->
      <!--<Radio label="small">小</Radio>-->
      <!--</Radio-group>-->
    </div>
    <Table :border="true" :stripe="true" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="data" :columns="template"></Table>
    <div v-if="config.pagination.total" style="margin-top: 20px;overflow: hidden">
      <div style="float: right;margin-bottom: 180px;">
        <Page show-total show-sizer show-elevator :total="config.pagination.total" :current="config.pagination.currentPage" :page-size-opts="config.pagination.sizeOptions" @on-change="onChange" @on-page-size-change="onSizeChange"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DataGrid',
    props: ['rows', 'columns', 'config'],
    data () {
      return {
        buttonsList: [{
          id: 'test',
          name: '测试',
          icon: 'edit',
          type: 'primary',
          size: 'default',
          onclick (event) {
            console.log(event)
          }
        }],
        showBorder: false,
        showStripe: false,
        showHeader: true,
        showIndex: true,
        showCheckbox: false,
        fixedHeader: false,
        tableSize: 'default'
      }
    },
    methods: {
      onChange (curPage) {
        this.config.pagination.currentPage = curPage
//        if (this.config.pagination.onChange) {
//          this.config.pagination.onChange(curPage)
//          return
//        }

        console.warn(11111, curPage)
      },
      onSizeChange (pageSize) {
        this.config.pagination.perPage = pageSize
//        if (this.config.pagination.onSizeChange) {
//          this.config.pagination.onSizeChange(pageSize)
//          return
//        }

        console.warn(22222, pageSize)
      }

    },
    computed: {
      data () {
        if (!this.config.pagination.async) {
          return this.rows.filter((item, index) => {
            const min = Math.max((this.config.pagination.currentPage - 1) * this.config.pagination.perPage + 1, 1)
            const max = Math.min(this.config.pagination.currentPage * this.config.pagination.perPage, this.rows.length)
            return index + 1 >= min && index + 1 <= max
          })
        }
      },
      template () {
        let tpl = [{
          type: 'index',
          title: '#',
          align: 'center',
          width: 50
        }]
        tpl = tpl.concat(this.columns)
        return tpl
      }
    },
    created () {
    }
  }
</script>
