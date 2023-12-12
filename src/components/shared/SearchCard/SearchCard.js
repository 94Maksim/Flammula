import Image from "../Image/Image.vue";

export default {
  name: "SearchCard",
  components: {
    Image,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeSearch() {
      this.$emit("closeSearch");
    },
  },
};
