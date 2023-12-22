<template>
  <div class="header-container fixed border-b border-b-white z-[999] w-screen">
    <div class="header max-w—[1920px] mx-auto h-24 flex items-center justify-between px-8 py-6 w-full">
      <NuxtLink to="/">
        <NuxtImg src="/images/logos/zeleLogo.png" class="h-12 sm:h-16 cursor-pointer" alt="Logo zLawyer" />
      </NuxtLink>

      <ul class="items-center hidden lg:flex header-nav">
        <li class="ml-10">
          <a class="text-link" href="/#solutions">Avantages</a>
        </li>
        <li class="ml-10">
          <a class="text-link" href="/#fonctionnalites">Fonctionnalités</a>
        </li>
        <li class="ml-10">
          <a class="text-link" href="/#clients">Témoignages</a>
        </li>
        <li class="ml-10">
          <NuxtLink class="text-link" to="/contact">Contact</NuxtLink>
        </li>
        <li class="ml-10">
          <a class="text-link" href="https://client.zlawyer.fr/sign-in" target="_blank">Accès Client</a>
        </li>
        <li class="ml-10">
          <a href="tel:330184257027" class="button-orange text-link font-normal">01 84 25 70 27</a>
        </li>
      </ul>

      <ul
        :class="['items-center justify-center flex-col flex fixed top-0 left-0 w-screen h-screen transition-all duration-300 bg-white', isActive ? '-translate-y-0' : '-translate-y-[100vh]']">
        <li class="mt-6">
          <a @click="isActive = !isActive" class="text-link" href="/#solutions">Avantages</a>
        </li>
        <li class="mt-6">
          <a @click="isActive = !isActive" class="text-link" href="/#fonctionnalites">Fonctionnalités</a>
        </li>
        <li class="mt-6">
          <a @click="isActive = !isActive" class="text-link" href="/#clients">Témoignages</a>
        </li>
        <li class="mt-6">
          <NuxtLink class="text-link" to="/contact">Contact</NuxtLink>
        </li>
        <li class="mt-6">
          <a @click="isActive = !isActive" class="text-link" href="https://client.zlawyer.fr/sign-in"
            target="_blank">Accès Client</a>
        </li>
        <li class="mt-10">
          <a @click="isActive = !isActive" href="tel:330184257027" class="button-orange text-link font-normal">01 84 25 70
            27</a>
        </li>
      </ul>

      <div class="burger block lg:hidden">
        <div class="w-10 h-6 relative cursor-pointer btn1" @click="isActive = !isActive">
          <div
            :class="['w-full h-[2px] absolute bg-orange transition-all duration-300 lignes', isActive ? 'top-[18px] rotate-[135deg] -translate-y-2' : 'top-0']">
          </div>
          <div
            :class="['w-full h-[2px] absolute bg-orange transition-all duration-300 lignes top-3', isActive ? 'opacity-0' : 'opacity-100']">
          </div>
          <div
            :class="['w-full h-[2px] absolute bg-orange transition-all duration-300 lignes', isActive ? 'top[18px] -rotate-[135deg] translate-y-2' : 'top-6']">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.header-container {
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
}
</style>
