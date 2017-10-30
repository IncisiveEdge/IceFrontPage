<style>

</style>

<style scoped>

</style>
<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="编号">
      <Input v-model="formItem.id"></Input>
    </FormItem>

    <FormItem label="标题">
      <Input v-model="formItem.title"></Input>
    </FormItem>

    <FormItem label="摘要">
      <Input v-model="formItem.newsabstract" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
    </FormItem>

    <FormItem label="内容">
      <Input v-model="formItem.newscontent" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
    </FormItem>

    <FormItem label="图片上传">
      <i-upload :config="upload"></i-upload>
    </FormItem>

    <FormItem label="更新次数">
      <Input v-model="formItem.readtimes"></Input>
    </FormItem>

  </Form>
</template>

<script>
  import IUpload from '../Upload'
  export default {
    name: '',
    props: ['item'],
    components: {
      IUpload
    },
    data () {
      return {
        formItem: {
          id: 12,
          newsabstract: '这是用来测试的标题',
          newscontent: '我肚子里还是有货的',
          newspic: '123',
          pubtime: '2017-10-15 12:33:38.0',
          readtimes: 20,
          title: '2017ICE创新大会'
        },
        upload: {}
      }
    }
  }
</script>
