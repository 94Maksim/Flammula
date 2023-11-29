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
    focus: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      if (this.type === "number") {
        if (event.target.value !== "") {
          this.$emit("update:modelValue", event.target.value);
        }
      } else this.$emit("update:modelValue", event.target.value);
    },
  },
  mounted() {
    if (this.focus) {
      this.$refs.inputField.focus();
    }
  },
};
