<template>
  <div class="hero max-width-blue-section relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
      <div class="flex flex-col gap-4">
        <h1 class="anim-hero text-left">
          La Facture Électronique Obligatoire: Ce qu'il faut savoir
        </h1>
        <p>
          Tout ce que vous devez savoir sur la future réforme fiscale liée à la facturation électronique en
          France : quels changements attendre et comment s’y préparer.
        </p>
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
                Qu'est ce que l'E-invoicing ?
              </a>
            </li>
            <li>
              <a href="#e-reporting"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Qu'est ce que l'E-reporting ?
              </a>
            </li>
            <li>
              <a href="#calendrier"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Calendrier
              </a>
            </li>
            <li>
              <a href="#obligations-des-entreprises"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Obligations des entreprises
              </a>
            </li>
            <li>
              <a href="#avantages-de-la-reforme"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Avantages de la réforme
              </a>
            </li>
            <li>
              <a href="#mode-operatoire"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Mode opératoire
              </a>
            </li>

            <li>
              <a href="#statuts"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Cycle de vie et statuts
              </a>
            </li>
            <li>
              <a href="#votre-partenaire-de-confiance"
                class="scroll-link text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Votre partenaire de confiance
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="w-full">
        <section id="contexte" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Contexte</span></h2>
          <p class="leading-relaxed text-gray-700">
            Dès 2026, la réforme sur la facturation électronique entre en vigueur pour toutes les
            entreprises françaises.

            <br>
            Conformément à l’article 289 du Code général des impôts, la facture
            électronique est un document entièrement numérique, couvrant
            toutes les étapes de son cycle de vie, de l’émission à la réception.
            Elle doit respecter un format et un mode de transmission définis par
            l’administration fiscale, afin de permettre un traitement automatisé et
            sécurisé. Les informations obligatoires d’une facture classique
            restent exigées, assurant ainsi la valeur juridique du document.
            <br>
            Objectif : moderniser, sécuriser et automatiser les échanges de factures dans un cadre
            réglementaire strict.
          </p>
        </section>

        <section id="definition" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6">La facture électronique <span class="text-underline">c'est quoi au juste
              ?</span>
          </h2>
          <p class="leading-relaxed text-gray-700 mb-6">
            Une <span class="font-bold">facture électronique</span> est une facture créée, transmise, reçue et archivée
            <span class="font-bold">de manière entièrement
              numérique</span>, sans intervention papier, dont les données respectent une structure particulière et un
            mode de
            transmission normé par l'administration fiscale, permettant un traitement automatisé et électronique.
          </p>
          <p class="leading-relaxed text-gray-700 mb-6">
            Il existe <span class="font-bold"> deux formats officiels</span> autorisés :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              <span class="font-bold">Factur-X </span> : format hybride contenant à la fois un PDF lisible et des
              données XML lisibles par les systèmes.
              Ce format a pour particularité, et avantage, d’être autant lisible par l’humain, que par l’ordinateur et
              s’annonce comme <span class="font-bold">le format le plus utilisé à l’avenir</span>. Il est délivré via un
              fichier PDF (normé PDF/A-3) :
              celui-ci comprend des informations lisibles ainsi que les données structurées et d’éventuelles pièces
              jointes.
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              <span class="font-bold">UBL ou CII </span>: formats structurés XML lisibles uniquement les logiciels mais
              non lisibles par l'humain . Ces formats seront vraisemblablement peu, voire pas utilisés par les TPE /
              PME.
            </li>
          </ul>
          <p class="leading-relaxed text-gray-700 my-6">
            Contrairement à un simple PDF envoyé par email, la facture électronique suit un <span class="font-bold">
              processus
              normé</span>, avec transmission via une <span class="font-bold">plateforme agréée</span> et un <span
              class="font-bold">suivi de statut réglementaire</span>.
          </p>
        </section>

        <section id="concernes" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Qui est concerné</span> ?</h2>
          <p class="leading-relaxed text-gray-700">
            La réforme s'applique à toutes les entreprises assujetties à la TVA, sans distinction de taille ou de
            secteur, y compris les cabinets d'avocats. Elle concerne aussi bien les émetteurs que les destinataires de
            factures.
          </p>
        </section>

        <section id="reforme" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Que prévoit la réforme</span> de la facture
            électronique ?</h2>
          <p class="leading-relaxed text-gray-700 mb-6">
            Elle vise à généraliser les échanges de factures électroniques entre entreprises assujetties à
            la TVA. Elle repose sur deux volets principaux à prendre en compte :
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
          <h2 class="text-3xl font-bold mb-6">Qu'est-ce que l'<span class="text-underline">E-invoicing</span> ?</h2>
          <p class="leading-relaxed text-gray-700 mb-6">
            L'<span class="font-bold">e-invoicing</span> s'applique aux <span class="font-bold">transactions B2B
              domestiques</span> (entre entreprises françaises soumises à la TVA).
          </p>
          <p class="leading-relaxed text-gray-700 mb-6">
            Les factures doivent être émises et reçues via une <span class="font-bold">Plateforme Agréée Partenaire
              (PA)</span>, dans un <span class="font-bold">format électronique
              structuré ou hybride</span>.
          </p>
          <p class="leading-relaxed text-gray-700 mb-6">
            Les Plateformes de Dématérialisation Partenaire (PA) jouent donc un rôle central dans
            cette réforme en assurant la conformité et la sécurisation des échanges de factures
            électroniques.
          </p>
          <div class="bg-orange-50 border-l-4 border-orange p-4 rounded mt-6">
            <p class="text-orange-800 font-medium">
              Important : l'envoi de factures en simple PDF ne sera plus conforme à partir de 2026.
            </p>
          </div>
          <p class="leading-relaxed text-gray-700 my-6">Assurez votre conformité à la réforme fiscale sur la
            facturation électronique en optant pour la
            solution de zLawyer. <br> Ainsi, vous bénéficiez ainsi d’une solution fluide et continue grâce à une
            interface unique.</p>
        </section>

        <section id="e-reporting" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6">Qu'est-ce que l'<span class="text-underline">E-reporting</span> ?</h2>
          <p class="leading-relaxed text-gray-700 mb-6">
            <span class="font-bold">E-reporting</span> : concerne <span class="font-bold">les transactions hors
              champ du e-invoicing</span>, mais pour lesquelles l’administration veut <span class="font-bold">suivre la
              TVA et les flux
              économiques</span>. On envoie <span class="font-bold">un relevé de transaction</span>, pas la facture.
          </p>
          <p class="leading-relaxed text-gray-700 mb-3">
            Les transactions concernées sont :
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Transactions <span class="font-bold">B2C</span> (avec des particuliers).
              <br>
              Exemple : une entreprise française vend à un consommateur final en France ou à l’étranger.
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Transactions <span class="font-bold">B2B internationales.</span>
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              <span class="font-bold">Acquisitions intracommunautaires.</span>
              <br>
              Exemple : une entreprise française vend ou achète à une entreprise en Allemagne, aux États-Unis, etc.
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              <span class="font-bold">Services rendus hors UE.</span>
            </li>
            <li class="leading-relaxed text-gray-700 space-y-4">
              <span class="text-orange mr-3 mt-1">•</span>
              Les <span class="font-bold">encaissements</span> soumis à TVA.
            </li>

            <p class="leading-relaxed text-gray-700">L’entreprise envoie
              régulièrement (périodicité imposée : quotidien, hebdo ou mensuel selon les cas) des <span
                class="font-bold">données de transactions</span> à l’administration fiscale.</p>
            <div>
              <p class="leading-relaxed text-gray-700">Cela peut passer par :</p>

              <ul class="space-y-2 pl-4 pt-4">
                <li class="leading-relaxed text-gray-700"><span
                    class="text-white inline-block border border-black w-1.5 h-1.5 rounded-full mr-1 mt-1"></span>
                  <span class="font-bold">Le Portail Public de Facturation (PPF)</span>;
                </li>
                <li class="leading-relaxed text-gray-700"><span
                    class="text-white inline-block border border-black w-1.5 h-1.5 rounded-full mr-1 mt-1"></span>
                  Ou une <span class="font-bold">Plateforme Agrée (PA)</span> connectée à
                  zLawyer ou autre
                  solution métier.</li>
              </ul>
            </div>
          </ul>

          <p class="leading-relaxed text-gray-700 my-6">Pour les cabinets d’avocats, l’e-reporting via zLawyer permet de
            rester en conformité avec les nouvelles obligations fiscales tout en assurant la traçabilité et la
            transparence des opérations.</p>
          <p class="leading-relaxed text-gray-700 mb-6"><span class="font-bold">Le e-reporting suivra le même calendrier
            </span> que celui de la facture électronique, via leur plateforme.</p>
        </section>

        <section id="calendrier" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Calendrier</span> de mise en œuvre</h2>
          <p class="leading-relaxed text-gray-700 mb-8">
            La réforme de la facturation électronique prévoit une mise en place progressive avec des
            échéances précises. Il est indispensable de respecter les délais légaux afin d’éviter toute
            sanction.
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div
                class="bg-white border-2 border-orange-200 rounded-lg p-4 shadow-sm min-w-48 text-center font-bold text-lg flex flex-col items-center">
                <span>1er</span>
                <span>Septembre</span>
                <span>2026</span>
              </div>
              <div class="ml-6 flex-1">
                <h4 class="font-semibold text-gray-800 mb-2">Phase 1 :</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="leading-relaxed text-gray-700">
                    <span class="text-orange mr-2 mt-1">•</span>
                    Obligation de <span class="font-bold">recevoir des factures électroniques pour TOUTES les
                      entreprises</span>
                  </li>
                  <li class="leading-relaxed text-gray-700">
                    <span class="text-orange mr-2 mt-1">•</span>
                    <span class="font-bold">Grandes entreprises et ETI</span> : Obligation d'émettre des factures
                    électroniques
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
              <div
                class="bg-white border-2 border-orange-200 rounded-lg p-4 shadow-sm min-w-48 text-center font-bold text-lg flex flex-col items-center">
                <span>1er</span>
                <span>Septembre</span>
                <span>2027</span>
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
              ⏰ Préparez-vous dès maintenant pour être conforme à l&#39;échéance qui vous concerne grâce
              à zLawyer. <br>
              <NuxtLink title="Page Contact" class="text-orange underline" to="/contact">En savoir +
              </NuxtLink>
            </p>
          </div>
        </section>

        <section id="obligations-des-entreprises" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Obligations</span> des entreprises</h2>
          <ul class="space-y-3 text-gray-700">
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Utiliser une plateforme agréée (PA) pour l'émission et la réception des factures,
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Respecter les formats imposés (UBL, CII ou Factur-X),
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Assurer la traçabilité, le cycle de vie et le reporting des factures.
            </li>
          </ul>
        </section>

        <section id="avantages-de-la-reforme" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">Avantages</span> de la réforme</h2>
          <ul class="space-y-3 text-gray-700">
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Réduction des délais de paiement, en facilitant le traitement et la validation des
              factures,
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Réduction des coûts liés au papier, à l’impression et à l’acheminement,
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Automatisation et fiabilisation des processus comptables,
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Lutte contre la fraude à la TVA, en permettant un meilleur contrôle par l’administration fiscale,
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Renforcer la traçabilité et la transparence, grâce à des échanges numériques sécurisés et horodatés,
            </li>
            <li class="leading-relaxed text-gray-700">
              <span class="text-orange mr-3 mt-1">•</span>
              Harmoniser les pratiques, notamment avec les obligations légales en France
              et en
              Europe qui généralisent progressivement la facture électronique.
            </li>
          </ul>
        </section>

        <section id="mode-operatoire" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6">Le<span class="text-underline"> mode opératoire</span></h2>
          <div class="flex flex-col xl:flex-row gap-8">
            <div class="text-gray-700 flex flex-col gap-4">
              <ul class="space-y-3">
                <li class="leading-relaxed text-gray-700">
                  <span class="text-orange mr-3 mt-1">1.</span>
                  Création de la facture dans un outil conforme,
                </li>
                <li class="leading-relaxed text-gray-700">
                  <span class="text-orange mr-3 mt-1">2.</span>
                  Transmission via une Plateforme Agrée (PA),
                </li>
                <li class="leading-relaxed text-gray-700">
                  <span class="text-orange mr-3 mt-1">3.</span>
                  Réception et traitement automatisé de la facture par le client,
                </li>
                <li class="leading-relaxed text-gray-700">
                  <span class="text-orange mr-3 mt-1">4.</span>
                  Suivi des statuts : déposée, rejetée, acceptée, payée…
                </li>
              </ul>
              <img :src="'/images/pa/Visuel-PA.webp'" alt="Visuel de la Plateforme Agrée"
                class="w-full rounded-radius-current max-w-[500px]" />
              <p class="leading-relaxed text-gray-700">Pour cela, vous devez choisir une plateforme agrée comme
                zLawyer pour accéder à un logiciel de facturation électronique accepté par l’administration
                fiscale.</p>

              <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">
                Je souhaite être contacté
              </NuxtLink>

            </div>
          </div>
        </section>

        <section id="statuts" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6">Cycle <span class="text-underline">de vie et statuts</span></h2>
          <p class="leading-relaxed text-gray-700 mb-8">
            Dans le cadre de la réforme, chaque facture électronique suit un cycle de vie standardisé, permettant de
            tracer toutes les étapes, de l’émission à l’archivage. Les statuts ci-dessous facilitent la conformité, la
            gestion et la traçabilité.
          </p>

          <!-- Statuts obligatoires -->
          <div class="mb-10">
            <h4 class="text-lg font-bold text-orange mb-2">Statuts obligatoires</h4>
            <p class="text-gray-700 mb-4">Voici les 4 statuts obligatoires à remonter à l’administration fiscale, tels
              que définis dans le cadre de la réforme de la facturation électronique :</p>
            <!-- Desktop -->
            <div class="hidden md:block">
              <table class="min-w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
                <thead>
                  <tr>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Statut</th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Rôle</th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Qui le déclenche ?
                    </th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Utilité métier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(statut, i) in statutsObligatoires" :key="statut.nom"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                    <td
                      class="p-4 align-middle bg-orange-50 text-orange-700 font-bold rounded-l-lg border-b border-gray-200">
                      {{ statut.nom }}
                    </td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200">{{ statut.role }}</td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200">{{ statut.declencheur }}</td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200 rounded-r-lg">{{ statut.utilite
                      }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Mobile -->
            <div class="space-y-4 md:hidden">
              <div v-for="statut in statutsObligatoires" :key="statut.nom"
                class="bg-white rounded-lg shadow p-4 border-l-4 border-orange-400">
                <div class="font-bold text-orange-700 mb-2">{{ statut.nom }}</div>
                <div class="text-sm text-gray-700 mb-1"><span class="font-semibold text-gray-900">Rôle :</span> {{
                  statut.role }}</div>
                <div class="text-sm text-gray-700 mb-1"><span class="font-semibold text-gray-900">Qui le déclenche
                    ?</span> {{ statut.declencheur }}</div>
                <div class="text-sm text-gray-700"><span class="font-semibold text-gray-900">Utilité métier :</span> {{
                  statut.utilite }}</div>
              </div>
            </div>
          </div>

          <!-- Statuts recommandés -->
          <div class="mb-10">
            <h4 class="text-lg font-bold text-orange mb-2">Statuts recommandés</h4>
            <p class="text-gray-700 mb-4">Ces statuts ne sont pas obligatoires réglementairement, mais fortement
              recommandés pour faciliter le suivi des factures, l’automatisation et la qualité des échanges entre
              entreprises.</p>
            <!-- Desktop -->
            <div class="hidden md:block">
              <table class="min-w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
                <thead>
                  <tr>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Statut</th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Rôle</th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Qui le déclenche ?
                    </th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Utilité métier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(statut, i) in statutsRecommandes" :key="statut.nom"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                    <td
                      class="p-4 align-middle bg-orange-50 text-orange-700 font-bold rounded-l-lg border-b border-gray-200">
                      {{ statut.nom }}
                    </td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200">{{ statut.role }}</td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200">{{ statut.declencheur }}</td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200 rounded-r-lg">{{ statut.utilite
                      }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Mobile -->
            <div class="space-y-4 md:hidden">
              <div v-for="statut in statutsRecommandes" :key="statut.nom"
                class="bg-white rounded-lg shadow p-4 border-l-4 border-orange-400">
                <div class="font-bold text-orange-700 mb-2">{{ statut.nom }}</div>
                <div class="text-sm text-gray-700 mb-1"><span class="font-semibold text-gray-900">Rôle :</span> {{
                  statut.role }}</div>
                <div class="text-sm text-gray-700 mb-1"><span class="font-semibold text-gray-900">Qui le déclenche
                    ?</span> {{ statut.declencheur }}</div>
                <div class="text-sm text-gray-700"><span class="font-semibold text-gray-900">Utilité métier :</span> {{
                  statut.utilite }}</div>
              </div>
            </div>
          </div>

          <!-- Statuts libres -->
          <div>
            <h4 class="text-lg font-bold text-orange mb-2">Statuts libres</h4>
            <p class="text-gray-700 mb-4">Ces statuts sont laissés à l’appréciation des acteurs pour enrichir la
              traçabilité. Ils ne sont pas remontés à la DGFiP, mais sont utiles pour les workflows internes et la
              gestion client-fournisseur.</p>
            <!-- Desktop -->
            <div class="hidden md:block">
              <table class="min-w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
                <thead>
                  <tr>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Statut</th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Rôle</th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Qui le déclenche ?
                    </th>
                    <th class="bg-gray-100 p-4 text-xs text-gray-700 uppercase font-bold text-left">Utilité métier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(statut, i) in statutsLibres" :key="statut.nom"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                    <td
                      class="p-4 align-middle bg-orange-50 text-orange-700 font-bold rounded-l-lg border-b border-gray-200">
                      {{ statut.nom }}
                    </td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200">{{ statut.role }}</td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200">{{ statut.declencheur }}</td>
                    <td class="p-4 align-middle text-gray-800 border-b border-gray-200 rounded-r-lg">{{ statut.utilite
                      }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Mobile -->
            <div class="space-y-4 md:hidden">
              <div v-for="statut in statutsLibres" :key="statut.nom"
                class="bg-white rounded-lg shadow p-4 border-l-4 border-orange-400">
                <div class="font-bold text-orange-700 mb-2">{{ statut.nom }}</div>
                <div class="text-sm text-gray-700 mb-1"><span class="font-semibold text-gray-900">Rôle :</span> {{
                  statut.role }}</div>
                <div class="text-sm text-gray-700 mb-1"><span class="font-semibold text-gray-900">Qui le déclenche
                    ?</span> {{ statut.declencheur }}</div>
                <div class="text-sm text-gray-700"><span class="font-semibold text-gray-900">Utilité métier :</span> {{
                  statut.utilite }}</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-8">
            <p class="text-blue-800 font-medium">
              📊 Gestion centralisée de ces étapes = gain de temps et conformité garantie.
            </p>
          </div>
        </section>

        <section id="votre-partenaire-de-confiance" class="mb-16 scroll-mt-32">
          <h2 class="text-3xl font-bold mb-6">zLawyer : <span class="text-underline">Votre partenaire de
              confiance</span>
          </h2>
          <p class="leading-relaxed text-gray-700 mb-8">
            Le logiciel zLawyer est conçu pour répondre aux exigences de la facturation électronique.
            <br>
            En optant pour zLawyer vous garantissez une totale conformité aux obligations découlant de
            la réforme sur la facturation électronique tout en bénéficiant d&#39;une solution performante et
            sécurisée.
          </p>
          <NuxtLink title="Page Contact" class="text-orange underline" to="/facturation-electronique-et-zlawyer">
            Notre solution à la réforme
          </NuxtLink>

        </section>

        <div class="my-12">
          <section class="mb-16">
            <div class="p-8 text-center">
              <h2 class="text-2xl font-bold mb-4"><span class="text-underline">Besoin</span> d'en savoir plus ?</h2>
              <NuxtLink title="Page Contact" class="button-transparent" to="/contact">
                Je souhaite être contacté
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

const statutsObligatoires = [
  {
    nom: "Déposée",
    role: "Confirme que la facture a bien été transmise à la plateforme",
    declencheur: "Automatique (système)",
    utilite: "Démarre le suivi de la facture"
  },
  {
    nom: "Rejetée",
    role: "Signale une anomalie technique ou de format empêchant la réception",
    declencheur: "Automatique (plateforme)",
    utilite: "Nécessite correction : la facture n’est pas émise"
  },
  {
    nom: "Refusée",
    role: "Le client refuse la facture (ex : erreur de prix, référence, produit)",
    declencheur: "Manuel (client ou émetteur)",
    utilite: "Gère les litiges commerciaux"
  },
  {
    nom: "Encaissée",
    role: "Marque le paiement partiel ou total de la facture",
    declencheur: "Manuel (émetteur ou automatisé depuis un ERP)",
    utilite: "Permet le suivi du règlement et de la TVA due"
  }
];

const statutsRecommandes = [
  {
    nom: "Mise à disposition",
    role: "Indique que la facture est désormais disponible pour le client (via PA ou portail PPF)",
    declencheur: "Automatique (plateforme)",
    utilite: "Permet au client de prendre connaissance de la facture"
  },
  {
    nom: "Rejetée (technique)",
    role: "Signalement automatique d’un rejet dû à une non-conformité technique (format, données manquantes)",
    declencheur: "Automatique (plateforme)",
    utilite: "Nécessite correction et nouvel envoi"
  },
  {
    nom: "Prise en charge",
    role: "Le client a pris en compte la facture, sans pour autant l’avoir encore validée ou réglée",
    declencheur: "Manuel ou automatique (client)",
    utilite: "Permet d’indiquer un début de traitement dans les systèmes clients"
  },
  {
    nom: "Encaissée",
    role: "Le paiement a été reçu (ou un avoir remboursé), et les données sont intégrées au suivi TVA",
    declencheur: "Manuel ou automatique via ERP",
    utilite: "Alimente la déclaration de TVA, surtout en régime sur les encaissements"
  }
];

const statutsLibres = [
  {
    nom: "Émise par la plateforme",
    role: "Indique que la plateforme du fournisseur a bien pris en charge la facture et l’a émise",
    declencheur: "Automatique (plateforme fournisseur)",
    utilite: "Confirme l'envoi effectif de la facture"
  },
  {
    nom: "Reçue par la plateforme",
    role: "La facture est bien parvenue à la plateforme du destinataire, mais pas encore visible par le client",
    declencheur: "Automatique (plateforme destinataire)",
    utilite: "Suivi logistique de la transmission"
  },
  {
    nom: "En litige",
    role: "Un différend est signalé sur le contenu de la facture (montant, référence, etc.)",
    declencheur: "Manuel (client ou fournisseur)",
    utilite: "Permet de suspendre ou annuler le processus de validation/paiement"
  },
  {
    nom: "Suspendue",
    role: "Traitement en pause dans l’attente de justificatifs (bons de livraison, commande, etc.)",
    declencheur: "Manuel (client ou plateforme)",
    utilite: "Évite de rejeter une facture en attente d’éléments complémentaires"
  },
  {
    nom: "Complétée",
    role: "Les pièces justificatives ont été ajoutées, la facture peut poursuivre son traitement",
    declencheur: "Manuel (fournisseur)",
    utilite: "Réactive le flux après un blocage temporaire"
  }
];

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
  },
  data() {
    return {
      statutsObligatoires,
      statutsRecommandes,
      statutsLibres
    };
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