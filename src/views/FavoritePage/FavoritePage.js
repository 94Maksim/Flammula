import FavoriteWrapper from "../../components/Favorite/FavoriteWrapper.vue";
import Container from "../../components/shared/Container/Container.vue";
import EmptyComponent from "../../components/shared/EmptyComponent/EmptyComponent.vue";

export default {
  name: "FavoritePage",
  components: {
    FavoriteWrapper,
    Container,
    EmptyComponent,
  },
  methods: {
    deleteItem(product) {
      this.$store.dispatch("favoriteModule/deleteItem", product);
    },
  },
  computed: {
    favorite() {
      return this.$store.state.favoriteModule.favorite;
    },
  },
};
