<template>
  <div class="max-width-blue-section flex flex-col items-center gap-12" id="fonctionnalites">
    <div class="w-full flex flex-col gap-2 items-start">
      <h2>Fonctionnalités du logiciel de facturation zLawyer</h2>
      <p class="subtitle w-full">
        zLawyer a été conçu en étroite collaboration avec des avocats,
        garantissant des fonctionnalités et une
        ergonomie spécifiquement adaptées aux exigences des cabinets quels que soient
        leur taille.
      </p>
    </div>

    <div v-if="isActive"
      class="fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-gray-400/75 p-5 md:p-0"
      @click="isActive = false">
      <img :src="'images/logos/cross.svg'" alt="close modal"
        class="absolute top-32 lg:top-20 right-5 cursor-pointer text-orange" @click="isActive = false" />
      <img :src="imageModalSrc" alt="image modal" class="w-full md:w-3/4 border-img" @click.stop="" />
    </div>

    <div class="md:px-8 w-full flex flex-col gap-12 md:gap-20 ">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center lg:justify-items-end">
        <div class="flex flex-col gap-2 md:gap-4 row-start-2 lg:row-span-1">
          <h3>
            <span class="text-underline">Gérer la facturation</span>
            de votre cabinet d’avocats en toute simplicité
          </h3>
          <p>
            Facturez vos dossiers en <span class="font-bold">2</span> clics :
          </p>
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">Facturez au temps passé ou au forfait</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">Saisissez et facturez vos frais et débours</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">Personnalisez le tarif horaire comme vous le souhaitez</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">Gérez les majorations ou minorations</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">Accédez facilement à toutes vos données financières</p>
            </div>

            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">Relancez les impayés</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4 w-fit" />
              <p class="w-full text-clip">...</p>
            </div>
          </div>

          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
        <img :src="'images/features/features9.webp'" alt="illustration de la fonctionnalitée facturation"
          @click="imageModal('images/features/features9.webp')"
          class="hover:scale-[1.02] transition-transform w-full border-img" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-start">
        <img :src="'images/features/features1.webp'" alt="illustration de la fonctionnalitée facturation"
          @click="imageModal('images/features/features1.webp')"
          class="hover:scale-[1.02] transition-transform w-full border-img" />
        <div class="flex flex-col gap-2 md:gap-4">
          <h3>
            <span class="text-underline">Suivi des performances</span> <br>
            ZLawyer : Pilotez & maîtrisez vos finances
          </h3>
          <p>
            Assurez la solidité financière de votre cabinet avec des analyses détaillées et une vision complète
            et pérenne de vos performances grâce à zLawyer.
          </p>
          <p>
            zLawyer se positionne comme la solution idéale pour suivre vos performances et obtenir des
            indicateurs clés pour chaque dossier, offrant ainsi une vision complète de votre activité et de votre santé
            financière.
          </p>
          <p>
            Avec zLawyer, accédez facilement à vos données et aux rapports financiers détaillés des
            performances de chaque dossier. Analysez vos chiffres et effectuez des analyses précises sur
            leur rentabilité pour prendre des décisions éclairées.
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center lg:justify-items-end">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
          <h3>
            <span class="text-underline">L’application</span> zLawyer Iphone et
            Android
          </h3>
          <p>
            Visualisez et saisissez vos temps où que vous soyez depuis votre
            mobile. L’application gère automatiquement les modes en ligne et
            hors ligne. Si vous êtes associé, vous aurez également accès aux
            principaux indicateurs financiers de votre cabinet.
          </p>
          <div class="flex flex-wrap">
            <a target="_blank" href="https://apps.apple.com/fr/app/zlawyer/id1174916635?mt=8">
              <img :src="'images/logos/badgeAppStore.svg'"
                class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3"
                alt="logo de téléchargement vers l'apple store" />
            </a>
            <a target="_blank"
              href="https://play.google.com/store/apps/details?id=com.zelesolution.zlawyer&hl=fr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img :src="'images/logos/badgePlayStore.svg'"
                class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3"
                alt="logo de téléchargement vers le play store" />
            </a>
          </div>
        </div>
        <img :src="'images/features/features2.webp'" alt="illustration de l'application mobile"
          @click="imageModal('images/features/features2.webp')"
          class="hover:scale-[1.02] transition-transform md:h-96 w-full lg:w-fit object-contain" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-start">
        <img :src="'images/features/features3.webp'" alt="illustration de la fonctionnalitée gestion"
          @click="imageModal('images/features/features3.webp')"
          class="hover:scale-[1.02] transition-transform w-full border-img" />
        <div class="flex flex-col gap-4">
          <h3>
            <span class="text-underline">Une gestion</span> documentaire sans
            contrainte
          </h3>
          <p>
            Notre solution de gestion de cabinet d’avocat vous aide dans la
            gestion des documents de chaque dossier : modèles, organisation,
            classement, et ce, sans privatisation puisque les documents restent
            évidemment sur votre votre cloud / serveur actuel. En effet, zLawyer sait
            se greffer à votre organisation actuelle sans aucun changement.
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center lg:justify-items-end">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
          <h3>
            <span class="text-underline">Dossiers</span> : l’information à
            portée de main
          </h3>
          <p>
            Avec notre solution de gestion de dossiers d’avocat, pas besoin de menus complexes ou de
            longues manipulations pour tout retrouver. Chaque fenêtre de dossier vous présente les
            informations essentielles : intervenants (clients, confrères, etc.), coordonnées complètes,
            état financier du dossier, factures à relancer, ...
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
        <img :src="'images/features/features4.webp'" class="hover:scale-[1.02] transition-transform w-full border-img"
          alt="illustration de la fonctionnalitée dossiers" @click="imageModal('images/features/features4.webp')" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-start">
        <img :src="'images/features/features5.webp'" alt="illustration de la fonctionnalitée essentiel de l'application"
          @click="imageModal('images/features/features5.webp')"
          class="hover:scale-[1.02] transition-transform w-full border-img" />
        <div class="flex flex-col gap-4">
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
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center lg:justify-items-end">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
          <h3>
            <span class="text-underline">La capture</span> du temps qui passe
          </h3>
          <p>
            Appels téléphoniques, rédaction d’actes, rendez-vous, audiences, réunions internes… Que
            vous facturiez au temps ou au forfait, avec la solution de gestion de temps zLawyer :
            consignez bien, facturez mieux et gérez votre budget en un seul clic.
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
        <img :src="'images/features/features6.webp'" alt="illustration de la fonctionnalitée timer"
          @click="imageModal('images/features/features6.webp')"
          class="hover:scale-[1.02] transition-transform w-full border-img" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-start">
        <img :src="'images/features/features7.webp'" class="hover:scale-[1.02] transition-transform w-full border-img"
          alt="illustration de la fonctionnalitée accès client" @click="imageModal('images/features/features7.webp')" />
        <div class="flex flex-col gap-4">
          <h3>
            <span class="text-underline">Redéfinissez vos pratiques</span> métiers grâce à notre
            <span class="text-ai">IA Zéphyr</span>
          </h3>
          <p>
            Découvrez <span class="font-bold">l’intelligence artificielle</span> générative chez zLawyer avec notre
            chatbot <span class="font-bold">Zéphyr</span>.
          </p>
          <p>
            Cette innovation IA vous accompagne efficacement dans votre quotidien et vous permet de
            gagner en productivité.
            Conçu pour compléter votre expertise, <span class="font-bold">Zéphyr</span> peut par exemple
            effectuer des recherches instantanées de précédents,
            des cas similaires, ou des références légales.
            <br>
            <span class="font-bold">Zéphyr</span> facilite votre analyse et vous
            apporte de l’aide dans de multiples tâches courantes, comme rédiger des emails complexes, rédiger des posts
            LinkedIn, traduire ou synthétiser des documents…
          </p>
          <p>Décuplez les capacités de votre cabinet en tirant
            profit d’une IA intégrée dans zLawyer. </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center lg:justify-items-end">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
          <h3>
            Donnez à vos clients
            <span class="text-underline">un accès à leur dossier</span> sur le
            web
          </h3>
          <p>
            Ce service vous permet de disposer d’un espace à vos couleurs sur le Web afin de permettre aux clients de
            votre choix d’accéder à certaines informations de leurs dossiers.
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">
            Je souhaite une démonstration
          </NuxtLink>
        </div>
        <img :src="'images/features/features8.webp'" class="hover:scale-[1.02] transition-transform w-full border-img"
          alt="illustration de la fonctionnalitée accès client" @click="imageModal('images/features/features8.webp')" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-start">
        <img :src="'images/features/features10.webp'" class="hover:scale-[1.02] transition-transform w-full border-img"
          alt="illustration de la fonctionnalitée accès client"
          @click="imageModal('images/features/features10.webp')" />
        <div class="flex flex-col gap-4">
          <h3 class="text-pretty">
            Assurez votre transition <span class="text-underline">vers la facture électronique</span> en toute sérénité
            grâçe à zLawyer
          </h3>
          <p>En optant pour zLawyer vous garantissez une totale conformité aux obligations découlant de
            la réforme sur la facturation électronique. Notre plateforme répond aux exigences d&#39;une
            <span class="font-bold">PDP</span> (Plateforme de Dématérialisation Partenaire) et de <NuxtLink
              to="/facturation-electronique-et-zlawyer#faq" class="text-orange">l'e-facturation</NuxtLink>
          </p>

          <p>La facturation électronique est entièrement intégrée à notre solution, ce qui vous permet de
            rester dans votre environnement de travail habituel tout en respectant les obligations légales.
            Vous bénéficiez ainsi d’une expérience fluide et continue, via une interface unique pour gérer
            à la fois vos dossiers juridiques et vos processus financiers.</p>
          <div class="flex items-center justify-start gap-4">
            <NuxtLink title="Page Facturation Électronique" class="button-orange w-fit whitespace-nowrap"
              to="/facturation-electronique-et-zlawyer">
            Notre solution à la réforme
            </NuxtLink>
            <NuxtLink title="Page Facturation Électronique" class="button-transparent w-fit whitespace-nowrap"
              to="/facturation-electronique">
              Comprendre la réforme
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      imageModalSrc: '',
      isActive: false,
    };
  },
  methods: {
    imageModal(src) {
      this.imageModalSrc = src;
      this.isActive = true;
    }
  },
  watch: {
    isActive: function (val) {
      if (val) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
};
</script>

<style scoped>
.border-img {
  border-radius: 15px;
}
</style>
