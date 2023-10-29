import API from "../../api/index.js";
import Container from "../../components/shared/Container/Container.vue";
import UserProfile from "../../components/Profile/UserProfile.vue";
import Loader from "../../components/shared/Loader/Loader.vue";

export default {
  name: "ProfilePage",
  components: {
    Container,
    UserProfile,
    Loader,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("authModule/logout");
      this.$router.push("/");
    },
  },
  mounted() {
    API.users
      .getUserById(this.$store.state.authModule.user.id)
      .then((user) => (this.user = user));
  },
};
