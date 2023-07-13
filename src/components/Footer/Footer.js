import List from "../shared/List/List.vue";
import Icon from "../shared/Icon/Icon.vue";
import Button from "../shared/Button/Button.vue";
export default {
  name: "Footer",
  components: {
    List,
    Icon,
    Button,
  },
  data() {
    return {
      textItems: {
        titles: [
          {
            name: "/catalog",
            title: "Товары",
          },
          {
            name: "/journal",
            title: "Журнал",
          },
          {
            name: "/payment",
            title: "Оплата",
          },
          {
            name: "/about",
            title: "О нас",
          },
        ],
        menu: [
          {
            name: "/login",
            title: "Личный кабинет",
          },
          {
            name: "/favorite",
            title: "Избранное",
          },
          {
            name: "/basket",
            title: "Корзина",
          },
        ],
        copyright: "© Company Name 2023",
        copyrightText:
          "Все изображения и контент не могут быть использованы без разрешения",
      },
      iconName: ["telegram", "vk", "instagram"],
    };
  },
  methods: {
    routeToPage(page) {
      this.$router.push(page);
    },
  },
};
