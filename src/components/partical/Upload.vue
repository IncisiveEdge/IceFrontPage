<style>

</style>

<style scoped>

</style>

<template>
  <Upload
    :action="Upload.url"
    :data="Upload.params"
    :headers="Upload.headers"
    :multiple="Upload.multiple"
    :name="Upload.name"
    :with-credentials="Upload.cookie"
    :show-upload-list="Upload.showUploadList"
    :type="Upload.type"
    :accept="Upload.accept"
    :format="Upload.format"
    :max-size="Upload.maxSize"
    @before-upload="Upload.before"
    @on-progress="Upload.progress"
    @on-success="Upload.success"
    @on-error="Upload.error"
    @on-preview="Upload.preview"
    @on-remove="Upload.remove"
    @on-format-error="Upload.formatError"
    @on-exceeded-size="Upload.sizeError"
    :default-file-list="Upload.defaultFiles"
  >
    <slot v-if="Upload.slot === true" name="upload"></slot>
    <Button v-if="Upload.slot === false" type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
  </Upload>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: '',
    props: ['config'],
    computed: {
      Upload () {
        let m = {
          url: '',
          before: (file) => {

          },
          progress: (event, file, fileList) => {

          },
          success: (response, file, fileList) => {

          },
          error: (e, file, fileList) => {

          },
          preview: (file) => {

          },
          remove: (file, fileList) => {

          },
          formatError: (file, fileList) => {

          },
          sizeError: (file, fileList) => {

          },
          slot: false,
          defaultFiles: []
        }
        $.extend(m, this.config)
        return m
      }
    }
  }
</script>
