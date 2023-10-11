import Field from "../../shared/Field/Field.vue";
import Button from "../../shared/Button/Button.vue";
import { validator } from "../../../utils/validator.js";
import { validatorConfig } from "../../../utils/validatorConfig.js";

export default {
  name: "LoginForm",
  components: {
    Field,
    Button,
  },
  data() {
    return {
      dataFields: {
        email: "",
        passwordLogIn: "",
      },
      errorsFields: {},
      isDisabled: true,
    };
  },
  methods: {
    showRegisterForm() {
      this.$emit("showRegisterForm", true);
    },
  },
  watch: {
    dataFields: {
      handler() {
        this.errorsFields = validator(this.dataFields, validatorConfig);
        if (!Object.keys(this.errorsFields).length) {
          this.isDisabled = false;
        } else this.isDisabled = true;
      },
      deep: true,
    },
  },
};
