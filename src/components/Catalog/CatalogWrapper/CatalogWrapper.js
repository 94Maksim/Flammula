import CategoryCard from "../CategoryCard/CategoryCard.vue";
export default {
  name: "CatalogWrapper",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  components: {
    CategoryCard,
  },
};
