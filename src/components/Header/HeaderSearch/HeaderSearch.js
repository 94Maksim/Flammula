import Field from "../../shared/Field/Field.vue";
import Button from "../../shared/Button/Button.vue";
import Icon from "../../shared/Icon/Icon.vue";
import SearchCard from "../../shared/SearchCard/SearchCard.vue";
import Loader from "../../shared/Loader/Loader.vue"
export default {
  name: "HeaderSearch",
  components: {
    Field,
    Button,
    Icon,
    SearchCard,
	Loader
  },
  props: {
    products: {
      type: [Array, null],
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    hideSearch(item) {
      if (item === "header__search") {
        this.$emit("hideSearch");
      }
    },
  },
  watch: {
    searchQuery() {
      this.$emit("getQueryProducts", this.searchQuery);
    },
  },
};
