import ProductCard from "../../shared/ProductCard/ProductCard.vue";
import Container from "../../shared/Container/Container.vue";
import API from "../../../api/index.js";

export default {
  name: "CatalogItems",
  components: {
    ProductCard,
    Container,
  },
  data() {
    return {
      products: null,
    };
  },
  methods: {
    getProducts() {
      API.products
        .getProductsByCategory(this.$route.params.items)
        .then((response) => (this.products = response));
    },
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.getProducts();
      }
    },
  },
};
