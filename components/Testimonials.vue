<template>
  <div class="testimonials relative" id="clients">
    <h2 class="mb-20">Témoignages</h2>

    <div class="overflow-x-scroll no-scrollbar slider-padding flex gap-10" ref="sliderContainer" :style="slider">
      <div class="card-testimonial" v-for="(item, i) in items" :key="i" ref="sliderCard">
        <img :src="'images/logos/quoteLogo.svg'" class="quote" alt="checkIcon" />
        <img :src="item.logo" class="logo-client test" alt="logo des clients" />
        <div class="pl-2 border-l-2 border-blue">
          <p>{{ item.decription }}</p>
        </div>
        <p class="client-sign">
          <span class="text-bolder">{{ item.client }}</span><br />{{ item.cabinet }}
        </p>
      </div>
    </div>

    <div class="flex justify-center gap-20 mt-10">
      <img :src="'images/logos/arrowLeftIcon.svg'" @click="scrollLeft()" class="cursor-pointer h-6"
        alt="fleche de direction slider" />
      <img :src="'images/logos/arrowRightIcon.svg'" @click="scrollRight()" class="cursor-pointer h-6"
        alt="fleche de direction slider" />
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      counter: 0,
      cardWidth: 0,
      slider: {},

      items: [
        {
          logo: 'images/testimonials/librato.png',
          decription:
            'Un logiciel de gestion est indispensable à tout avocat, autant choisir le meilleur !',
          client: 'Mme Christophe Thevenet, Avocat.',
          cabinet: 'Librato Avocats',
        },
        {
          logo: 'images/testimonials/kiejman.png',
          decription:
            'Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation. Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.',
          client: 'Me Thierry Marembert, Avocat.',
          cabinet: 'Kiejman & Marembert Avocats',
        },
        {
          logo: 'images/testimonials/richelieu.png',
          decription:
            "Le logiciel zLawyer ? en un mot ? ...la FACILITE ! C'est une solution très agréable et très simple. Il nous est devenu indispensable et il ne tombe jamais en panne.",
          client: 'Me Benoît Gruau, Avocat.',
          cabinet: 'Richelieu Avocats',
        },
        {
          logo: 'images/testimonials/sekriValentinZerrouk.png',
          decription:
            'C’est sans conteste le meilleur logiciel de facturation et de gestion et le plus easy-using avec une équipe hyper professionnelle et hyper réactive. Nous utilisons ZL depuis 7 ans et nous n’avons jamais rencontré aucun problème.',
          client: 'Me Valérie Goffinon, Secrétaire Général.',
          cabinet: 'Sekri Valentin Zerouk Avocats',
        },
        {
          logo: 'images/testimonials/mggVoltaire.png',
          decription:
            'Cela va bientôt faire 10 ans que nous utilisons Z. Un logiciel ergonomique, convivial et d’une simplicité de déploiement et d’utilisation appréciée par l’ensemble de notre équipe. A recommander les yeux fermés.',
          client: 'Me David Guillouet, Avocat.',
          cabinet: 'Voltaire Avocats',
        },
        {
          logo: 'images/testimonials/adHoc.png',
          decription:
            'J’utilise zLawyer depuis des années. Cet outil me permet de facturer en deux clics et d’obtenir une analyse détaillée de la rentabilité de mes dossiers. En plus de cela, l’équipe dédiée au super est vraiment très réactive. Je recommande à 200% !',
          client: 'Me Thomas Cuq, Avocat.',
          cabinet: 'Ad Hoc Avocats',
        },
        {
          logo: 'images/testimonials/advanceAvocats.png',
          decription:
            'J’utilise zLawyer depuis plusieurs années. Il est devenu un outil de facturation incontournable au sein du cabinet. Le vrai plus, une équipe à l’écoute de ses clients et très réactive.',
          client: 'Me Nacime Tobni, Avocat.',
          cabinet: 'Advance Avocats',
        },
      ],
    };
  },
  methods: {
    scrollRight() {
      const container = this.$refs.sliderContainer;
      this.paddingProjects = 40;
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
        ? container.scrollTo({
          behavior: "smooth",
          left: 0,
        })
        : container.scrollTo({
          behavior: "smooth",
          left:
            container.scrollLeft +
            (this.$refs.sliderCard[0].clientWidth + this.paddingProjects) * 1,
        });
    },
    scrollLeft() {
      const container = this.$refs.sliderContainer;
      this.paddingProjects = 40;
      container.scrollLeft <= 1
        ? container.scrollTo({
          behavior: "smooth",
          left: container.scrollWidth - container.clientWidth,
        })
        : container.scrollTo({
          behavior: "smooth",
          left:
            container.scrollLeft -
            (this.$refs.sliderCard[0].clientWidth + this.paddingProjects) * 1,
        });
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.testimonials {
  padding: 80px 0;
}

h2 {
  padding: 0 clamp(20px, 5vw, 130px)
}

.slider-padding {
  padding: 20px clamp(20px, 5vw, 130px)
}

.card-testimonial {
  flex-shrink: 0;
  width: 38vw;
  max-width: 700px;
  position: relative;
  padding: 50px;
  border-radius: var(--radius-current);
  background-color: var(--color-white);
  box-shadow: var(--shadow-current);
}

@media screen and (max-width: 1200px) {
  .card-testimonial {
    width: 70%;
    padding: 30px;
  }
}

@media screen and (max-width: 700px) {
  .card-testimonial {
    width: 90%;
    padding: 30px;
  }
}

.card-testimonial .logo-client {
  margin-left: 20px;
  margin-bottom: 40px;
  height: 50px;
  border-radius: var(--radius-current);
}

.card-testimonial .client-sign {
  margin-top: 50px;
  float: right;
}

.card-testimonial .quote {
  position: absolute;
  width: 60px;
  top: -20px;
  right: 10%;
}
</style>
