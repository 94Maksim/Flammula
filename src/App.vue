<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: {
    RouterView,
    Header,
    Footer,
  },
};
</script>
