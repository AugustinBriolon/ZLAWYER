<template>
  <div class="max-width-blue-section" id="fonctionnalites">
    <h2>Fonctionnalités</h2>
    <p class="subtitle md:w-2/3 xl:w-1/2">
      zLawyer a été conçu en étroite
      <span class="text-bolder">collaboration avec des avocats</span>,
      garantissant des <span class="text-bolder">fonctionnalités</span> et une
      <span class="text-bolder">ergonomie</span> qui répondent précisément aux
      exigences des cabinets de petites et grandes tailles.
    </p>

    <div class="md:px-8">
      <div class="card-features">
        <div ref="popIn1" class="container-image-features" @click="openPopIn('popIn1')">
          <NuxtImg loading="lazy" src="/images/logos/cross.png" class="close-pop-in" />
          <NuxtImg loading="lazy" src="/images/features/features1.png" class="image-features"
            alt="illustration de la fonctionnalitée facturation" />
        </div>
        <div class="card-features-description">
          <h3>
            <span class="text-underline">Facturation</span> <br />
            Arbitrer & gérer la rentabilité
          </h3>
          <p>
            Que vous souhaitiez mesurer les temps réels passés, valoriser le
            coût global réel du dossier, faire vos arbitrages de facturation
            sans effacer les durées réelles et donc vos coûts réels, notre
            solution de facturation pour avocat vous offre la possibilité de
            mesurer efficacement la rentabilité de vos dossiers ou de vos
            forfaits …
          </p>
          <NuxtLink class="button-transparent" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>
    </div>

    <div class="md:px-8">
      <div class="card-features card-features-invert">
        <div class="card-features-description">
          <h3>
            <span class="text-underline">L’application</span> zLawyer Iphone et
            Android
          </h3>
          <p>
            Visualisez et saisissez vos temps où que vous soyez depuis votre
            mobile. L’application gère automatiquement les modes en-ligne et
            hors-ligne. Si vous êtes un associé, vous aurez aussi accès aux
            principaux indicateurs financiers de votre cabinet.
          </p>
          <div class="flex flex-wrap">
            <a target="_blank" href="https://apps.apple.com/fr/app/zlawyer/id1174916635?mt=8">
              <NuxtImg loading="lazy" class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3"
                src="/images/logos/badgeAppStore.svg" alt="logo de téléchargement vers l'apple store" />
            </a>
            <a target="_blank"
              href="https://play.google.com/store/apps/details?id=com.zelesolution.zlawyer&hl=fr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <NuxtImg loading="lazy" class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3"
                src="/images/logos/badgePlayStore.svg" alt="logo de téléchargement vers le play store" />
            </a>
          </div>
        </div>
        <NuxtImg loading="lazy" src="/images/features/features2.png" class="image-mobile"
          alt="illustration de l'application mobile" />
      </div>
    </div>

    <div class="md:px-8">
      <div class="card-features">
        <div ref="popIn3" class="container-image-features" @click="openPopIn('popIn3')">
          <NuxtImg loading="lazy" src="/images/logos/cross.png" class="close-pop-in" />
          <NuxtImg loading="lazy" src="/images/features/features3.png" class="image-features"
            alt="illustration de la fonctionnalitée gestion" />
        </div>
        <div class="card-features-description">
          <h3>
            <span class="text-underline">Une gestion</span> documentaire sans
            contrainte
          </h3>
          <p>
            Notre solution de gestion de cabinet d’avocat vous aide dans la
            gestion des documents de chaque dossier : modèles, organisation,
            classement, et ce, sans privatisation puisque les documents restent
            évidemment sur votre serveur / disque actuel. En effet, zLawyer sait
            se greffer à votre organisation actuelle sans aucun changement.
            (Disponible seulement sous Windows)
          </p>
          <NuxtLink class="button-transparent" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>
    </div>

    <div class="md:px-8">
      <div class="card-features card-features-invert">
        <div class="card-features-description">
          <h3>
            <span class="text-underline">Dossiers</span> : l’information à
            portée de main
          </h3>
          <p>
            Avec notre solution de gestion de dossiers d’avocat, pas besoin de
            menus complexes ou de longues manipulations pour tout retrouver.
            Chaque fenêtre de dossiers vous présente les informations
            essentielles le concernant : intervenants (clients, confrères,
            etc…), les coordonnées complètes, l’état financier du dossier, les
            factures à relancer.
          </p>
          <NuxtLink class="button-transparent" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
        <div ref="popIn4" class="container-image-features" @click="openPopIn('popIn4')">
          <NuxtImg loading="lazy" src="/images/logos/cross.png" class="close-pop-in" />
          <NuxtImg loading="lazy" src="/images/features/features4.png" class="image-features"
            alt="illustration de la fonctionnalitée dossiers" />
        </div>
      </div>
    </div>

    <div class="md:px-8">
      <div class="card-features">
        <div ref="popIn5" class="container-image-features" @click="openPopIn('popIn5')">
          <NuxtImg loading="lazy" src="/images/logos/cross.png" class="close-pop-in" />
          <NuxtImg loading="lazy" src="/images/features/features5.png" class="image-features"
            alt="illustration de la fonctionnalitée essentiel de l'application" />
        </div>
        <div class="card-features-description">
          <h3>
            <span class="text-underline">L’essentiel</span> en un coup d’oeil
          </h3>
          <p>
            La fenêtre principale de la solution de cabinet d’avocat zLawyer
            affiche votre tableau de bord personnel. Cette fenêtre vous permet
            d’accéder à l’ensemble des informations prioritaires de votre
            activité en un seul coup d’œil : vos échéances, vos dossiers à
            facturer, vos factures à relancer, et la synthèse de vos saisies des
            temps .
          </p>
          <NuxtLink class="button-transparent" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>
    </div>

    <div class="md:px-8">
      <div class="card-features card-features-invert">
        <div class="card-features-description">
          <h3>
            <span class="text-underline">La capture</span> du temps qui passe
          </h3>
          <p>
            Appels téléphoniques, rédaction d’actes, rendez-vous, audiences,
            réunions internes… Que vous facturiez aux temps ou au forfait, avec
            la solution de gestion de temps zLawyer : consignez bien, facturer
            mieux et gérer votre budget en un seul clic.
          </p>
          <NuxtLink class="button-transparent" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
        <div ref="popIn6" class="container-image-features" @click="openPopIn('popIn6')">
          <NuxtImg loading="lazy" src="/images/logos/cross.png" class="close-pop-in" />
          <NuxtImg loading="lazy" src="/images/features/features6.png" class="image-features"
            alt="illustration de la fonctionnalitée timer" />
        </div>
      </div>
    </div>

    <div class="md:px-8">
      <div class="card-features">
        <div ref="popIn7" class="container-image-features" @click="openPopIn('popIn7')">
          <NuxtImg loading="lazy" src="/images/logos/cross.png" class="close-pop-in" />
          <NuxtImg loading="lazy" src="/images/features/features7.png" class="image-features"
            alt="illustration de la fonctionnalitée accès client" />
        </div>
        <div class="card-features-description">
          <h3>
            Donnez à vos clients
            <span class="text-underline">un accès à leur dossier</span> sur le
            web.
          </h3>
          <p>
            La fenêtre principale de la solution de cabinet d’avocat zLawyer
            affiche votre tableau de bord personnel. Cette fenêtre vous permet
            d’accéder à l’ensemble des informations prioritaires de votre
            activité en un seul coup d’œil : vos échéances, vos dossiers à
            facturer, vos factures à relancer, et la synthèse de vos saisies des
            temps .
          </p>
          <NuxtLink class="button-transparent" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>
    </div>

    <div class="background-features"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false,
    };
  },
  methods: {
    openPopIn(popIn) {
      let popInToOpen = this.$refs[popIn];
      popInToOpen.classList.toggle('active');
    },
  },
};
</script>

<style scoped>
.background-features .active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.359);
  z-index: 99;
}

.card-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  align-items: center;
  margin-bottom: 50px;
}

@media screen and (max-width: 1200px) {
  .card-features {
    grid-template-columns: 1fr;
  }

  .card-features.card-features-invert .container-image-features,
  .image-mobile {
    grid-row-start: 1;
  }
}

.image-features {
  border-radius: var(--radius-current);
  box-shadow: var(--shadow-current);
}

.card-features .container-image-features {
  z-index: 99;
  cursor: pointer;
}

.image-mobile {
  z-index: 99;
  /* cursor: pointer; */
}

.image-mobile:hover,
.container-image-features:hover {
  transition: 0.3s;
  transform: scale(1.02);
}

.container-image-features.active {
  transform: scale(1);
  transition: 0s;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.289);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.container-image-features.active .image-features {
  box-shadow: none;
  height: 70vh;
}

@media screen and (max-width: 1200px) {
  .container-image-features.active .image-features {
    height: auto;
    width: 90%;
  }
}

.close-pop-in {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 120px;
  right: 40px;
  z-index: 9999;
  display: none;
}

.container-image-features.active .close-pop-in {
  display: block;
}

.card-features .card-features-description {
  padding: 24px;
}

.card-features .card-features-description p {
  margin: 40px 0;
}
</style>
