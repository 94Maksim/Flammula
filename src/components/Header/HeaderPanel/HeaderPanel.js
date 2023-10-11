import Icon from "../../shared/Icon/Icon.vue";
import Button from "../../shared/Button/Button.vue";
import API from "../../../api/index.js";
export default {
  name: "HeaderPanel",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Icon,
    Button,
  },
  methods: {
    getTopProducts() {
      this.$emit("getTopProducts");
    },
    showSearch(item) {
      this.$emit("showSearch", item);
      this.getTopProducts();
    },
    routerPush(path) {
      if (path !== "search") {
        this.$router.push(`/${path}`);
      }
    },
  },
};
