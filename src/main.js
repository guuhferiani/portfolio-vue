import { createApp } from 'vue';
import App from './App.vue';
import AOS from "aos";
import "aos/dist/aos.css";

// Inicializar o AOS após o DOM estar carregado
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

// Criar e montar a aplicação Vue
createApp(App).mount('#app');