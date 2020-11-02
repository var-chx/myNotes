<template>
  <div class="about">
    <h1>一般的ref{{ money }}</h1>
    <button @click="money++">按钮</button>

    <h1>对象的属性{{ car.brand }}</h1>
    <button @click="car.brand = '奔驰'">按钮</button>

    <h1>This is an about page{{ money0 }}</h1>
    <button @click="money0++">按钮</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue'
export default {
  setup () {
    let money = ref(100)
    const state = reactive({
        money0: 1000,
        car: {
            brand: '宝马',
            price: 1000000,
        }
    })
    // 监听一般的 ref
    watch(money, (newVal) => {
        console.log(newVal, '一般的ref变了...')
    })
    // 监听包裹的基本类型
    watch(() => state.money0, (newVal) => {
        console.log(newVal, '包裹的基本类型变了...')
    })
    // 监听的包裹对象 需要 deep 参数
    watch(() => state.car, (newVal) => {
        console.log(newVal, '监听的对象变了...')
    }, {
        deep: true
    })
    // 监听包裹对象 的某一个属性
    watch(() => state.car.brand, (newVal) => {
        console.log(newVal, '监听的对象的某个属性变了...')
    })
    // 一次监听多个属性 
    watch([money,() => state.money0, () => state.car,],([money, car]) => {
        console.log(money, car, '监听多个属性...')
    }, {
        deep: true
    })
    // 直接监听一个 reactive 
    watch(state, (val) => {
        console.log(val, '监听的 reactive变化了... ')
    }, {
        deep: true
    }) 
    return {
        money,
        ...toRefs(state)
    }
  }
}
</script>
