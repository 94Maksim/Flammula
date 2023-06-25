import Image from "../Image/Image.vue";
export default {
  name: "ProductCard",
  components: {
    Image,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
