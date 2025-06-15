<template>
  <div class="hero max-width-blue-section relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
      <div class="flex flex-col gap-4">
        <h1 class="anim-hero text-left">
          La Facture Électronique Obligatoire : Ce qu'il faut savoir
        </h1>
        <p>
          Assurez votre conformité à la réforme fiscale sur la facturation électronique en optant pour la solution de
          zLawyer.
        </p>
        <p>
          En optant pour zLawyer vous garantissez une totale conformité aux obligations découlant de la réforme sur la
          facturation électronique. Notre plateforme répond aux exigences d'une PDP et de l'e-facturation.
        </p>
        <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">
          En savoir plus
        </NuxtLink>
      </div>
      <img :src="'images/features/features10.webp'" alt="illustration du logiciel"
        class="w-full rounded-radius-current" />
    </div>

    <div class="mt-32 flex gap-8 w-full">
      <aside class="hidden lg:block">
        <div class="min-w-64 sticky top-32 left-0 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-4 text-orange">Sommaire</h3>
          <ul class="space-y-3">
            <li>
              <a href="#contexte"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Contexte
              </a>
            </li>
            <li>
              <a href="#definition"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                La facture électronique c'est quoi ?
              </a>
            </li>
            <li>
              <a href="#concernes"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Qui est concerné ?
              </a>
            </li>
            <li>
              <a href="#reforme"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Que prévoit la réforme ?
              </a>
            </li>
            <li>
              <a href="#e-invoicing"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                E-invoicing
              </a>
            </li>
            <li>
              <a href="#e-reporting"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                E-reporting
              </a>
            </li>
            <li>
              <a href="#calendrier"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Calendrier
              </a>
            </li>
            <li>
              <a href="#obligations"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Obligations
              </a>
            </li>
            <li>
              <a href="#avantages"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Avantages
              </a>
            </li>
            <li>
              <a href="#statuts"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Cycle de vie et statuts
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="w-full">
        <section id="contexte" class="mb-16 !scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6">Contexte</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            Dès 2026, la réforme sur la facturation électronique entre en vigueur pour toutes les entreprises
            françaises. Objectif : moderniser, sécuriser et automatiser les échanges de factures dans un cadre
            réglementaire strict.
          </p>
        </section>

        <hr class="my-12 border-gray-200" id="definition">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">La facture électronique c'est quoi ?</h2>
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

        <hr class="my-12 border-gray-200" id="concernes">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Qui est concerné ?</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            La réforme s'applique à toutes les entreprises assujetties à la TVA, sans distinction de taille ou de
            secteur, y compris les cabinets d'avocats. Elle concerne aussi bien les émetteurs que les destinataires de
            factures.
          </p>
        </section>

        <hr class="my-12 border-gray-200" id="reforme">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Que prévoit la réforme de la facture électronique ?</h2>
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

        <hr class="my-12 border-gray-200" id="e-invoicing">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Qu'est-ce que le E-invoicing ?</h2>
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

        <hr class="my-12 border-gray-200" id="e-reporting">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Qu'est-ce que le E-reporting ?</h2>
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

        <hr class="my-12 border-gray-200" id="calendrier">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Calendrier de mise en œuvre</h2>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              <strong class="whitespace-nowrap">1er septembre 2026 :</strong>
              <ul class="ml-6">
                <li>Obligation de recevoir des factures électroniques pour TOUTES les entreprises</li>
                <li>Obligation d'émettre des factures électroniques pour les grandes entreprises et les ETI</li>
              </ul>
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              <strong class="whitespace-nowrap">1er septembre 2027 :</strong>
              <ul class="ml-6">
                <li>Obligation d'émettre des factures électroniques pour les PME, TPE et microentreprises</li>
              </ul>
            </li>
          </ul>
        </section>

        <hr class="my-12 border-gray-200" id="obligations">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Obligations des entreprises</h2>
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

        <hr class="my-12 border-gray-200" id="avantages">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Avantages de la réforme</h2>
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

        <hr class="my-12 border-gray-200" id="statuts">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">Cycle de vie et statuts</h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Chaque facture passe par des statuts normalisés :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3">•</span>
              Émise → Transmise → Reçue → Traitée → Archivée
            </li>
          </ul>
          <p class="text-lg leading-relaxed text-gray-700 mt-6">
            Gestion centralisée de ces étapes = gain de temps et conformité garantie.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
section,
hr {
  scroll-margin-top: 6rem;
}
</style>