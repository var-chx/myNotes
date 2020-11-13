import Vue from 'vue'
import App from './App.vue'
import chuhx from '../packages'
Vue.use(chuhx)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
