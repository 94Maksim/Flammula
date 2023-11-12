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
        username: "",
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
    register() {
      this.dataFields.age = this.calculateAge();
      this.$emit("register", this.dataFields);
    },
    calculateAge() {
      const birthDate = new Date(this.dataFields.birthDate);
      const dateNow = new Date();
      let age = dateNow.getFullYear() - birthDate.getFullYear();
      const birthDateThisYear = new Date(
        dateNow.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
      );
      if (dateNow < birthDateThisYear) {
        age--;
      }
      return age;
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
