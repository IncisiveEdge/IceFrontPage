<style>

</style>

<style scoped>

</style>

<template>
  <Form :model="setting" :label-width="100">
    <Row>
      <Col :xs="24" :sm="24" :md="12" :lg="12">
      <FormItem label="自动切换速度">
        <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
      </FormItem>
      </Col>
      <Col :xs="24" :sm="24" :md="12" :lg="12">
      <FormItem label="宽高比(1 - 4)">
        <Slider v-model="pictureRadio" :tip-format="format"></Slider>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="24" :md="12" :lg="12">
      <FormItem label="指示器位置">
        <RadioGroup v-model="setting.dots" type="button">
          <Radio label="inside">内部</Radio>
          <Radio label="outside">外部</Radio>
          <Radio label="none">不显示</Radio>
        </RadioGroup>
      </FormItem>
      </Col>
      <Col :xs="24" :sm="24" :md="12" :lg="12" span="12">
      <FormItem label="切换箭头">
        <RadioGroup v-model="setting.arrow" type="button">
          <Radio label="hover">悬停时显示</Radio>
          <Radio label="always">一直显示</Radio>
          <Radio label="never">不显示</Radio>
        </RadioGroup>
      </FormItem>
      </Col>
    </Row>

    <Row>
      <Col :xs="24" :sm="24" :md="8" :lg="8" span="8">
      <FormItem label="自动切换">
        <i-switch v-model="setting.autoplay">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </FormItem>
      </Col>
      <Col :xs="24" :sm="24" :md="8" :lg="8" span="8">
      <FormItem label="指示器触发方式">
        <RadioGroup v-model="setting.trigger" type="button">
          <Radio label="click">点击</Radio>
          <Radio label="hover">悬停</Radio>
        </RadioGroup>
      </FormItem>
      </Col>
      <Col :xs="24" :sm="24" :md="8" :lg="8" span="8">
      <FormItem label="指示器触发方式">
        <RadioGroup v-model="setting.trigger" type="button">
          <Radio label="click">点击</Radio>
          <Radio label="hover">悬停</Radio>
        </RadioGroup>
      </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script>
  export default {
    name: 'ImgCarouselController',
    props: ['setting'],
    computed: {
      pictureRadio: {
        get () {
          return this.setting.imageRadio / 4 * 100
        },
        set (value) {
          this.setting.imageRadio = Number((value / 100 * 4).toFixed(2))
        }
      }
    },
    methods: {
      format (val) {
        return (val / 100 * 4).toFixed(2)
      }
    }
  }
</script>
