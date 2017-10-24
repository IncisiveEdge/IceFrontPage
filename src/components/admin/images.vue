<style>
  .demo-carousel{
    /*width: 100%;*/
    /*height: 200px;*/
    background-color: #506b9e;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: larger;
    color: white;
  }
</style>
<template>
  <div style="padding: 20px">
    <img-carousel :images="images" :setting="setting"></img-carousel>
    <img-carousel-controller :setting="setting"></img-carousel-controller>
    <!--<img-transfer :data="selectableImages" :target="selectedImages" :setting="transferSetting"></img-transfer>-->
  </div>
</template>
<script>
  import $ from 'jquery'
  import ImgCarousel from '../partical/ImageCarousel/ImageCarousel'
  import ImgCarouselController from '../partical/ImageCarousel/ImageCarouselSettings'
  import ImgTransfer from '../partical/ImageCarousel/ImageTransfer'
  export default {
    components: {
      ImgCarousel,
      ImgCarouselController,
      ImgTransfer
    },
    data () {
      return {
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'inside',
          trigger: 'click',
          arrow: 'hover',
          imageRadio: 3
        },

        images: [{
          src: '',
          text: '测试1'
        }, {
          src: '',
          text: '测试2'
        }, {
          src: '',
          text: '测试3'
        }],
        selectableImages: this.getMockData(),
        selectedImages: this.getTargetKeys(),
        transferSetting: {
          render: function () {

          },
          onChange: function () {

          },
          filterable: true,
          filterMethod: function () {

          },
          bridgeName: ['移除', '添加'],
          listStyle: {},
          bottomVisible: true,
          bottomStyle: {},
          placeholder: '',
          filterPlaceholder: '',
          titles: ['列表1', '列表2'],
          selectedKeys: [],
          options: []

        }
      }
    },

    methods: {
      getMockData () {
        let mockData = []
        for (let i = 1; i <= 20; i++) {
          mockData.push({
            key: i.toString(),
            label: '内容' + i,
            description: '内容' + i + '的描述信息',
            disabled: Math.random() * 3 < 1
          })
        }
        return mockData
      },
      getTargetKeys () {
        return this.getMockData()
          .filter(() => Math.random() * 2 > 1)
          .map(item => item.key)
      }
    },
    created () {
      setTimeout(() => {
        const transferOptions = $('.transfer-options')
        transferOptions && transferOptions.length && $(transferOptions[1]).hide()
      })
    }
  }
</script>
