<template>
  <div id="app">
    <HeaderSec />


  </div>
</template>

<script>
import HeaderSec from './components/HeaderSec.vue';



export default {
  name: 'App',
  components: {
    HeaderSec,

  }
};
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  color: #272829;
}

a {
  color: #149ddd;
  text-decoration: none;
}

a:hover {
  color: #37b3ed;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", sans-serif;
}

/* Outras regras globais... */

</style>
