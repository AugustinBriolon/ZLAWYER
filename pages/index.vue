<template>
  <div>
    <Hero />
    <!-- <Reviews /> -->
    <Advantages />
    <Adaptive />
    <Features />
    <Infos />
    <Testimonials />
    <Clients />
    <Pricing />
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    let animFromTop = gsap.utils.toArray('.anim-from-top')
    animFromTop.forEach((item, index) => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 50%",
          toggleActions: "play none none reverse",
          end: "bottom top",
        }
      });
      tl.from(item, {
        opacity: 0,
        y: -50,
        duration: .5,
      });
    });
  },
};
</script>

<style scoped lang="scss">
.cookies-container {
  padding: 50px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button-orange {
    margin: 5px;
    width: 140px;
  }
}
</style>