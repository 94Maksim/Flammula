export default {
  name: "List",
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
  methods: {
    onClick(name) {
      this.$emit("onClick", name);
    },
  },
};
