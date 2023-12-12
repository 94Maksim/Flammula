import Container from "../../components/shared/Container/Container.vue";
import ProductItem from "../../components/Product/ProductItem/ProductItem.vue";
import Loader from "../../components/shared/Loader/Loader.vue";
import API from "../../api/fakeApi/index.js";
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
    addToCart(quantity) {
      this.product.quantity = quantity;
      this.$store.dispatch("userCartModule/setUserCart", this.product);
    },
    deleteItem() {
      this.$store.dispatch("userCartModule/deleteItem", this.product);
    },
    addToFavorite() {
      this.$store.dispatch("favoriteModule/setFavorite", this.product);
    },
    deleteFromFavorite() {
      this.$store.dispatch("favoriteModule/deleteItem", this.product);
    },
  },
  computed: {
    getProductById() {
      return this.$store.getters["userCartModule/getItemById"](this.product.id);
    },
    isProductInCart() {
      return !!this.getProductById;
    },
    productQuantity() {
      return this.isProductInCart ? this.getProductById.quantity : 0;
    },
    getFavoriteById() {
      return this.$store.getters["favoriteModule/getItemById"](this.product.id);
    },
    isProductInFavorite() {
      return !!this.getFavoriteById;
    },
  },
  mounted() {
    this.getProduct();
  },
};
