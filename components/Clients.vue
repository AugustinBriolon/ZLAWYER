<template>
  <div class="max-width-white-section">
    <div class="max-width-white-section-content flex flex-col gap-8">
      <h2 class="text-orange">Ils nous font confiance</h2>

      <div
        class="w-full relative overflow-hidden whitespace-nowrap  bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div class="inline-block w-[calc(225px*6)] animate-infinite-slider">
          <img v-for="(logo, index) in logos" :key="index" :src="logo.src" class="inline-block h-28 w-auto" />
        </div>
        <div class="inline-block w-[calc(225px*6)] animate-infinite-slider">
          <img v-for="(logo, index) in logos" :key="index" :src="logo.src" class="inline-block h-28 w-auto" />
        </div>
      </div>

      <div
        class="w-full relative overflow-hidden whitespace-nowrap  bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div class="inline-block w-[calc(225px*6)] animate-infinite-slider-reverse">
          <img v-for="(logo, index) in logos2" :key="index" :src="logo.src" class="inline-block h-28 w-auto" />
        </div>
        <div class="inline-block w-[calc(225px*6)] animate-infinite-slider-reverse">
          <img v-for="(logo, index) in logos2" :key="index" :src="logo.src" class="inline-block h-28 w-auto" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      logos: [
        { src: "images/clients/azarmiLogo.webp" },
        { src: "images/clients/baroLogo.webp" },
        { src: "images/clients/bettoLogo.webp" },
        { src: "images/clients/valtherLogo.webp" },
        { src: "images/clients/vinciLogo.webp" },
        { src: "images/clients/vatierLogo.webp" }
      ],
      logos2: [
        { src: "images/clients/bonifassiLogo.webp" },
        { src: "images/clients/laMartineLogo.webp" },
        { src: "images/clients/flichyLogo.webp" },
        { src: "images/clients/lombardLogo.webp" },
        { src: "images/clients/navacelleLogo.webp" },
        { src: "images/clients/ollynsLogo.webp" }
      ]
    }
  }
};
</script>