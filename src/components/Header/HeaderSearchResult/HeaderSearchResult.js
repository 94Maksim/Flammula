import SearchCard from "@/components/shared/SearchCard/SearchCard.vue";
import Loader from "@/components/shared/Loader/Loader.vue";

export default {
  name: "HeaderSearchResult",
  components: {
    SearchCard,
    Loader,
  },
  props: {
    products: {
      type: [Array, null],
      required: true,
    },
    searchQuery: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isAnimated: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isAnimated = true;
    }, 80);
  },
};
