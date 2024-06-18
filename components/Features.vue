<template>
  <div class="max-width-blue-section flex flex-col items-center gap-12" id="fonctionnalites">
    <div class="w-full flex flex-col gap-2 items-start">
      <h2>Fonctionnalités du logiciel de facturation zLawyer</h2>
      <p class="subtitle w-full">
        zLawyer a été conçu en étroite
        <span class="text-bolder">collaboration avec des avocats</span>,
        garantissant des <span class="text-bolder">fonctionnalités</span> et une
        <span class="text-bolder">ergonomie</span> qui répondent précisément aux
        exigences des cabinets de petites et grandes tailles.
      </p>
    </div>

    <div v-if="isActive"
      class="fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-gray-400/75 p-5 md:p-0"
      @click="isActive = false">
      <img :src="'images/logos/cross.svg'" alt="close modal"
        class="absolute top-32 lg:top-20 right-5 cursor-pointer text-orange" @click="isActive = false" />
      <img :src="imageModalSrc" alt="image modal" class="w-full md:w-3/4" @click.stop="" />
    </div>

    <div class="md:px-8 w-full flex flex-col gap-12 lg:gap-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <div class="flex flex-col gap-2 md:gap-4 row-start-2 lg:row-span-1">
          <h3>
            <span class="text-underline">Gérer la facturation</span>
            de votre cabinet d’avocat en toute simplicité.
          </h3>
          <p>
            Emettez vos factures en 2 clics par le suivi du temps ou manuellement. zLawyer vous permet de
            personnaliser le tarif honoraire par avocat, par dossier, par client et par prestation proposée. Cette
            fonctionnalité vous garantit une vue globale sur la trésorerie de votre cabinet d&#39;avocats et facilite la
            relance de vos clients pour éviter les impayés.
            Un logiciel efficace pour suivre l&#39;état de vos factures et leurs règlements.
          </p>
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">Facturez au temps passé, au forfait ou par abonnement</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">Facturez vos frais et débours</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">Personnalisez le tarif horaire comme vous le souhaitez</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">Gérez les majorations ou minorations</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">Envoi direct au client</p>
            </div>

            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">Gestion des relances</p>
            </div>
            <div class="flex items-center gap-2 w-full">
              <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
              <p class="w-full text-clip">...</p>
            </div>
          </div>

          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
        <img :src="'images/features/features9.webp'" alt="illustration de la fonctionnalitée facturation"
          @click="imageModal('images/features/features9.webp')" class="hover:scale-[1.02] transition-transform" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <img :src="'images/features/features1.webp'" alt="illustration de la fonctionnalitée facturation"
          @click="imageModal('images/features/features1.webp')" class="hover:scale-[1.02] transition-transform" />
        <div class="flex flex-col gap-2 md:gap-4">
          <h3>
            <span class="text-underline">Suivi des performances</span> <br>
            ZLawyer : Pilotez & maîtrisez vos finances
          </h3>
          <p>
            Assurez la solidité financière de votre cabinet avec des analyses détaillées et une vision complète
            et pérenne de vos performances grâce à zLawyer.
            zLawyer, se positionne comme l&#39;une des meilleures solutions pour suivre vos performances.et obtenir des
            indicateurs clés pour chaque dossier, offrant ainsi une vision complète de votre activité et de votre santé
            financière. Avec zLawyer, accédez facilement à vos données, aux rapports financiers détaillés des
            performances de chaque dossier analysez vos chiffres, vous permettant des analyses précises sur
            leur rentabilité pour des décisions éclairée.
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
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
          @click="imageModal('images/features/features2.webp')" class="hover:scale-[1.02] transition-transform" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <img :src="'images/features/features3.webp'" alt="illustration de la fonctionnalitée gestion"
          @click="imageModal('images/features/features3.webp')" class="hover:scale-[1.02] transition-transform" />
        <div class="flex flex-col gap-4">
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
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
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
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
        <img :src="'images/features/features4.webp'" class="hover:scale-[1.02] transition-transform"
          alt="illustration de la fonctionnalitée dossiers" @click="imageModal('images/features/features4.webp')" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <img :src="'images/features/features5.webp'" alt="illustration de la fonctionnalitée essentiel de l'application"
          @click="imageModal('images/features/features5.webp')" class="hover:scale-[1.02] transition-transform" />
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
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
          <h3>
            <span class="text-underline">La capture</span> du temps qui passe
          </h3>
          <p>
            Appels téléphoniques, rédaction d’actes, rendez-vous, audiences,
            réunions internes… Que vous facturiez aux temps ou au forfait, avec
            la solution de gestion de temps zLawyer : consignez bien, facturer
            mieux et gérer votre budget en un seul clic.
          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
        <img :src="'images/features/features6.webp'" alt="illustration de la fonctionnalitée timer"
          @click="imageModal('images/features/features6.webp')" class="hover:scale-[1.02] transition-transform" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <img :src="'images/features/features7.webp'" class="hover:scale-[1.02] transition-transform"
          alt="illustration de la fonctionnalitée accès client" @click="imageModal('images/features/features7.webp')" />
        <div class="flex flex-col gap-4">
          <h3>
            <span class="text-underline">Redéfinissez vos pratiques</span> métiers grâce à notre 
            <span class="text-ai">IA Zephir</span>
          </h3>
          <p>
            Découvrez l’IA générative chez zLawyer avec notre chatbot Zéphyr, l'IA au service de votre cabinet juridique
            : Décuplez les capacités de votre cabinet en tirant
            profit d’une IA intégré dans zLawyer. Zéphyr, notre IA, vous accompagne efficacement dans votre quotidien et
            gagner en productivité.
            Conçu pour compléter votre expertise, en faisant par exemple des recherches instantanément des précédents,
            des cas similaires, ou des références légales. Notre IA Zéphyr facilite votre analyse. Il peut aussi vous
            apporter de l’aide dans de multiples tâches courantes comme rédiger des emails complexes, rédiger des posts
            Linkedin, traduire ou synthétiser des documents…

          </p>
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-items-center">
        <div class="flex flex-col gap-4 row-start-2 lg:row-span-1">
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
          <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">Je souhaite une démonstration</NuxtLink>
        </div>
        <img :src="'images/features/features8.webp'" class="hover:scale-[1.02] transition-transform"
          alt="illustration de la fonctionnalitée accès client" @click="imageModal('images/features/features8.webp')" />
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
