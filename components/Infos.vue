<template>
  <div class="max-width-white-section">
    <div class="max-width-white-section-content flex flex-col items-center gap-8 container-infos">
      <h2 class="anim-infos text-orange text-center">
        Une réponse simple à vos questions
      </h2>

      <div class="md:px-8 grid grid-rows-2 md:grid-cols-2 gap-8 items-center">
        <div class="anim-infos h-full flex flex-col gap-4">
          <div class="flex items-center gap-4 justify-start max-h-14">
            <img :src="'images/logos/infoIcon.svg'" class="h-6 w-fit" loading="lazy" alt="iconInfo" />
            <h3>Y a t-il un engagement ?</h3>
          </div>

          <p>
            L’offre zLawyer est
            <span class="text-bolder">sans engagement</span>. Vous pouvez
            stopper votre abonnement à tout moment mais nous serions attristés
            de vous voir partir.
          </p>
        </div>

        <div class="anim-infos h-full flex flex-col gap-4">
          <div class="flex items-center gap-4 justify-start max-h-14">
            <img :src="'images/logos/infoIcon.svg'" class="h-6 w-fit" loading="lazy" alt="iconInfo" />
            <h3>Y a t-il des frais cachés ?</h3>
          </div>

          <p>
            Une fois abonné, vous bénéficiez d’un accès au support utilisateur
            et aux mises à jour
            <span class="text-bolder">sans frais complémentaires</span>.
          </p>
        </div>

        <div class="anim-infos h-full flex flex-col gap-4">
          <div class="flex items-center gap-4 justify-start max-h-14">
            <img :src="'images/logos/infoIcon.svg'" class="h-6 w-fit" loading="lazy" alt="iconInfo" />
            <h3>Comment j’importe mes données ?</h3>
          </div>

          <p>
            Que vos données proviennent d’un autre éditeur ou directement depuis
            Excel,
            <span class="text-bolder">nous vous offrons l’import de vos données</span>. C’est quand même plus facile quand
            on ne recommence pas à zéro.
          </p>
        </div>

        <div class="anim-infos h-full flex flex-col gap-4">
          <div class="flex items-center gap-4 justify-start max-h-14">
            <img :src="'images/logos/infoIcon.svg'" class="h-6 w-fit" loading="lazy" alt="iconInfo" />
            <h3>Puis-je adapter mon abonnement ?</h3>
          </div>

          <p>
            Oui sans problème. Si un collaborateur quitte le cabinet et qu’il
            n’est pas remplacé, vous pourrez
            <span class="text-bolder">adapter votre abonnement</span> en
            conséquence.
          </p>
        </div>
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
    let animInfos = gsap.utils.toArray('.anim-infos');
    animInfos.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.container-infos',
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
.anim-infos {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
