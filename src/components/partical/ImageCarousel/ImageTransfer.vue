<style>

</style>

<style scoped>

</style>

<template>
  <Transfer
    :data="data"
    :target-keys="target"
    :render-format="setting.render"
    @on-change="setting.onChange"
    :filterable="setting.filterable"
    :filter-method="setting.filterMethod"
    :operations="setting.bridgeName"
    :list-style="setting.listStyle"
    :not-found-text="setting.placeholder"
    :filter-placeholder="setting.filterPlaceholder",
    :titles="setting.titles"
    :selected-keys="setting.selectedKeys"
    :options="setting.options"
  >
    <div v-if="setting.bottomVisible" :style="setting.bottomStyle">
      <!--<Button type="ghost" size="small" @click="reloadMockData">刷新</Button>-->
    </div>
  </Transfer>
</template>

<script>
  export default {
    name: '',
    props: ['data', 'target', 'setting']
  }
</script>
