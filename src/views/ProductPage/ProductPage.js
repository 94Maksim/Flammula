import Container from "../../components/shared/Container/Container.vue";
import ProductItem from "../../components/Product/ProductItem/ProductItem.vue";
import Loader from "../../components/shared/Loader/Loader.vue";
import API from "../../api/index.js";
export default {
  name: "ProductPage",
  components: {
    Container,
    ProductItem,
    Loader,
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getProduct() {
      API.products
        .getProductById(this.$route.params.id)
        .then((response) => (this.product = response));
    },
  },
  mounted() {
    this.getProduct();
  },
};
