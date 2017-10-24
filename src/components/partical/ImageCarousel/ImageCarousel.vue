<style>

</style>

<style scoped>

</style>

<template>
  <Carousel
    v-model="model"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :trigger="setting.trigger"
    :arrow="setting.arrow">
    <CarouselItem  v-for="(image, index) in images" :key="index">
      <div class="demo-carousel" v-text="image.text"></div>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name: 'ImgCarousel',
    props: ['setting', 'images'],
    data () {
      return {
        model: 0
      }
    }
  }
</script>
