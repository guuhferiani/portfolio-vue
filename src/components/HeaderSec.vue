<template>
  <i class="bi mobile-nav-toggle d-xl-none" :class="isMenuActive ? 'bi-x' : 'bi-list'" @click="toggleMenu"></i>
  <header :class="{ 'mobile-nav-active': isMenuActive }" id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img :src="perfilImage" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Gustavo Feriani</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="github"><i class="bx bxl-github"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Sobre</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resumo</span></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i>
              <span>Portfolio</span></a></li>
          <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Serviços</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contato</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>
import perfil from '@/assets/img/perfil.jpeg';

export default {
  name: 'HeaderSec',
  data() {
    return {
      perfilImage: perfil,
      isMenuActive: false, // Estado para controlar o menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive; // Alterna entre aberto/fechado
    },
  },
};
</script>



<style scoped>

@media (max-width: 1199px) {
  #header {
    left: -300px; /* Oculta o menu por padrão */
    transition: all 0.5s ease-in-out;
  }

  #header.mobile-nav-active {
    left: 0; /* Exibe o menu quando ativo */
  }
}

.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 10000; /* Garante que esteja acima de outros elementos */
  font-size: 24px;
  background: #149ddd;
  color: #fff;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease;
}

.mobile-nav-active {
  overflow: hidden; /* Evita scroll ao ativar o menu */
}



/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  transition: all ease-in-out 0.5s;
  z-index: 9997;
  transition: all 0.5s;
  padding: 0 15px;
  background: #040b14;
  overflow-y: auto;
}

#header .profile img {
  margin: 15px auto;
  display: block;
  width: 120px;
  border: 8px solid #2c2f3f;
}

#header .profile h1 {
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  -moz-text-align-last: center;
  text-align-last: center;
  font-family: "Poppins", sans-serif;
}

#header .profile h1 a,
#header .profile h1 a:hover {
  color: #fff;
  text-decoration: none;
}

#header .profile .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#header .profile .social-links a:hover {
  background: #149ddd;
  color: #fff;
  text-decoration: none;
}

#main {
  margin-left: 300px;
}

@media (max-width: 1199px) {
  #header {
    left: -300px;
  }

  #main {
    margin-left: 0;
  }

  .container,
  .container-fluid {
    padding-left: 12px;
    padding-right: 12px;
  }
}

/*--------------------------------------------------------------
  # Navigation Menu
  --------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu {
  padding: 30px 0 0 0;
}

.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.nav-menu>ul>li {
  position: relative;
  white-space: nowrap;
}

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #a8a9b4;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 24px;
  padding-right: 8px;
  color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover>a i {
  color: #149ddd;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  background-color: #149ddd;
  color: #fff;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50px;
  cursor: pointer;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}
</style>
