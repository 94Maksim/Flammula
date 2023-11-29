import API from "../../api/index.js";
import Icon from "../shared/Icon/Icon.vue";
import Container from "../shared/Container/Container.vue";
import Button from "../shared/Button/Button.vue";
import List from "../shared/List/List.vue";
import HeaderPanel from "./HeaderPanel/HeaderPanel.vue";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown.vue";
import HeaderSearch from "./HeaderSearch/HeaderSearch.vue";
import HeaderCategories from "./HeaderCategories/HeaderCategories.vue";
export default {
  name: "Header",
  components: {
    Icon,
    Container,
    Button,
    List,
    HeaderPanel,
    HeaderDropdown,
    HeaderSearch,
    HeaderCategories,
  },
  data() {
    return {
      isShowDropdown: false,
      isShowSearch: false,
      isShowCategories: false,
      allCategories: null,
      allProducts: null,
      titles: null,
      names: null,
    };
  },
  methods: {
    showDropdown() {
      this.isShowDropdown = true;
      this.$store.commit("overflowModule/chooseOverflowHidden");
    },
    hideDropdown() {
      this.isShowDropdown = false;
      this.$store.commit("overflowModule/chooseOverflowAuto");
    },
    showSearch(item) {
      if (item === "search") {
        this.isShowSearch = true;
      }
    },
    hideSearch() {
      this.isShowSearch = false;
    },
    routerPush(path) {
      this.$router.push(`/${path}`);
      this.isShowCategories = false;
      this.hideDropdown();
    },
    showCategories(name) {
      if (name === "catalog") {
        this.isShowCategories = true;
      }
    },
    hideCategories() {
      this.isShowCategories = false;
    },
    getTopProducts() {
      API.products
        .getProductsByCategory("tops")
        .then((response) => (this.allProducts = response));
    },
    getQueryProducts(query) {
      API.products
        .getQueryProducts(query)
        .then((response) => (this.allProducts = response));
    },
  },
  mounted() {
    API.categories
      .getListCategories()
      .then((response) => (this.allCategories = response));

    this.titles = API.titles.getTitles();
    this.names = API.titles.getNames(this.login);
  },
};
