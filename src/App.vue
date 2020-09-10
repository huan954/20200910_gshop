<template>
  <div id="app">
    <router-view />
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  components:{
    FooterNav
  }
};
</script>

<style>

</style>