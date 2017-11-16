<style>

</style>

<style scoped>

</style>
<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="标题">
      <Input v-model="formItem.title"></Input>
    </FormItem>

    <FormItem label="摘要">
      <Input v-model="formItem.newsabstract" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
    </FormItem>

    <FormItem label="标题图片">
      <i-upload :config="upload"></i-upload>
    </FormItem>

    <FormItem label="内容编辑">
      <i-editor :value="formItem.content"></i-editor>
    </FormItem>

  </Form>
</template>

<script>
  import IUpload from '../Upload/Upload'
  import IEditor from '../Editor'
  export default {
    name: '',
    props: ['item'],
    components: {
      IUpload,
      IEditor
    },
    data () {
      return {
        formItem: {
          id: 12,
          title: '我是标题党',
          newsabstract: '这是用来测试的标题',
          newspic: '123',
          pubtime: '2017-10-15 12:33:38.0',
          readtimes: 20,
          content: '<h1 style="text-align:center">2017ICE创新大会将如期举行</h1><p style="color:red">别说你们不知道，<i>别说你们不来哈</i><br/><img width=300 src="/static/images/demo/demo1.jpg"/></p>'
        },
        upload: {}
      }
    }
  }
</script>
