import Field from "../../shared/Field/Field.vue";
import Button from "../../shared/Button/Button.vue";
import Radio from "../../shared/Radio/Radio.vue";
import { validator } from "../../../utils/validator.js";
import { validatorConfig } from "../../../utils/validatorConfig.js";

export default {
  name: "RegisterForm",
  components: {
    Field,
    Button,
    Radio,
  },
  data() {
    return {
      dataFields: {
        firstName: "",
        lastName: "",
        birthDate: "",
        gender: "",
        email: "",
        password: "",
      },
      errorsFields: null,
      isDisabled: true,
    };
  },
  methods: {
    showLoginForm() {
      this.$emit("showLoginForm", false);
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
