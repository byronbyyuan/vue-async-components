<template>
  <div class='home'>
      <h1>this is home</h1>
      <!-- 动态组件2种： -->
      <!-- box实现已注册全局组件动态使用 -->
      <!-- plane实现组件非注册组件动态引入 -->
      <box v-for='(item, index) in defaultConfig' v-bind='configs[item]' :key='index' :select='select' :componentData='componentsData'></box>
  </div>
</template>

<script>
import Config from '../../config'
export default {
  data () {
    return {
      componentsDatas: Config.componentsDatas,
      configs: Config.config,
      defaultConfig: ['edit', 'list', 'plane'],
      select: {
        active: 'test'
      }
    }
  },
  computed: {
    componentsData () {
      return this.componentsDatas[this.select.active]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
