<template>
  <div class="hero max-width-blue-section grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
    <div class="flex flex-col items-center lg:block row-start-2 lg:row-start-1 md:px-8">
      <h1 class="anim-hero text-center lg:text-left mb-14">
        <span class="text-orange">zLawyer</span>, Le logiciel de gestion et facturation pour cabinet d'avocats
        <br /><span class="text-orange">simple,
          <br />ergonomique,
          <br />sans
          engagement !</span>
      </h1>
      <NuxtLink title="Page Contact" to="/contact" class="anim-hero button-orange w-max">Je souhaite une démonstration
      </NuxtLink>
    </div>
    <div class="container-img space-y-4">
      <img src="/images/hero/illustrationHero.webp" alt="illustration du logiciel" width="939" height="648"
        fetchpriority="high" decoding="async" class="w-full img-hero anim-hero" />
      <p class="text-center text-lg hidden lg:block">
        Expérimentez le logiciel de facturation le plus intuitif et performant du marché !
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data: function () {
    return {
      replace: [
        {
          from: 'La solution la mieux notée par vos confrères',
          to: 'Votre solution de gestion de cabinet qui vous fait gagner du temps !',
        },
      ],
    };
  },
  mounted() {
    let animHero = gsap.utils.toArray('.anim-hero');
    let tl = gsap.timeline();
    tl.from(animHero, {
      opacity: 0,
      y: -10,
      duration: 0.8,
      stagger: 0.05,
    });
  },
};
</script>

<style scoped>
.hero {
  perspective: 1500px;
}

.container-img {
  perspective: 1500px;
}

.container-img .img-hero {
  transform: rotateY(-15deg);
}

@media screen and (max-width: 1024px) {
  .container-img .img-hero {
    transform: rotateY(0deg);
  }
}

.text-replace {
  font-family: 'Roboto-Regular', sans-serif;
}
</style>
