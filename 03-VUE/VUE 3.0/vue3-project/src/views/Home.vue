<template>
    <div class="home">

        <ul>
            <li>你好</li>
            <li
                v-for="item in list"
                :key="item.id"
            >
                {{item.name}}
                <button @click="delItem(item.id)">删除</button>
            </li>
        </ul>
        <button @click="addItem">添加</button>

    </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs } from 'vue'
export default {
    name: 'Home',
    setup () {
        const state = reactive({
            money: 100,
            list: [
                {
                    id: 1,
                    name: '吃饭',
                },
                {
                    id: 2,
                    name: '睡觉',
                },
                {
                    id: 3,
                    name: '打豆豆',
                },
            ],
        })
        const delItem = (id) => {
            state.list = state.list.filter( item => item.id !== id)
        }
        const addItem = () => {
            state.list.push({
                id: state.list.length,
                name: "夏明"
            })
        }
        return {
            ...toRefs(state),
            delItem,
            addItem
        }
    },
}
</script>
