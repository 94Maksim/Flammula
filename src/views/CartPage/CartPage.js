import CartWrapper from "../../components/Cart/CartWrapper.vue";
import Container from "../../components/shared/Container/Container.vue";
import EmptyComponent from "../../components/shared/EmptyComponent/EmptyComponent.vue";
export default {
  name: "cartPage",
  components: {
    CartWrapper,
    Container,
    EmptyComponent,
  },
  methods: {
    addToCart(quantity, id) {
      const product = this.cart.products.find((product) => (product.id = id));
      product.quantity = Number(quantity);
      this.$store.dispatch("userCartModule/setUserCart", product);
    },
    deleteItem(product) {
      this.$store.dispatch("userCartModule/deleteItem", product);
    },
  },
  computed: {
    cart() {
      return this.$store.state.userCartModule.userCart;
    },
  },
};
