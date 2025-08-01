import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (!config.public.recaptchaSiteKey) {
    console.error('Clé reCAPTCHA non définie. Vérifiez votre fichier .env');
    return;
  }

  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: config.public.recaptchaSiteKey,
    loaderOptions: {
      useRecaptchaNet: true,
      autoHideBadge: false,
    },
  });
});
