<template>
  <div class="max-width-blue-section relative" id="clients">
    <h2 class="mb-20">Témoignages</h2>

    <!-- Slider Container  -->
    <div
      class="slider-testimonials flex gap-10"
      ref="sliderContainer"
      :style="slider"
    >
      <!-- Card Testimonials Client -->
      <div class="card-testimonial" v-for="(item, i) in items" ref="sliderCard">
        <NuxtImg
          loading="lazy"
           
          src="/images/logos/quoteLogo.svg"
          class="quote"
          alt="checkIcon"
        />
        <NuxtImg
          loading="lazy"
           
          :src="item.logo"
          class="logo-client test"
          alt="logo des clients"
        />
        <div class="pl-2 border-l-2 border-blue">
          <p>{{ item.decription }}</p>
        </div>
        <p class="client-sign">
          <span class="text-bolder">{{ item.client }}</span
          ><br />{{ item.cabinet }}
        </p>
      </div>
    </div>

    <div class="flex justify-center gap-20 mt-10">
      <NuxtImg
        @click="slideLeft()"
        class="cursor-pointer"
        src="/images/logos/arrowLeftIcon.svg"
        alt="fleche de direction slider"
      />
      <NuxtImg
        @click="slideRight()"
        class="cursor-pointer"
        src="/images/logos/arrowRightIcon.svg"
        alt="fleche de direction slider"
      />
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      counter: 0,
      cardWidth: 0,

      items: [
        {
          logo: '/images/testimonials/librato.png',
          decription:
            'Un logiciel de gestion est indispensable à tout avocat, autant choisir le meilleur !',
          client: 'Mme Christophe Thevenet, Avocat.',
          cabinet: 'Librato Avocats',
        },
        {
          logo: '/images/testimonials/kiejman.png',
          decription:
            'Après avoir fait une analyse des logiciels disponibles pour les cabinets d’avocats, nous avons choisi zLawyer car c’est celui qui nous a paru le plus complet et le plus intuitif d’utilisation. Après quelques mois d’utilisation, on peut dire que zLawyer à l’épreuve du terrain répond complètement à notre attente.',
          client: 'Me Thierry Marembert, Avocat.',
          cabinet: 'Kiejman & Marembert Avocats',
        },
        {
          logo: '/images/testimonials/richelieu.png',
          decription:
            "Le logiciel zLawyer ? en un mot ? ...la FACILITE ! C'est une solution très agréable et très simple. Il nous est devenu indispensable et il ne tombe jamais en panne.",
          client: 'Me Benoît Gruau, Avocat.',
          cabinet: 'Richelieu Avocats',
        },
        {
          logo: '/images/testimonials/sekriValentinZerrouk.png',
          decription:
            'C’est sans conteste le meilleur logiciel de facturation et de gestion et le plus easy-using avec une équipe hyper professionnelle et hyper réactive. Nous utilisons ZL depuis 7 ans et nous n’avons jamais rencontré aucun problème.',
          client: 'Me Valérie Goffinon, Secrétaire Général.',
          cabinet: 'Sekri Valentin Zerouk Avocats',
        },
        {
          logo: '/images/testimonials/mggVoltaire.png',
          decription:
            'Cela va bientôt faire 10 ans que nous utilisons Z. Un logiciel ergonomique, convivial et d’une simplicité de déploiement et d’utilisation appréciée par l’ensemble de notre équipe. A recommander les yeux fermés.',
          client: 'Me David Guillouet, Avocat.',
          cabinet: 'Voltaire Avocats',
        },
        {
          logo: '/images/testimonials/adHoc.png',
          decription:
            'J’utilise zLawyer depuis des années. Cet outil me permet de facturer en deux clics et d’obtenir une analyse détaillée de la rentabilité de mes dossiers. En plus de cela, l’équipe dédiée au super est vraiment très réactive. Je recommande à 200% !',
          client: 'Me Thomas Cuq, Avocat.',
          cabinet: 'Ad Hoc Avocats',
        },
        {
          logo: '/images/testimonials/advanceAvocats.png',
          decription:
            'J’utilise zLawyer depuis plusieurs années. Il est devenu un outil de facturation incontournable au sein du cabinet. Le vrai plus, une équipe à l’écoute de ses clients et très réactive.',
          client: 'Me Nacime Tobni, Avocat.',
          cabinet: 'Advance Avocats',
        },
      ],
    };
  },
  methods: {
    // Function to slide Right
    slideRight: function () {
      this.counter++;
      if (this.counter >= this.$refs.sliderContainer.children.length) {
        this.counter = 0;
        this.cardWidth = 0;
      } else {
        this.cardWidth = this.$refs.sliderCard[0].offsetWidth;
        this.cardWidth = (this.cardWidth + 40) * this.counter;
      }
    },
    // Function to slide Left
    slideLeft: function () {
      this.counter--;
      if (this.counter <= -1) {
        this.counter = this.$refs.sliderContainer.children.length;
        this.cardWidth = this.$refs.sliderCard[0].offsetWidth;
        this.cardWidth =
          (this.cardWidth + 40) * this.counter - (this.cardWidth + 40);
      } else {
        this.cardWidth = this.$refs.sliderCard[0].offsetWidth;
        this.cardWidth = (this.cardWidth + 40) * this.counter;
      }
    },
  },
  computed: {
    // Style to slide the card
    slider() {
      return {
        transform: `translateX(-${this.cardWidth}px)`,
        transition: 'transform .5s ease-in-out',
      };
    },
  },
};
</script>

<style scoped>
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
  top: -30px;
  right: 10%;
}
</style>
