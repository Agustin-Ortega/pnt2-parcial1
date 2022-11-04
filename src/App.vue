<template>
  <div class="container-fluid mt-3">
    <navBar />
    <inicio/>
    
    <router-view></router-view>
    <div>
      
    </div>
  </div>

</template>

<script>

import navBar from './componentes/navBar.vue';
import Inicio from './componentes/inicio.vue'

export default {
  name: 'App',
  components: {
    navBar,
    Inicio
  }
}
</script>

<style>

</style>
