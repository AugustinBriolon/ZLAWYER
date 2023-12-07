<template>
  <div class="max-width-white-section">
    <div class="max-width-white-section-content relative grid grid-cols-1 lg:grid-cols-2">
      <div class="p-8">
        <h3 class="mb-8">Contact</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <p class="pb-4">
            Zèle Solutions : <br />
            9, rue Angélique Verien <br />
            92200, Neuilly-sur-Seine
          </p>
          <div>
            <p>
              Tél :
              <a class="text-link" href="tel:330184257027">01 84 25 70 27</a>
            </p>
            <p>
              Mail :
              <a class="text-link" href="mailto:info@zele-solutions.fr">info@zele-solutions.fr</a>
            </p>
          </div>
        </div>
      </div>

      <div class="p-8">
        <h3 class="mb-8">zLawyer App</h3>
        <div class="flex flex-wrap">
          <a target="_blank" href="https://apps.apple.com/fr/app/zlawyer/id1174916635?mt=8">
            <NuxtImg class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3"
              src="/images/logos/badgeAppStore.svg" alt="logo de téléchargement vers l'apple store" />
          </a>
          <a target="_blank"
            href="https://play.google.com/store/apps/details?id=com.zelesolution.zlawyer&hl=fr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <NuxtImg class="hover:opacity-30 duration-150 cursor-pointer w-40 mr-3 mb-3"
              src="/images/logos/badgePlayStore.svg" alt="logo de téléchargement vers le play store" />
          </a>
        </div>
      </div>

      <div class="p-8">
        <h3 class="mb-8">Ressources</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="pb-4">
            <a class="text-link block" download
              href="https://download.teamviewer.com/download/TeamViewerQS.exe">Assistance à distance (Teamviewer)</a>
            <a class="text-link block" target="_blank" href="https://anydesk.com/fr/downloads">Assistance à distance
              (Anydesk)</a>
            <a class="text-link block" download href="/download/zlawyerstp.exe">Installation zLawyer</a>
          </div>

          <div>
            <NuxtLink class="block text-link" to="/conditions-generales-utilisation">Conditions générales
              d'utilisation</NuxtLink>
            <NuxtLink class="block text-link" to="/politques-de-confidentialite">Politiques de
              confidentialité</NuxtLink>
            <NuxtLink class="block text-link" to="/politique-de-cookies">Politiques de cookies</NuxtLink>
          </div>
        </div>
      </div>

      <div class="p-8 flex items-center">
        <NuxtImg src="/images/pandas/panda.png" class="w-28" alt="panda" />
      </div>

      <div class="absolute w-full bottom-5">
        <p class="text-center">
          © 2006 - {{ year }} • Zèle Solutions. Tous droits réservés.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
