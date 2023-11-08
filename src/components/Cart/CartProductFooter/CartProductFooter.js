import QuantityButtons from "../../shared/QuantityButtons/QuantityButtons.vue";
import Button from "../../shared/Button/Button.vue";

export default {
  name: "CartProductFooter",
  components: {
    QuantityButtons,
    Button,
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
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateValue(quantity) {
      this.$emit("updateValue", quantity, this.id);
    },
  },
};
