<template>
  <div class='list'>
      <p class='title'>{{title}}</p>
      <p>当前展示组件为：<strong>{{componentData.name}}</strong></p>
      <p>当前已有配置属性</p>
      <ul>
        <li v-for='(item, key) in componentData.propsData' :key='key'>
          <span>{{key + "：" + item}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    componentData: Object,
    title: String
  }
}
</script>

<style  scoped>

</style>
