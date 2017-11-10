<style scoped>
  .wrapper{
    margin: 50px 15%;
  }
  .news-wrapper{
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>

<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-9">
        <news class="news-wrapper"></news>
        <news class="news-wrapper"></news>
        <news class="news-wrapper"></news>
        <news class="news-wrapper"></news>
        <news class="news-wrapper"></news>
        <news class="news-wrapper"></news>
      </div>
      <div class="col-md-3">
        <news class="news-wrapper"></news>
        <news class="news-wrapper"></news>
      </div>
    </div>
  </div>

</template>

<script>
  import News from '../partical/Article/Article'
  export default {
    name: '',
    components: {
      News
    }
  }
</script>
