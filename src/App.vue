<template>
  <Header />
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
export default {
  components: {
    RouterView,
    Header,
  },
};
</script>
