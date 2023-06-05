import Icon from "../shared/Icon/Icon.vue";
import Container from "../shared/Container/Container.vue";
import Button from "../shared/Button/Button.vue";
import List from "../shared/List/List.vue";
import HeaderPanel from "./HeaderPanel/HeaderPanel.vue";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown.vue";
import HeaderSearch from "./HeaderSearch/HeaderSearch.vue";
export default {
  name: "Header",
  components: {
    Icon,
    Container,
    Button,
    List,
    HeaderPanel,
    HeaderDropdown,
    HeaderSearch,
  },
  data() {
    return {
      isShowDropdown: false,
      isShowSearch: false,
      titles: ["Товары", "Журнал", "Оплата", "О нас"],
      names: [
        {
          icon: "search",
          name: "Поиск",
        },
        {
          icon: "login",
          name: "Логин",
          class: "deskop",
        },
        {
          icon: "favorite",
          name: "Избранное",
          class: "deskop",
        },
        {
          icon: "basket",
          name: "Корзина",
        },
      ],
    };
  },
  methods: {
    showDropdown() {
      this.isShowDropdown = true;
    },
    hideDropdown() {
      this.isShowDropdown = false;
    },
    showSearch(item) {
      if (item === "search") {
        this.isShowSearch = true;
      }
    },
    hideSearch() {
      this.isShowSearch = false;
    },
  },
};
