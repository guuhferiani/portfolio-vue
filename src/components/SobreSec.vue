<template>

    <main id="main">

        <!-- ======= About Section ======= -->
        <section id="about" class="about">
            <div class="container">

                <div class="section-title">
                    <h2>Sobre</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                        <img :src="perfilImage" class="img-fluid" alt="" width="600px" height="600px">
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Data de Nascimento:</strong> <span>1 May
                                            1995</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>GitHub:</strong>
                                        <span>www.example.com</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Telefone/Whastapp:</strong> <span>+123 456
                                            7890</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Cidade:</strong> <span>New York,
                                            USA</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Idade:</strong> <span>30</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Formação:</strong> <span>Master</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                                        <span>email@example.com</span>
                                    </li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                                        <span>Disponível</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Sou um entusiasta das novas tecnologias e redes sociais, com foco em desenvolver projetos que gerem impacto, como sites interativos e aplicativos. Sempre busco aprender mais sobre desenvolvimento, e estou em constante evolução para ser referência no design e no desenvolvimento digital.
                        </p>
                    </div>
                </div>

            </div>
        </section><!-- End About Section -->



    </main>

</template>

<script>

import perfil from '@/assets/img/perfil.jpeg'

export default {
    name: 'SobreSec',

    data() {
        return {
            perfilImage: perfil
        };
    }

};
</script>


<style scoped>
/*--------------------------------------------------------------
  # About
  --------------------------------------------------------------*/

.about {
    margin-top: 30px;
    margin-bottom: 60px;
}

.about .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #173b6c;
}

.about .content ul {
    list-style: none;
    padding: 0;
}

.about .content ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.about .content ul strong {
    margin-right: 10px;
}

.about .content ul i {
    font-size: 16px;
    margin-right: 5px;
    color: #149ddd;
    line-height: 0;
}

.about .content p:last-child {
    margin-bottom: 0;
}
</style>