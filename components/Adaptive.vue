<template>
  <div class="max-width-white-section">
    <div class="max-width-white-section-content text-center flex flex-col items-center gap-8 container-adaptative">
      <div class="w-full flex flex-col items-center gap-2">
        <h2 class="anim-adaptative text-orange">
          zLawyer s’adapte à votre organisation
        </h2>
        <p class="anim-adaptative w-full md:w-3/4">
          Que votre cabinet soit équipé d’un <span class="text-bolder">Nas</span>,
          d’un serveur ou encore d’un <span class="text-bolder">Cloud</span>,
          zLawyer <span class="text-bolder">s'adapte</span> parfaitement à
          <span class="text-bolder">votre organisation</span>. zLawyer est
          <span class="text-bolder">100% compatible</span> avec les technologies
          actuelles de stockage.
        </p>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-6 justify-items-center gap-2">
        <img :src="'images/adaptative/googleDriveLogo.png'" alt="GoogleDrive Logo" class="anim-adaptative h-20" />
        <img :src="'images/adaptative/OneDriveLogo.png'" alt="oneDrive Logo" class="anim-adaptative h-20" />
        <img :src="'images/adaptative/synologyLogo.svg'" alt="synology Logo" class="anim-adaptative h-20" />
        <img :src="'images/adaptative/dropboxLogo.png'" alt="dropbox Logo" class="anim-adaptative h-20" />
        <img :src="'images/adaptative/tresoritLogo.png'" alt="tresorit Logo" class="anim-adaptative h-20" />
        <img :src="'images/adaptative/pcloudLogo.svg'" alt="pcloud Logo" class="anim-adaptative h-20" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    let animAdaptative = gsap.utils.toArray('.anim-adaptative');
    animAdaptative.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.container-adaptative',
            start: 'top 50%',
            toggleActions: 'restart none none reverse',
            end: 'bottom 50%',
          },
        })
        .to(item, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .delay(index * 0.1);
    });
  },
};
</script>

<style scoped>
.anim-adaptative {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
