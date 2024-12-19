<template>
  <section id="skills" class="skills section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Minhas Habilidades</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row skills-content">

        <!-- Primeira coluna de habilidades -->
        <div class="col-lg-6" data-aos="fade-up">
          <div v-for="(skill, index) in skills.slice(0, 3)" :key="index" class="progress">
            <span class="skill">{{ skill.name }} <i class="val">{{ skill.value }}%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="skill.value"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: skill.value + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Segunda coluna de habilidades -->
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div v-for="(skill, index) in skills.slice(3)" :key="index" class="progress">
            <span class="skill">{{ skill.name }} <i class="val">{{ skill.value }}%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="skill.value"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: skill.value + '%' }"
              ></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'MyHabilidades',
  data() {
    return {
      skills: [
        { name: 'HTML', value: 100 },
        { name: 'VueJs', value: 70 },
        { name: 'CSS', value: 90 },
        { name: 'JavaScript', value: 70 },
        { name: 'Illustrator', value: 90 },
        { name: 'Photoshop', value: 90 }
      ]
    };
  }
};
</script>



<style scoped>
section {
    padding: 60px 0;
    overflow: hidden;
}

.section-bg {
    background: #f5f8fd;
}

.skills .progress {
    height: 60px;
    display: block;
    background: none;
    border-radius: 0;
    margin-bottom: 20px;
}

.skills .progress .skill {
    padding: 0;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #050d18;
}

.skills .progress .skill .val {
    float: right;
    font-style: normal;
    font-size: 16px;
    color: #000;
    font-weight: bold;
}

.skills .progress-bar-wrap {
    background: #dce8f8;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.skills .progress-bar {
    width: 0%; /* Inicia com 0% de largura */
    height: 10px;
    transition: width 1s ease;
    background-color: #149ddd;
    border-radius: 5px;
}

/* Estilos para responsividade e alinhamento */
@media (max-width: 768px) {
    .skills .progress .skill {
        font-size: 14px;
    }

    .skills .progress .skill .val {
        font-size: 14px;
    }

    .skills .progress-bar-wrap {
        height: 8px;
    }

    .skills .progress-bar {
        height: 8px;
    }
}

</style>