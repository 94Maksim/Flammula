import Image from "../../shared/Image/Image.vue";
import Button from "../../shared/Button/Button.vue";
import ProductInCart from "../ProductInCart/ProductInCart.vue";

export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
    isProductInCart: {
      type: Boolean,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    isProductInFavorite: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Image,
    Button,
    ProductInCart,
  },
  methods: {
    addToCart(value) {
      this.$emit("addToCart", Number(value));
    },
    addToFavorite() {
      this.$emit("addToFavorite");
    },
    deleteFromFavorite() {
      this.$emit("deleteFromFavorite");
    },
  },
};
