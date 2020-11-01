<template>
  <div class="about">
    <h1>This is an about page{{ aa }}</h1>
    <h1>This is an about page{{ aa }}</h1>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    console.log(123)
    console.log(123)
    let aa = ref(100)
    aa.value++ 
    return {
      aa,
    }
  }
}
</script>
