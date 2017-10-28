<template>
  <div style="padding: 20px">
    <ie-list :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
    <i-modal :modal="modal">
      <div slot="content">
        <news-edit></news-edit>
      </div>
    </i-modal>
  </div>
</template>
<script>
  import {IEListObject} from '../../assets/IEList'
  import ieList from '../partical/DataGrid/DataGrid'
  import NewsEdit from '../partical/NewsAdmin/NewsEdit'
  import IModal from '../partical/Modal'
  export default {
    name: 'News',
    components: {
      ieList,
      NewsEdit,
      IModal
    },
    data () {
      return {
        ieList: new IEListObject('ieList', this),
        modal: {
          model: false
        }
      }
    },
    created: function () {
      /*
       name: '',
       onclick: '',
       icon: '',
       type: 'default',
       size: 'default',
       id: 'data-list-btn-' + new Date().getTime() * Math.random(),
       disabled: false,
       visible: true
       */
      this.ieList.addBtn(['新增', 'new', 'plus', 'primary'])
      this.ieList.addBtn(['查看', 'view', 'eye', 'info'])
      this.ieList.addBtn(['编辑', 'edit', 'edit', 'success'])
      this.ieList.addBtn(['删除', 'del', 'trash-a', 'error'])
      this.ieList.render({api: '/getnewstbtile.do'}, {api: '/getnewslist.do'}).done(() => {
      })
    },
    methods: {
      new () {
        this.modal.model = true
        this.modal.title = '新增新闻'
        this.modal.width = 800
        this.modal.textOk = '新增'
        this.modal.onOk = () => {
          this.modal.model = false
        }
        this.modal.onCancel = () => {
          this.modal.model = false
        }
      },
      view () {

      },
      edit () {

      },
      del () {
        this.$Modal.confirm({
          title: '确认对话框标题',
          content: `<Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
                    <p>点击删除后，轮播图片列表将永久性删除数据</p>
                  <p>是否继续删除？</p>`,
          okText: '删除',
          cancelText: '取消',
          onOk: () => {
            console.log('aaa')
          }
        })
      }
    }
  }
</script>
