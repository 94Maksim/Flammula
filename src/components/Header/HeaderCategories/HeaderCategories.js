import List from "../../shared/List/List.vue";
export default {
  name: "HeaderCategories",
  components: {
    List,
  },
  props: {
    categories: {
      type: [Array, null],
      required: true,
    },
  },
  methods: {
    routerPush(path) {
      this.$router.push(`/catalog/${path}`);
    },
  },
};
