import Image from "../../shared/Image/Image.vue";

export default {
  name: "CategoryCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  components: {
    Image,
  },
};
