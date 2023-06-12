import Image from "../../shared/Image/Image.vue";
export default {
  name: "MainImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  components: {
    Image,
  },
};
