<script src="../../../../Backup/viewerjs-master/dist/viewer.js"></script>
<style>

</style>

<style scoped>

</style>

<template>
    <i-modal :modal="modal">
      <div slot="content">
        <div>
          <div class="image-panel">
            <Spin v-show="!imageSrc" class="spin"></Spin>
            <img v-show="imageSrc" style="width: 160px" :src="imageSrc">
          </div>
        </div>
      </div>
    </i-modal>
</template>

<script>
  import IModal from './Modal'
  export default {
    name: '',
    components: {
      IModal
    },
    props: ['src'],
    data () {
      return {
        modal: {
          model: true
        },
        imageSrc: '../../../assets/images/demo/login-bg.jpg'
      }
    },
    created () {
      console.log(this)
    }
  }
</script>
