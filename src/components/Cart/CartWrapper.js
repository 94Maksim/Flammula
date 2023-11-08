import ProductCard from "../shared/ProductCard/ProductCard.vue";
import CartTotal from "./CartTotal/CartTotal.vue";
import CartProductFooter from "./CartProductFooter/CartProductFooter.vue";

export default {
  name: "cartWrapper",
  components: {
    ProductCard,
    CartTotal,
    CartProductFooter,
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateValue(quantity, id) {
      this.$emit("updateValue", quantity, id);
    },
    deleteItem(product) {
      this.$emit("deleteItem", product);
    },
  },
};
