import List from "../../shared/List/List.vue";
export default {
  name: "HeaderCaterories",
  components: {
    List,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    routerPush(path) {
      this.$router.push(`/catalog/${path}`);
    },
  },
};
