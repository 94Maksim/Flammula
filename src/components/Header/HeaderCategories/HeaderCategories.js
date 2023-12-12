import Image from "../../shared/Image/Image.vue";
export default {
  name: "HeaderCategories",
  components: {
    Image,
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
