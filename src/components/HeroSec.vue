<template>

    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
            <h1>Gu Feriani</h1>
            <p>Sou <span ref="typed"></span></p>
        </div>
    </section><!-- End Hero -->

</template>

<script>
import Typed from "typed.js"; // Importando a biblioteca Typed.js

export default {
    name: 'HeroSec', // Nome do componente
    mounted() {
        // Configurações para Typed.js
        const options = {
            strings: ["Instrutor", "Developer", "Freelancer"], // Textos que serão digitados
            typeSpeed: 150, // Velocidade da digitação
            backSpeed: 150, // Velocidade ao apagar o texto
            loop: true, // Repetir indefinidamente
        };

        // Inicializando o Typed.js com a referência do elemento no template
        this.typed = new Typed(this.$refs.typed, options);
    },

    beforeUnmount() {
        // Destruir a instância do Typed.js quando o componente for desmontado
        if (this.typed) {
            this.typed.destroy();
        }
    },
};
</script>

<style scoped>
#hero {
    width: 100%;
    height: 100vh;
    background: url("../assets/img/hero-bg.webp") top center;
    background-size: cover;
}

#hero:before {
    content: "";
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

#hero .hero-container {
    position: relative;
    z-index: 2;
    min-width: 300px;
}

#hero h1 {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
}

#hero p {
    color: #fff;
    margin-bottom: 50px;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
}

#hero p span {
    color: #fff;
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 3px solid #149ddd;
}

@media (min-width: 1024px) {
    #hero {
        background-attachment: fixed;
    }
}

@media (max-width: 768px) {
    #hero h1 {
        font-size: 28px;
        line-height: 36px;
    }

    #hero h2 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 30px;
    }
}
</style>