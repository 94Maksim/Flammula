import CatalogWrapper from "../../components/Catalog/CatalogWrapper/CatalogWrapper.vue";
import Container from "../../components/shared/Container/Container.vue";
import Loader from "../../components/shared/Loader/Loader.vue";
import API from "../../api/index.js";
export default {
  name: "CatalogPage",
  components: {
    CatalogWrapper,
    Container,
    Loader,
  },
  data() {
    return {
      categoriesList: null,
    };
  },
  methods: {
    getCategories() {
      API.categories
        .getCategoriesWithImage()
        .then((response) => (this.categoriesList = response));
    },
  },
  mounted() {
    this.getCategories();
  },
};
