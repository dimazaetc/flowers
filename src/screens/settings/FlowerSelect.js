import { View } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
const items = [
  {
    name: "Зимні квіти",
    id: 0,
    children: [
      {
        name: "Хризантеми",
        id: 1,
      },
      {
        name: "Орхідеї",
        id: 2,
      },
      {
        name: "Голландська троянда",
        id: 3,
      },
      {
        name: "Іриси",
        id: 4,
      },
      {
        name: "Гортензії",
        id: 5,
      },
      {
        name: "Лілії",
        id: 6,
      },
    ],
  },
  {
    name: "Осінні Квіти",
    id: 1,
    children: [
      {
        name: "Гортензії",
        id: 7,
      },
      {
        name: "Жоржини",
        id: 8,
      },
      {
        name: "Гладіолуси",
        id: 9,
      },
      {
        name: "Айстри",
        id: 10,
      },
      {
        name: "Хризантемы",
        id: 11,
      },
    ],
  },
  {
    name: "Літні Квіти",
    id: 2,
    children: [
      {
        name: "Ромашки",
        id: 12,
      },
      {
        name: "Васильки",
        id: 13,
      },
      {
        name: "Ранункулюси",
        id: 14,
      },
      {
        name: "Гербери",
        id: 15,
      },
      {
        name: "Еустоми",
        id: 16,
      },
      {
        name: "Айстри",
        id: 17,
      },
      {
        name: "Гортензії",
        id: 18,
      },
    ],
  },
  {
    name: "Весінні квіти",
    id: 3,
    children: [
      {
        name: "Тюльпани",
        id: 19,
      },
      {
        name: "Троянди",
        id: 20,
      },
      {
        name: "Нарциси",
        id: 21,
      },
      {
        name: "Гербери",
        id: 22,
      },
      {
        name: "Орхідеї",
        id: 23,
      },
      {
        name: "Піоноподібні троянди",
        id: 24,
      },
    ],
  },
];

const FlowerSelect = ({ selectedItems, setSelectedItems, styles }) => {
  const onSelectedItemsChange = (selectedItem) => {
    setSelectedItems([...selectedItem]);
  };

  return (
    <View style={{ margin: 20 }}>
      <SectionedMultiSelect
        items={items}
        IconRenderer={Icon}
        uniqueKey="name"
        subKey="children"
        selectText="Виберіть кращі квіти"
        showDropDowns={true}
        selectedText={" Вибрано"}
        searchPlaceholderText={"Пошук квітів..."}
        confirmText={"Підтвердити"}
        readOnlyHeadings={true}
        onSelectedItemsChange={(i) => onSelectedItemsChange(i)}
        selectedItems={selectedItems}
        styles={styles.select}
      />
    </View>
  );
};

export default FlowerSelect;
