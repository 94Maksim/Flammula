function getTitles() {
  const titles = [
    {
      title: "Товары",
      name: "catalog",
    },
    {
      title: "Журнал",
      name: "journal",
    },
    {
      title: "Оплата",
      name: "payment",
    },
    {
      title: "О нас",
      name: "about",
    },
  ];
  return titles;
}

function getNames() {
  const names = [
    {
      icon: "search",
      name: "Поиск",
    },
    {
      icon: "favorite",
      name: "Избранное",
      class: "deskop",
    },
    {
      icon: "cart",
      name: "Корзина",
    },
  ];
  return names;
}

export default {
  getTitles,
  getNames,
};
