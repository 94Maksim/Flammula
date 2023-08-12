import Button from "../Button/Button.vue";
import Icon from "../Icon/Icon.vue";
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
    Icon,
  },
};
