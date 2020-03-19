<template>
  <div>
      <p>我是test组件的name: {{name}}</p>
      <p>我是test组件的title: {{title}}</p>
      <p>我是test组件的content: {{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    content: String
  }
}
</script>

<style  scoped>

</style>
