import Button from "../../shared/Button/Button.vue";
import Field from "../../shared/Field/Field.vue";
import QuantityButtons from "../../shared/QuantityButtons/QuantityButtons.vue";

export default {
  name: "ProductInCart",
  components: {
    Button,
    Field,
    QuantityButtons,
  },
  props: {
    quantity: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("updateValue", value);
    },
  },
};
