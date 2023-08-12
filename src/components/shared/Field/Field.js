export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
