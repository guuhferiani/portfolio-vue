<template>
  <div id="app">
    <HeaderSec />
    <HeroSec />
    <SobreSec />
    <MyHabilidades />
    <MyResume />

</div>
</template>

<script>
import HeaderSec from './components/HeaderSec.vue';
import HeroSec from './components/HeroSec.vue';
import SobreSec from './components/SobreSec.vue';
import MyHabilidades from './components/MyHabilidades.vue';
import MyResume from './components/MyResume.vue';


export default {
  name: 'App',
  components: {
    HeaderSec,
    HeroSec,
    SobreSec,
    MyHabilidades,
    MyResume,


  }
};
</script>

<style scoped> </style>