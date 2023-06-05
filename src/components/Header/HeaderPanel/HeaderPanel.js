import Icon from "../../shared/Icon/Icon.vue";
import Button from "../../shared/Button/Button.vue";
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
    showSearch(item) {
      this.$emit("showSearch", item);
    },
  },
};
