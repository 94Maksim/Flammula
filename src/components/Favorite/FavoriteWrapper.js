import ProductCard from "../shared/ProductCard/ProductCard.vue";
import Button from "../shared/Button/Button.vue";

export default {
  name: "FavoriteWrapper",
  components: {
    ProductCard,
    Button,
  },
  props: {
    favorite: {
      type: Object,
      required: true,
    },
  },
};
