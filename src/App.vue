<template>
  <div id="app">
    <HeaderSec />
    <HeroSec />
    <SobreSec />
    <MyHabilidades />

</div>
</template>

<script>
import HeaderSec from './components/HeaderSec.vue';
import HeroSec from './components/HeroSec.vue';
import SobreSec from './components/SobreSec.vue';
import MyHabilidades from './components/MyHabilidades.vue';


export default {
  name: 'App',
  components: {
    HeaderSec,
    HeroSec,
    SobreSec,
    MyHabilidades,


  }
};
</script>

<style scoped> </style>