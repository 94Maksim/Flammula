export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("changeOption", event.target.value);
    },
  },
};
