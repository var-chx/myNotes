<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <button-examples></button-examples>
        <dialog-examples></dialog-examples>
    </div>
</template>

<script>
import DialogExamples from './components/DialogExamples.vue'
import ButtonExamples from './components/ButtonExamples.vue'

export default {
    name: 'App',
    components: {
        ButtonExamples,
        DialogExamples,
    },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
