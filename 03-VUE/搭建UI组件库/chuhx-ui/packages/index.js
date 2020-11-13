
import HxButton from './button.vue'
import HxDialog from './dialog.vue'
import './font/iconfont.js'
import './font/index.css'

const components = [
    HxButton,
    HxDialog,
]

const install = (Vue) => {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}

export default {
    install,
}
