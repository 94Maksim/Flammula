import List from "../../shared/List/List.vue";
import MainProducts from "../MainProducts/MainProducts.vue";

export default {
  name: "MainGoods",
  components: {
    List,
    MainProducts,
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
