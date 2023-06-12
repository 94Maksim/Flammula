import List from "../../shared/List/List.vue";

export default {
  name: "MainGoods",
  components: {
    List,
  },
  props: {
    category: {
      type: Array,
      required: true,
    },
  },
};
