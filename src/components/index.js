// import search from './search'
// import table from './table'
// import tableSetting from './tableSetting'
import plane from './plane'
import edit from './edit'
import box from './box'
import list from './list'
export default {
  install (vue) {
    // vue.component('search', search)
    // vue.component('vTable', table)
    // vue.component('tableSetting', tableSetting)
    vue.component('plane', plane)
    vue.component('edit', edit)
    vue.component('box', box)
    vue.component('list', list)
  }
}
