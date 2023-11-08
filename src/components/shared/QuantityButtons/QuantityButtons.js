import Button from "../Button/Button.vue";
import Field from "../Field/Field.vue";

export default {
  name: "CartProductFooter",
  components: {
    Button,
    Field,
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
  data() {
    return {
      value: this.quantity,
    };
  },
  methods: {
    plusValue() {
      this.value = this.value + 1;
    },
    minusValue() {
      this.value = this.value - 1;
    },
  },
  watch: {
    value() {
      if (this.value < 1) {
        this.$emit("deleteItem");
      } else if (this.value > this.stock) {
        this.value = this.stock;
      } else this.$emit("updateValue", this.value);
    },
  },
};
