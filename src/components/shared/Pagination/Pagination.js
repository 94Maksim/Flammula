import Button from "../Button/Button.vue";
export default {
  name: "Pagination",
  components: {
    Button,
  },
  props: {
    totalPages: {
      type: Number,
      require: true,
    },
    page: {
      type: Number,
      require: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("changePage", pageNumber);
    },
  },
};
