<template>
  <div>
    <Header />
    <main class="pt-24 min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";
</style>