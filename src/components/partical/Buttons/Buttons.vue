<style>

</style>

<style scoped>

</style>

<template>
  <Button v-for="(btn, index) in buttons" :key="index" :id="btn.id" :type="btn.type" :size="btn.size" :icon="btn.icon" @click="btn.onclick">{{btn.name}}</Button>
</template>

<script>
  export default {
    name: '',
    props: ['buttons']
  }
</script>
