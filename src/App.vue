<template>
  <div id="app">
    <HeaderSec />
    <HeroSec />
    <SobreSec />
    <Habilidades />

</div>
</template>

<script>
import HeaderSec from './components/HeaderSec.vue';
import HeroSec from './components/HeroSec.vue';
import Habilidades from './components/Habilidades.vue';
import SobreSec from './components/SobreSec.vue';


export default {
  name: 'App',
  components: {
    HeaderSec,
    HeroSec,
    SobreSec,
    Habilidades,


  }
};
</script>

<style scoped> </style>