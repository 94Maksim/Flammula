import Field from "../../shared/Field/Field.vue";
import Button from "../../shared/Button/Button.vue";
import Loader from "../../shared/Loader/Loader.vue";
import { validator } from "../../../utils/validator.js";
import { validatorConfig } from "../../../utils/validatorConfig.js";

export default {
  name: "LoginForm",
  components: {
    Field,
    Button,
    Loader,
  },
  data() {
    return {
      dataFields: {
        login: "",
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
    getAuth() {
      this.$store.dispatch("authModule/getAuth", this.dataFields);
    },
  },
  watch: {
    dataFields: {
      handler() {
        this.$store.dispatch("authModule/deleteError");
        this.errorsFields = validator(this.dataFields, validatorConfig);
        if (!Object.keys(this.errorsFields).length) {
          this.isDisabled = false;
        } else this.isDisabled = true;
      },
      deep: true,
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.authModule.isLoading;
    },
    error() {
      return this.$store.state.authModule.error;
    },
  },
};
