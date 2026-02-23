<template>
  <div class="backdrop-blur-lg fixed border-b border-b-white/20 w-screen" style="z-index: 60;">
    <div class="max-w-[1920px] mx-auto h-24 flex items-center justify-between px-8 py-6 w-full">

      <NuxtLink title="Page Home" to="/">
        <img src="https://www.zlawyer.fr/logiciel-avocats/images/logos/zeleLogo.png" class="h-12 sm:h-16 cursor-pointer"
          alt="Logo zLawyer" />
      </NuxtLink>

      <ul class="items-center hidden lg:flex gap-8 header-nav">
        <li><a class="text-link" href="/#solutions">Avantages</a></li>
        <li><a class="text-link" href="/#fonctionnalites">Fonctionnalités</a></li>
        <li><a class="text-link" href="/#facturation-electronique">Facturation Électronique</a></li>
        <li><a class="text-link" href="/#clients">Témoignages</a></li>
        <li><a class="text-link" href="/#tarif">Tarif</a></li>
        <li><a class="text-link" href="https://client.zlawyer.fr/sign-in" target="_blank">Accès Client</a></li>
        <li class="hidden 2xl:block">
          <a href="tel:330184257027" class="button-transparent text-link font-normal">01 84 25 70 27</a>
        </li>
        <li>
          <NuxtLink title="Page Contact" to="/contact" class="button-orange text-center w-full text-nowrap">
            Demandez une démo
          </NuxtLink>
        </li>
      </ul>

      <!-- Placeholder visuel pour réserver l'espace dans le header -->
      <div class="block lg:hidden w-10 h-10" />
    </div>
  </div>

  <!-- Tout ce qui concerne le mobile est téléporté dans body -->
  <Teleport to="body">

    <!-- Burger : fixed, totalement libre -->
    <button class="fixed lg:hidden w-10 h-10 flex items-center justify-center"
      style="top: 1.8rem; right: 2rem; z-index: 300;" @click="isActive = !isActive" aria-label="Menu">
      <span class="burger-icon">
        <span :class="['bar bar-top', isActive && 'active']"></span>
        <span :class="['bar bar-mid', isActive && 'active']"></span>
        <span :class="['bar bar-bot', isActive && 'active']"></span>
      </span>
    </button>

    <!-- Overlay -->
    <Transition name="overlay">
      <div v-if="isActive" class="fixed inset-0 bg-black/40 backdrop-blur-sm" style="z-index: 100;"
        @click="isActive = false" />
    </Transition>

    <!-- Drawer -->
    <Transition name="drawer">
      <nav v-if="isActive" class="fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col"
        style="z-index: 200;">
        <ul class="flex flex-col px-8 pt-28 pb-6 gap-1 flex-1">
          <li v-for="(link, i) in navLinks" :key="i" :style="{ animationDelay: `${i * 50}ms` }" class="nav-item">
            <a :href="link.href" :target="link.target"
              class="flex items-center py-4 text-gray-800 font-medium text-base border-b border-gray-100 hover:text-orange transition-colors duration-200"
              @click="isActive = false">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="px-8 pb-10 flex flex-col gap-3">
          <a href="tel:330184257027" class="button-transparent text-center text-sm font-medium">
            01 84 25 70 27
          </a>
          <NuxtLink title="Page Contact" to="/contact" class="button-orange text-center" @click="isActive = false">
            Demandez une démo
          </NuxtLink>
        </div>
      </nav>
    </Transition>

  </Teleport>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      navLinks: [
        { label: 'Avantages', href: '/#solutions' },
        { label: 'Fonctionnalités', href: '/#fonctionnalites' },
        { label: 'Facturation Électronique', href: '/#facturation-electronique' },
        { label: 'Témoignages', href: '/#clients' },
        { label: 'Tarif', href: '/#tarif' },
        { label: 'Accès Client', href: 'https://client.zlawyer.fr/sign-in', target: '_blank' },
      ],
    };
  },
  watch: {
    isActive(val) {
      document.body.style.overflow = val ? 'hidden' : '';
    },
  },
};
</script>

<style scoped>
.burger-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  width: 24px;
}

.bar {
  display: block;
  height: 1.5px;
  background: #f97316;
  border-radius: 2px;
  transform-origin: center;
  transition: width 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.bar-top {
  width: 24px;
}

.bar-mid {
  width: 16px;
}

.bar-bot {
  width: 20px;
}

.bar-top.active {
  width: 24px;
  transform: translateY(6.5px) rotate(45deg);
}

.bar-mid.active {
  opacity: 0;
  transform: scaleX(0);
}

.bar-bot.active {
  width: 24px;
  transform: translateY(-6.5px) rotate(-45deg);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.drawer-enter-active {
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}

.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-enter-to,
.drawer-leave-from {
  transform: translateX(0);
}

.nav-item {
  animation: fadeSlideIn 0.35s ease both;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateX(12px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>