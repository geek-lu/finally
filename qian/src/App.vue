<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
export default {
  components:{
    'app-header':AppHeader,
    'app-footer':AppFooter,
  }
}
</script>

<style>
@import './assets/css/common.css';
@import './assets/css/mycss.css';
</style>
