import Field from "../../shared/Field/Field.vue";
import Button from "../../shared/Button/Button.vue";
import Icon from "../../shared/Icon/Icon.vue";
import SearchCard from "../../shared/SearchCard/SearchCard.vue";
import Loader from "../../shared/Loader/Loader.vue";
import HeaderSearchResult from "../HeaderSearchResult/HeaderSearchResult.vue";
export default {
  name: "HeaderSearch",
  components: {
    Field,
    Button,
    Icon,
    SearchCard,
    Loader,
    HeaderSearchResult,
  },
  props: {
    products: {
      type: [Array, null],
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      focus: true,
    };
  },
  methods: {
    hideSearch(item) {
      if (
        item === "header__search-result" ||
        item === "header__search" ||
        item === "header__search-field"
      ) {
        this.$emit("hideSearch");
      }
    },
    routerPush(product) {
      this.$router.push(`/catalog/${product.category}/${product.id}`);
      this.hideSearch("header__search");
    },
  },
  watch: {
    searchQuery() {
      this.$emit("getQueryProducts", this.searchQuery);
    },
  },
};
