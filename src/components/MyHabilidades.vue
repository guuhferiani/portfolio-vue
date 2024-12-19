<template>
  <section id="skills" class="skills section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Minhas Habilidades</h2>
        <p>Veja minhas habilidades abaixo e observe o progresso dinâmico!</p>
      </div>

      <div class="row skills-content">
        <div class="col-lg-6" v-for="(skill, index) in skills" :key="index">
          <div class="progress">
            <span class="skill">{{ skill.name }} <i class="val">{{ skill.currentValue }}%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                :style="{ width: skill.currentValue + '%' }"
                role="progressbar"
                :aria-valuenow="skill.currentValue"
                aria-valuemin="0"
                aria-valuemax="100"
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
        { name: 'HTML', maxValue: 100, currentValue: 0 },
        { name: 'CSS', maxValue: 90, currentValue: 0 },
        { name: 'JavaScript', maxValue: 75, currentValue: 0 },
        { name: 'PHP', maxValue: 80, currentValue: 0 },
        { name: 'WordPress', maxValue: 90, currentValue: 0 },
        { name: 'Photoshop', maxValue: 55, currentValue: 0 }
      ]
    };
  },
  mounted() {
    this.animateSkills();
  },
  methods: {
    animateSkills() {
      this.skills.forEach(skill => {
        const interval = setInterval(() => {
          if (skill.currentValue < skill.maxValue) {
            skill.currentValue++;
          } else {
            clearInterval(interval);
          }
        }, 20); // Aumente ou diminua o tempo para ajustar a velocidade
      });
    }
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