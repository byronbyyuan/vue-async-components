
<script>
export default {
  created () {
    this.get(this.componentData.name)
  },
  methods: {
    get (name) {
      this.template = require(`../../asyncComponents/${name}/index.vue`).default
    }
  },
  watch: {
    componentData () {
      this.get(this.componentData.name)
    }
  },
  data () {
    return {
      template: ''
    }
  },
  render (h, cxt) {
    console.log(this.componentData)
    return h('div', {
      class: 'plane'
    }, [h('p', {class: 'title'}, [this.title]), h('h3', {class: 'h3'}, ['当前加载的异步组件为' + this.componentData.name]), h(this.template, {props: this.componentData.propsData})])
  },
  props: {
    componentData: Object,
    title: String
  }
}
</script>

<style  scoped>

</style>
