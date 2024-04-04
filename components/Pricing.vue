<template>
  <div class="max-width-blue-section flex flex-col items-center" id="tarif">
    <div class="flex flex-col items-center justify-center pb-10">
      <h2 class="text-center">Un tatif unique, transparent et accessible</h2>
      <p>Avec zLawyer, pas de mauvaise surprise, 1 logiciel, 1 tarif/utilisateur/mois avec toutes les fonctionnalités
      </p>
    </div>
    <div class="flex flex-col lg:flex-row gap-10">

      <div class="anim-from-top card-pricing px-10 py-16 flex flex-col items-center bg-white rounded-radius-current">
        <div class="flex flex-col items-center sm:flex-row sm:justify-around">
          <div class="mb-8 sm:mb-0 sm:mr-8">
            <p class="pricingText text-6xl text-center">
              49€ <br />
              <span class="text-2xl block">/mois</span>
              <span class="text-2xl block">/utilisateur</span>
              <span class="text-sm block">sans engagement</span>
            </p>
          </div>
        </div>

        <NuxtLink to="/contact" class="button-orange mt-6 text-center w-full">Demandez un démo</NuxtLink>
      </div>

      <div class="anim-from-top card-pricing px-10 py-6 bg-white rounded-radius-current">
        <div class="h-full flex flex-col items-center sm:justify-around">
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Facturations multiples</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Édition de factures en ligne</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Modèles personnalisés</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Suivi du reste à facturer par dossier</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Tableau de bords financier</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Reporting et Statistiques</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Exports comptables</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 sm:w-full w-40 text-clip">Gestion documentaire</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Intelligence artificielle (Zephir)</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">Support client</p>
          </div>
          <div class="flex items-center w-full">
            <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
            <p class="ml-4 w-full text-clip">...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-pricing {
  box-shadow: var(--shadow-current);
  border-radius: var(--radius-current);
}

.pricingText {
  color: var(--color-orange);
  font-family: 'Roboto-regular', sans-serif;
  font-weight: 600;
}
</style>
