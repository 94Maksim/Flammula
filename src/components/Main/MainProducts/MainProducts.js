import ProductCard from "../../shared/ProductCard/ProductCard.vue";
export default {
  name: "MainProducts",
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
