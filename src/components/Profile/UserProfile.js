import Button from "../../components/shared/Button/Button.vue";

export default {
  name: "UserProfile",
  components: {
    Button,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
