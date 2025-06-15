<template>
  <div class="hero max-width-blue-section relative">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
      <div class="flex flex-col gap-4">
        <h1 class="anim-hero text-left">
          Pourquoi choisir zLawyer comme solution de facturation électronique ?
        </h1>
        <p>
          Interface intuitive et conviviale adaptée aux besoins des cabinets d'avocats.
          Gestion automatisée des factures conformes aux normes légales en vigueur.
          Sécurisation des échanges de données grâce à des protocoles de sécurité avancés.
          Service client réactif et personnalisé pour vous accompagner dans l'utilisation de zLawyer
        </p>
        <NuxtLink title="Page Contact" class="button-transparent w-fit" to="/contact">
          Je souhaite une démonstration
        </NuxtLink>
      </div>
      <img :src="'images/features/features10.webp'" alt="illustration du logiciel"
        class="w-full rounded-radius-current" />
    </div>

    <div class="mt-32 flex gap-8 w-full">

      <aside class="hidden lg:block">
        <div class="h-80 min-w-64 sticky top-32 left-0 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-4 text-orange">Sommaire</h3>
          <ul class="space-y-3">
            <li>
              <a href="#partenaire-confiance"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Votre partenaire de confiance
              </a>
            </li>
            <li>
              <a href="#pourquoi-choisir"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Pourquoi choisir zLawyer ?
              </a>
            </li>
            <li>
              <a href="#reponse-zlawyer"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                La réponse zLawyer
              </a>
            </li>
            <li>
              <a href="#contact-demo"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Besoin d'en savoir plus ?
              </a>
            </li>
            <li>
              <a href="#faq" class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                FAQ - Questions fréquentes
              </a>
            </li>
            <li>
              <a href="#statuts-factures"
                class="text-gray-700 hover:text-orange transition-colors duration-200 text-sm block py-1">
                Statuts des factures
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="w-full" id="partenaire-confiance" >

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6">
            <span class="text-underline">zLawyer : </span>Votre partenaire de confiance pour la facturation électronique
          </h2>
          <p class="text-lg leading-relaxed text-gray-700">
            Le logiciel zLawyer est conçu pour répondre aux exigences de la facturation électronique, y compris la
            facture X. En choisissant zLawyer, vous garantissez la conformité de vos processus de facturation tout en
            bénéficiant d'une solution performante et sécurisée.
          </p>
        </section>

        <hr class="my-12 border-gray-200" id="pourquoi-choisir" >


        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6 ">
            <span class="text-underline">Pourquoi choisir</span> zLawyer comme solution de facturation électronique ?
          </h2>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Interface intuitive et conviviale adaptée aux besoins des cabinets d'avocats.
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Gestion automatisée des factures conformes aux normes légales en vigueur.
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Sécurisation des échanges de données grâce à des protocoles de sécurité avancés.
            </li>
            <li class="flex items-start">
              <span class="text-orange mr-3 mt-1">•</span>
              Service client réactif et personnalisé pour vous accompagner dans l'utilisation de zLawyer.
            </li>
          </ul>
        </section>

        <hr class="my-12 border-gray-200" id="reponse-zlawyer" >

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-6"><span class="text-underline">La réponse zLawyer</span></h2>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            zLawyer, éditeur reconnu de solutions pour cabinets d'avocats, anticipe cette réforme avec des solutions
            spécifiques à votre activité.
          </p>
          <p class="text-lg leading-relaxed text-gray-700 mb-6">
            Le logiciel zLawyer est conçu pour répondre aux exigences de la facturation électronique, y compris la
            facture X.
          </p>

          <div class="p-6 mb-6">
            <h3 class="text-xl font-semibold mb-4 text-orange">Notre position</h3>
            <p class="text-gray-700 mb-4">Nous sommes PDP compliant et enrichissons notre logiciel avec :</p>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Des connecteurs directs aux plateformes agréées.
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Un suivi temps réel du cycle de vie de vos factures.
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Des formats 100 % compatibles avec la réforme.
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Des tableaux de bord clairs pour la gestion et le reporting.
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Un accompagnement personnalisé à chaque étape.
              </li>
            </ul>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-4 text-orange">Pourquoi choisir zLawyer comme solution de facturation
              électronique ?</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                <span class="text-bolder">Expertise dédiée aux cabinets d'avocats,</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                <span class="text-bolder">Outil conforme, prêt pour 2026,</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                <span class="text-bolder">Intégration facile dans votre environnement actuel,</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Interface intuitive et conviviale adaptée aux besoins des cabinets d'avocats,
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Gestion automatisée des factures conformes aux normes légales en vigueur,
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Sécurisation des échanges de données grâce à des protocoles de sécurité avancés,
              </li>
              <li class="flex items-start">
                <span class="text-orange mr-3 mt-1">✓</span>
                Service client réactif et personnalisé pour vous accompagner dans l'utilisation de zLawyer.
              </li>
            </ul>
          </div>

          <p class="text-lg leading-relaxed text-gray-700 mt-6">
            En choisissant zLawyer, vous garantissez la conformité de vos processus de facturation tout en bénéficiant
            d'une solution performante et sécurisée.
          </p>
        </section>

        <hr class="my-12 border-gray-200" id="contact-demo">

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

        <hr class="my-12 border-gray-200" id="faq">

        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-8"><span class="text-underline">FAQ</span> – Facture Électronique Obligatoire
          </h2>
          <p class="text-lg text-gray-600 mb-8">Voici le Forum des Questions (FAQ) sur la facturation électronique</p>

          <div class="space-y-8">

            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 ">🏢 1. Qu'est-ce qu'une facture électronique au sens de la réforme
                ?</h3>
              <p class="text-gray-700">
                Une facture électronique est une facture créée, transmise et reçue au format structuré ou hybride, via
                une plateforme agréée. Un simple PDF envoyé par email ne sera plus conforme aux nouvelles règles.
              </p>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 ">🏢 2. Qu'est-ce qu'une PDP ?</h3>
              <p class="text-gray-700 mb-4">
                Une PDP (Plateforme de Dématérialisation Partenaire) est une plateforme privée agréée par
                l'administration fiscale, qui peut :
              </p>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  émettre et recevoir des factures électroniques,
                </li>
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  transmettre les données à la DGFiP,
                </li>
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  assurer le suivi des statuts.
                </li>
              </ul>
              <div class="bg-gray-50 border-l-4 border-orange p-4 rounded">
                <p class="text-orange font-medium">
                  🏢 zLawyer est PDP compliant : vous n'avez pas besoin de chercher une solution externe.
                </p>
              </div>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 3. Est-ce que mon cabinet d'avocats est concerné ?
              </h3>
              <p class="text-gray-700">
                Oui. Tous les professionnels assujettis à la TVA, y compris les professions libérales, devront se
                conformer à la réforme.
              </p>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 4. Toutes les entreprises devront elles s'équiper
                d'une solution informatique ?</h3>
              <p class="text-gray-700 mb-4">
                Toutes les entreprises françaises assujetties à la TVA en France devront obligatoirement utiliser les
                services d'une PDP (prestataire de services de confiance pour la dématérialisation des factures) pour
                émettre et recevoir leurs factures, ainsi que pour transmettre les données requises à l'Administration
                fiscale.
              </p>
              <p class="text-gray-700 mb-4">
                Il est important de noter que l'obligation d'émettre des factures électroniques ne signifie pas
                nécessairement qu'une entreprise doit avoir une solution informatique. En effet, seule l'utilisation
                d'une PDP est actuellement rendue obligatoire dans ce contexte.
              </p>
              <p class="text-gray-700">
                Dans le cas d'une entreprise avec un faible volume de factures, tel qu'une SCI ayant un bail
                professionnel trimestriel par exemple, il n'est pas obligatoire de se doter d'une solution informatique.
                Cette entreprise devrait pouvoir émettre ses factures "en ligne". Il est cependant à noter que l'usage
                du facturier papier ne sera plus possible.
              </p>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 5. Puis-je refuser une facture envoyée par
                courriel (PDF) par un fournisseur qui n'est pas encore concerné par l'obligation ?</h3>
              <p class="text-gray-700 mb-4">
                Non, jusqu'à la date d'entrée en vigueur de l'obligation (selon la taille de l'entreprise), vous ne
                pouvez pas exiger une facture électronique.
              </p>
              <p class="text-gray-700">
                Avant 2026-2027, une PME peut encore vous envoyer une facture PDF ou papier, et vous devez l'accepter
                tant qu'elle respecte la réglementation actuelle.
              </p>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 6. Vais-je pouvoir continuer à faire mes factures
                PDF comme aujourd'hui ?</h3>
              <p class="text-gray-700 mb-4">
                Non. Dès l'entrée en vigueur de la réforme (à partir de 2026), les factures PDF envoyées par e-mail ne
                seront plus valides.
              </p>
              <p class="text-gray-700">
                Vous devrez utiliser un format structuré ou hybride (Factur-X, UBL, CII) et passer par une plateforme
                agréée pour les émettre.
              </p>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 7. Dois-je choisir une plateforme spécifique ?
              </h3>
              <p class="text-gray-700 mb-4">Oui. Vous devrez passer par :</p>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  une PDP agréée,
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  un OD (Opérateur de Dématérialisation),
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  ou le Portail Public de Facturation (PPF) de l'État.
                </li>
              </ul>
              <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p class="text-green-800 font-medium">
                  ✅ Avec zLawyer, vous êtes automatiquement connecté à la bonne plateforme.
                </p>
              </div>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 8. Quels formats de factures seront autorisés ?
              </h3>
              <ul class="space-y-2 text-gray-700 mb-4">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  Factur-X (hybride PDF/XML),
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  UBL et CII (formats structurés XML).
                </li>
              </ul>
              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p class="text-blue-800 font-medium">
                  🏢 Tous lisibles automatiquement par les logiciels comptables.
                </p>
              </div>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 9. Quelle est la différence entre e-invoicing et
                e-reporting ?</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  <strong>E-invoicing : </strong> factures électroniques B2B domestiques.
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3 mt-1">•</span>
                  <strong class="whitespace-nowrap">E-reporting : </strong> transmission des données pour les opérations
                  B2C, internationales, intracommunautaires, ou services hors UE.
                </li>
              </ul>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 10. Quelles sont les échéances à respecter ?</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  <strong>1er septembre 2026 :</strong> grandes entreprises.
                </li>
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  <strong>1er septembre 2027 :</strong> PME, TPE, professions libérales.
                </li>
              </ul>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 11. Comment zLawyer m'accompagne dans cette
                transition ?</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  Logiciel conforme à la réforme 2026 et PDP compliant.
                </li>
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  Émission et réception des factures 100 % automatisées.
                </li>
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  Suivi des statuts, alertes et tableaux de bord.
                </li>
                <li class="flex items-start">
                  <span class="text-orange mr-3 mt-1">•</span>
                  Formation et support dédiés aux cabinets d'avocats.
                </li>
              </ul>
            </div>


            <div class=" p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">🏢 12. Je travaille pour des entreprises en Europe
                mais aussi pour la Russie. Devrai-je émettre des factures électroniques pour ces clients ?</h3>
              <p class="text-gray-700 mb-4">
                Non, pas pour ces clients. Le e-invoicing ne s'applique qu'aux transactions B2B domestiques
                (France/France).
              </p>
              <p class="text-gray-700">
                En revanche, vous devrez effectuer du e-reporting pour vos clients étrangers, y compris européens ou
                hors UE (comme la Russie), afin de transmettre les données à l'administration fiscale française.
              </p>
            </div>
          </div>
        </section>

        <hr class="my-12 border-gray-200" id="statuts-factures" >


        <section class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">Les principaux statuts d'une facture qui seront mis en
            place</h2>
          <p class="text-lg text-gray-700 mb-8">
            Une facture peut passer par plusieurs statuts normalisés tout au long de son cycle :
          </p>

          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">1. Émise</h4>
              <p class="text-sm text-gray-700">La facture est générée et transmise à une plateforme agréée.</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">2. Déposée</h4>
              <p class="text-sm text-gray-700">La facture est enregistrée sur la plateforme (PDP, OD ou PPF).</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">3. Transmise</h4>
              <p class="text-sm text-gray-700">La facture est envoyée au destinataire final.</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">4. Reçue</h4>
              <p class="text-sm text-gray-700">La facture est réceptionnée par le client.</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">5. Rejetée (le cas échéant)</h4>
              <p class="text-sm text-gray-700">Le client ou la plateforme refuse la facture pour non-conformité.</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">6. Acceptée</h4>
              <p class="text-sm text-gray-700">Le client valide la facture pour traitement comptable.</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">7. Payée</h4>
              <p class="text-sm text-gray-700">La facture est réglée et le paiement est enregistré.</p>
            </div>

            <div class="bg-white border bordergray-200 rounded-lg p-4">
              <h4 class="font-semibold mb-2">8. Archivée</h4>
              <p class="text-sm text-gray-700">La facture est conservée dans un format légalement opposable pendant 10
                ans.</p>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mt-8">
            <p class="text-blue-800 font-medium">
              📊 Chaque changement de statut est remonté en temps réel, offrant une visibilité complète sur l'état
              d'avancement des factures.
            </p>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
section, hr {
  scroll-margin-top: 3rem;
}
</style>