<template>
  <div id="app">
    <HeaderSec />
    <HeroSec />
    <SobreSec />
    <FeitosSec/>



  </div>
</template>

<script>
import HeaderSec from './components/HeaderSec.vue';
import HeroSec from './components/HeroSec.vue';
import SobreSec from './components/SobreSec.vue';
import FeitosSec from './components/FeitosSec.vue';



export default {
  name: 'App',
  components: {
    HeaderSec,
    HeroSec,
    SobreSec,
    FeitosSec,

  }
};
</script>

<style scoped> </style>