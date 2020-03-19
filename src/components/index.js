import plane from './plane'
import edit from './edit'
import box from './box'
import list from './list'
export default {
  install (vue) {
    vue.component('plane', plane)
    vue.component('edit', edit)
    vue.component('box', box)
    vue.component('list', list)
  }
}
