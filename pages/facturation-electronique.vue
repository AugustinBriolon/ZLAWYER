<template>
  <div class="hero max-width-blue-section relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
      <div class="flex flex-col gap-4">
        <h1 class="anim-hero text-left">
          La Facture Électronique Obligatoire: Ce qu'il faut savoir
        </h1>
        <p>
          Assurez votre conformité à la réforme fiscale sur la facturation électronique en optant pour la solution de
          zLawyer.
        </p>
        <p>
          En optant pour zLawyer vous garantissez une totale conformité aux obligations découlant de la réforme sur la
          facturation électronique. Notre plateforme répond aux exigences d'une PDP et de l'e-facturation.
        </p>
        <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/facturation-electronique-et-zlawyer">
          En savoir plus
        </NuxtLink>
      </div>
      <img :src="'images/features/features10.webp'" alt="illustration du logiciel"
        class="w-full rounded-radius-current" />
    </div>

    <div class="mt-32 flex gap-8 w-full">
      <aside class="hidden lg:block">
        <div class="w-64 sticky top-32 left-0 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-4 text-orange">Sommaire</h3>
          <ul class="space-y-3">
            <li>
              <a href="#contexte"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Contexte
              </a>
            </li>
            <li>
              <a href="#definition"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                La facture électronique c'est quoi ?
              </a>
            </li>
            <li>
              <a href="#concernes"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Qui est concerné ?
              </a>
            </li>
            <li>
              <a href="#reforme"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Que prévoit la réforme ?
              </a>
            </li>
            <li>
              <a href="#e-invoicing"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                E-invoicing
              </a>
            </li>
            <li>
              <a href="#e-reporting"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                E-reporting
              </a>
            </li>
            <li>
              <a href="#calendrier"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Calendrier
              </a>
            </li>
            <li>
              <a href="#obligations"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Obligations
              </a>
            </li>
            <li>
              <a href="#avantages"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Avantages
              </a>
            </li>
            <li>
              <a href="#statuts"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Cycle de vie et statuts
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="w-full">
        <section id="contexte" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Contexte</span></h2>
          <p class="text-lg leading-relaxed text-gray-700">
            Dès 2026, la réforme sur la facturation électronique entre en vigueur pour toutes les entreprises
            françaises. Objectif : moderniser, sécuriser et automatiser les échanges de factures dans un cadre
            réglementaire strict.
          </p>
        </section>

        <section id="definition" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">La facture électronique</span> c'est quoi ?
          </h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Une facture électronique est une facture créée, transmise, reçue et archivée de manière entièrement
            numérique, sans intervention papier, dont les données respectent une structure particulière et un mode de
            transmission normé par l'administration fiscale, permettant un traitement automatisé et électronique.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Il existe deux formats officiels autorisés :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Factur-X : format hybride contenant à la fois un PDF lisible et des données XML lisibles par les systèmes.
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              UBL ou CII : formats XML uniquement, lisibles automatiquement par les logiciels comptables mais non
              lisibles par l'humain.
            </li>
          </ul>
        </section>

        <section id="concernes" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Qui est concerné</span> ?</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            La réforme s'applique à toutes les entreprises assujetties à la TVA, sans distinction de taille ou de
            secteur, y compris les cabinets d'avocats. Elle concerne aussi bien les émetteurs que les destinataires de
            factures.
          </p>
        </section>

        <div class="my-12">
          <section class="mb-16">
            <div class="p-8 text-center">
              <h2 class="text-2xl font-bold mb-4"><span class="text-underline">Besoin</span> d'en savoir plus ?</h2>
              <p class="text-lg text-gray-700 mb-6">
                Contactez-nous pour une démo ou un audit gratuit de votre solution actuelle.
              </p>
              <NuxtLink title="Page Contact" class="button-transparent" to="/contact">
                Demander une démonstration
              </NuxtLink>
            </div>
          </section>
        </div>

        <section id="reforme" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Que prévoit la réforme</span> de la facture
            électronique ?</h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Elle vise à généraliser les échanges de factures électroniques entre entreprises assujetties à la TVA. Elle
            repose sur deux volets principaux à prendre en compte :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              E-invoicing pour les échanges B2B
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              E-reporting pour les opérations B2C ou internationales
            </li>
          </ul>
        </section>

        <section id="e-invoicing" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Qu'est-ce que le</span> E-invoicing ?</h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Le e-invoicing s'applique aux transactions B2B domestiques (entre entreprises françaises soumises à la TVA).
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Les factures doivent être émises et reçues via une plateforme agréée (PDP), dans un format électronique
            structuré ou hybride.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Les formats autorisés sont :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              UBL et CII (formats structurés lisibles par les logiciels)
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Factur-X (format hybride avec un PDF lisible + données XML intégrées)
            </li>
          </ul>
          <div class="bg-orange-50 border-l-4 border-orange p-4 rounded mt-6">
            <p class="text-orange-800 font-medium">
              Important : l'envoi de factures en simple PDF ne sera plus conforme à partir de 2026.
            </p>
          </div>
        </section>

        <section id="e-reporting" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Qu'est-ce que le</span> E-reporting ?</h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Le e-reporting concerne toutes les opérations non couvertes par le e-invoicing, notamment :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Transactions B2C (avec des particuliers)
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Transactions B2B internationales
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Acquisitions intracommunautaires
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Services rendus hors UE
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Et les encaissements soumis à TVA
            </li>
          </ul>
        </section>

        <section id="calendrier" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Calendrier</span> de mise en œuvre</h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">
            Découvrez les échéances importantes de la réforme :
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-white border-2 border-orange-200 rounded-lg p-4 shadow-sm min-w-48">
                <div class="text-center">
                  <div class="text-orange-600 font-bold text-2xl">1er</div>
                  <div class="text-orange-600 font-semibold text-lg">Septembre</div>
                  <div class="text-gray-600 font-bold text-xl">2026</div>
                </div>
              </div>
              <div class="ml-6 flex-1">
                <h4 class="font-semibold text-gray-800 mb-2">Phase 1 : Grandes entreprises et ETI</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-orange mr-2 mt-1">•</span>
                    Obligation de recevoir des factures électroniques pour TOUTES les entreprises
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange mr-2 mt-1">•</span>
                    Obligation d'émettre des factures électroniques pour les grandes entreprises et les ETI
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <div class="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                  </path>
                </svg>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-white border-2 border-orange-200 rounded-lg p-4 shadow-sm min-w-48">
                <div class="text-center">
                  <div class="text-orange-600 font-bold text-2xl">1er</div>
                  <div class="text-orange-600 font-semibold text-lg">Septembre</div>
                  <div class="text-gray-600 font-bold text-xl">2027</div>
                </div>
              </div>
              <div class="ml-6 flex-1">
                <h4 class="font-semibold text-gray-800 mb-2">Phase 2 : PME, TPE et microentreprises</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-orange mr-2 mt-1">•</span>
                    Obligation d'émettre des factures électroniques pour les PME, TPE et microentreprises
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange mr-2 mt-1">•</span>
                    Généralisation complète de la facturation électronique
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mt-8">
            <p class="text-orange-800 font-medium">
              ⏰ Préparez-vous dès maintenant pour être conforme à l'échéance qui vous concerne.
            </p>
          </div>
        </section>

        <section id="obligations" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Obligations</span> des entreprises</h2>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Utiliser une plateforme agréée (PDP) pour l'émission et la réception des factures
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Respecter les formats imposés (UBL, CII ou Factur-X)
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Assurer la traçabilité, le cycle de vie et le reporting des factures
            </li>
          </ul>
        </section>

        <section id="avantages" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Avantages</span> de la réforme</h2>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Réduction des délais de paiement
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Automatisation et fiabilisation des processus comptables
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Lutte contre la fraude à la TVA
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Meilleure visibilité sur la trésorerie
            </li>
          </ul>
        </section>

        <section id="statuts" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Cycle de vie</span> et statuts</h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">
            Chaque facture passe par des statuts normalisés :
          </p>

          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="bg-white border-2 border-orange-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                <span class="text-orange-600 font-bold text-sm">1</span>
              </div>
              <div class="ml-4 flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 class="font-semibold text-gray-800 mb-1">Émise</h4>
                <p class="text-sm text-gray-600">La facture est générée et transmise à une plateforme agréée.</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-4 h-4 bg-orange-400 rounded-full mx-auto"></div>
              <div class="flex-1 h-0.5 bg-orange-200"></div>
            </div>

            <div class="flex items-center">
              <div
                class="bg-white border-2 border-orange-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                <span class="text-orange-600 font-bold text-sm">2</span>
              </div>
              <div class="ml-4 flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 class="font-semibold text-gray-800 mb-1">Transmise</h4>
                <p class="text-sm text-gray-600">La facture est envoyée au destinataire final.</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-4 h-4 bg-orange-400 rounded-full mx-auto"></div>
              <div class="flex-1 h-0.5 bg-orange-200"></div>
            </div>

            <div class="flex items-center">
              <div
                class="bg-white border-2 border-orange-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                <span class="text-orange-600 font-bold text-sm">3</span>
              </div>
              <div class="ml-4 flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 class="font-semibold text-gray-800 mb-1">Reçue</h4>
                <p class="text-sm text-gray-600">La facture est réceptionnée par le client.</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-4 h-4 bg-orange-400 rounded-full mx-auto"></div>
              <div class="flex-1 h-0.5 bg-orange-200"></div>
            </div>

            <div class="flex items-center">
              <div
                class="bg-white border-2 border-orange-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                <span class="text-orange-600 font-bold text-sm">4</span>
              </div>
              <div class="ml-4 flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 class="font-semibold text-gray-800 mb-1">Traitée</h4>
                <p class="text-sm text-gray-600">La facture est validée et traitée comptablement.</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-4 h-4 bg-orange-400 rounded-full mx-auto"></div>
              <div class="flex-1 h-0.5 bg-orange-200"></div>
            </div>

            <div class="flex items-center">
              <div
                class="bg-white border-2 border-orange-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                <span class="text-orange-600 font-bold text-sm">5</span>
              </div>
              <div class="ml-4 flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 class="font-semibold text-gray-800 mb-1">Archivée</h4>
                <p class="text-sm text-gray-600">La facture est conservée dans un format légalement opposable.</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-8">
            <p class="text-blue-800 font-medium">
              📊 Gestion centralisée de ces étapes = gain de temps et conformité garantie.
            </p>
          </div>
        </section>

        <div class="my-12">
          <section class="mb-16">
            <div class="p-8 text-center">
              <h2 class="text-2xl font-bold mb-4"><span class="text-underline">Besoin</span> d'en savoir plus ?</h2>
              <p class="text-lg text-gray-700 mb-6">
                Contactez-nous pour une démo ou un audit gratuit de votre solution actuelle.
              </p>
              <NuxtLink title="Page Contact" class="button-transparent" to="/contact">
                Demander une démonstration
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    const links = Array.from(document.querySelectorAll('.scroll-link'));
    const sections = Array.from(document.querySelectorAll('section[id]'));

    if (!sections.length || !links.length) return;

    function setActive(id) {
      links.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('font-bold', isActive);
        link.classList.toggle('text-orange', isActive);
        link.classList.toggle('text-gray-700', !isActive);
      });
    }

    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 130px',
        end: 'bottom center',
        onEnter: () => setActive(section.id),
        onEnterBack: () => setActive(section.id),
      });
    });

    ScrollTrigger.refresh();
  }
};
</script>

<style scoped>
section {
  scroll-margin-top: 3rem;
}

.scroll-mt-32 {
  scroll-margin-top: 8rem;
}

section {
  min-height: 100px;
}
</style>