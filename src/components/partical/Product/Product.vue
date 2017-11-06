<style>

</style>

<style scoped>
  .bg{
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #aaa;
    color: #aaa;
  }

  .bg .wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    background-attachment: fixed;
    /*display: none;*/
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*align-items: center;*/
    padding: 0 20px;
    z-index: 3000;
  }

  .bg .wrapper> h2,
  .bg .wrapper> p{
    display: block;
    /*height: 50%;*/
    visibility: hidden;
  }

  .bg .wrapper> p{
    text-align: justify;
    font-size: larger;
    padding-left: 40px;
  }

  .bg .block{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
  .bg:hover .block{
    background-color: rgba(0, 0, 0, 0.3);
  }
  .bg:hover .wrapper{
    transform: scale(.85);
    background-color: rgba(0, 0, 0, 0.6);
  }

  .bg:hover .wrapper h2,
  .bg:hover .wrapper p{
    /*display: block;*/
    color: white;
    visibility: visible;
  }

  /*.bg:hover img{*/
    /*display: none;*/
    /*transform: scale(1.1)*/
  /*}*/

  .bg>.spin,
  .bg>.alt{
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
  }

  .bg>.alt{
    display: inline-block;
    width: 100px;
    left: calc(50% - 50px);
    text-align: center;
  }

  .status-wrapper{
    width: 100% ;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
    <div style="width: 100%; height: 100%">
      <div class="bg">
        <Spin class="spin" v-if="loading"></Spin>
        <i class="alt">{{width}} x {{height}}</i>
        <div class="wrapper">
          <h2 v-text="title"></h2>
          <p v-text="content"></p>
        </div>
        <div class="block"></div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: '',
    data () {
      return {
        image: '/static/images/demo/demo3.jpg',
        loading: true,
        title: '3D打印机',
        content: '我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。',
        width: '',
        height: ''
      }
    },
    mounted () {
      const wrapper = $('.bg', $(this.$el))
      this.width = wrapper.outerWidth()
      this.height = wrapper.outerHeight()
      const img = new Image()
      img.src = this.image
      img.onload = (event) => {
        this.loading = false
        const imgRate = img.width / img.height
        const elRate = this.$el.clientWidth / this.$el.clientHeight
        let cell = $('<img style="position: absolute; left: 0; top: 0; transition: all .3s linear; z-index: 1000" src="' + this.image + '">')
        wrapper.prepend(cell)
        wrapper.hover(function () {
          cell.css('transform', 'scale(1.2)')
        }, function () {
          cell.css('transform', 'scale(1)')
        })
        if (imgRate >= elRate) {
          cell.css('height', '100%')
          const left = parseInt((img.width * wrapper.outerHeight() / img.height - wrapper.outerWidth()) / 2)
          cell.css('left', -left + 'px')
        } else {
          cell.css('width', '100%')
          const top = parseInt((img.height * wrapper.outerWidth() / img.width - wrapper.outerHeight()) / 2)
          cell.css('left', -top + 'px')
        }
      }
    }
  }
</script>
