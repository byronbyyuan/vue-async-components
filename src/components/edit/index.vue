<template>
  <div class='edit'>
    <p class='title'>{{title}}</p>
    <div>
      <div class='mt20'>
          <span class='label'>选择展示组件</span>
          <select name="tigong" id="tigong" v-model="select.active">
            <option :value="item" v-for="(item, index) in componentsList" :key='index'>{{item}}</option>
          </select>
      </div>
      <div for="" v-for='(item, key) in componentData.propsData' :key='key' class='mt20'>
        <span class='label'>{{key}}</span>
        <input type="text" v-model.trim="componentData.propsData[key]">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    componentsList: Array,
    componentData: Object,
    select: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  select, input{
    width: 300px;
    height: 30px;
    border-radius: none;
  }
  .label {
    font-size: 12px;
    width: 125px;
    text-align: left;
    display: inline-block;

  }
  .mt20 {
    margin-bottom: 20px;
  }
</style>
