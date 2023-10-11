export default {
  name: "Radio",
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
  },
  methods: {
    updateInput(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
