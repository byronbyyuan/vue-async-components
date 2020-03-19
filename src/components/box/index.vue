<template>
  <div class='box'>
      <component :is="name" v-bind='propsData' :componentData='componentData' :select='select'></component>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    propsData: Object,
    componentData: Object,
    select: Object
  }
}
</script>

<style  scoped>
.box {
  padding: 20px;
  border: 1px solid beige;
  margin-bottom: 20px;
}
</style>
