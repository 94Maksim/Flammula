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
    getDiscount() {
      return Math.round(
        this.product.price -
          (this.product.price * this.product.discountPercentage) / 100
      );
    },
    routerPush() {
      this.$router.push(`/catalog/${this.product.category}/${this.product.id}`);
      this.closeSearch();
    },
  },
};
