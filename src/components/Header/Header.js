import API from "../../api/index";
import fakeApi from "../../api/fakeApi/index";
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
      this.allProducts = API.products.getTopProducts();
    },
    getQueryProducts(query) {
      if (query.length) {
        this.allProducts = API.products.getQueryProducts(query);
      } else this.getTopProducts();
    },
  },
  mounted() {
    this.allCategories = API.categories.getAllCategories();

    this.titles = fakeApi.titles.getTitles();
    this.names = fakeApi.titles.getNames(this.login);
  },
};
