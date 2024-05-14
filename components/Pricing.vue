<template>
  <div class="max-width-blue-section flex flex-col items-center gap-8" id="tarif">
    <div class="flex flex-col items-center justify-center">
      <h2 class="text-center">Un tarif unique, transparent et accessible</h2>
      <p>Avec zLawyer, pas de mauvaise surprise, 1 logiciel, 1 tarif/utilisateur/mois avec toutes les fonctionnalités
      </p>
    </div>

    <div class="anim-from-top px-10 py-10 lg:py-6 flex flex-col lg:flex-row gap-10 bg-white rounded-radius-current card-pricing">

      <div class="flex flex-col items-center justify-center px-10">
        <div class="flex flex-col gap-1 items-center">
          <p class="text-orange font-bold text-6xl text-center">49€</p>
          <p class="text-orange font-bold text-2xl">/mois</p>
          <p class="text-orange font-bold text-2xl">/utilisateur</p>
          <p class="text-orange font-bold text-sm">sans engagement</p>
        </div>

        <NuxtLink to="/contact" class="button-orange mt-6 text-center w-full">Demandez un démo</NuxtLink>
      </div>

      <div class="flex flex-col gap-2 h-full">
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Gestions des dossiers</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Gestion documentaire</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Facturation au temps passé / forfait / provisions</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Modèles personnalisables</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Suivi du reste à facturer par dossier</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Tableaux de bords financiers</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Reportings et statistiques</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="sm:w-full w-40 text-clip">Suivi des performances</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Exports comptables simples</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Relance des impayés</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip"><span class="text-orange font-bold">(New)</span> Intelligence artificielle
            (Zéphyr)</p>
        </div>
        <div class="flex items-center gap-2 w-full">
          <img :src="'images/logos/checkIcon.svg'" alt="icone de validation" class="h-4" />
          <p class="w-full text-clip">Support Clients</p>
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
</style>
