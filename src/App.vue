<template>
  <Navigator />
</template>
<script>
import Vue from "vue"
import  Navigator  from "@/shared/Navigator.vue"
export default Vue.extend({
  name:"App",
  components:{
    Navigator
  }
})
</script>

<style lang="scss">
@import "@/assets/scss/layout/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
