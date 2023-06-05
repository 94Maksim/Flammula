import Field from "../../shared/Field/Field.vue";
import Button from "../../shared/Button/Button.vue";
import Icon from "../../shared/Icon/Icon.vue";
export default {
  name: "HeaderSearch",
  components: {
    Field,
    Button,
    Icon,
  },
  methods: {
    hideSearch(item) {
      if (item === "header__search") {
        this.$emit("hideSearch");
      }
    },
  },
};
