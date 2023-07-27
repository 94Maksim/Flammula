import Image from "../../shared/Image/Image.vue";
import Button from "../../shared/Button/Button.vue";
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    Image,
    Button,
  },
};
