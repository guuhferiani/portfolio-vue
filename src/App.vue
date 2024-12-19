<template>
  <div id="app">
    <HeaderSec />
    <HeroSec />
    <SobreSec />


  </div>
</template>

<script>
import HeaderSec from './components/HeaderSec.vue';
import HeroSec from './components/HeroSec.vue';
import SobreSec from './components/SobreSec.vue';



export default {
  name: 'App',
  components: {
    HeaderSec,
    HeroSec,
    SobreSec,

  }
};
</script>

<style scoped> </style>