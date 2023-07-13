import List from "../../shared/List/List.vue";
import MainProducts from "../MainProducts/MainProducts.vue";
import Container from "../../shared/Container/Container.vue";

export default {
  name: "MainGoods",
  components: {
    List,
    MainProducts,
    Container,
  },
  props: {
    category: {
      type: Array,
      required: true,
    },
    dataGoods: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      categoryName: "newArrivals",
    };
  },
  methods: {
    onClick(name) {
      this.categoryName = name;
      this.$emit("addClass", this.categoryName);
    },
  },
  watch: {
    categoryName() {
      this.$emit("getDataGoods", this.categoryName);
    },
  },
};
