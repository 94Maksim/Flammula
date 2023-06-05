import Icon from "../../shared/Icon/Icon.vue";
import Button from "../../shared/Button/Button.vue";
import List from "../../shared/List/List.vue";
export default {
  name: "HeaderDropdown",
  components: {
    Icon,
    Button,
    List,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    hideDropdown(target) {
      if (target === "header__dropdown") {
        this.$emit("hideDropdown");
      }
    },
  },
};
