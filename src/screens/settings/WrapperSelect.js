import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View } from "react-native";
const items = [
  {
    name: "Колір пакувального папіру",
    id: 0,
    children: [
      {
        name: "Прозорий",
        id: 10,
      },
      {
        name: "Крафтовий",
        id: 11,
      },
      {
        name: "Без обертки",
        id: 12,
      },
    ],
  },
  {
    name: "Колір Стрічки",
    id: 2,
    children: [
      {
        name: "Білий",
        id: 1,
      },
      {
        name: "Жовтий",
        id: 2,
      },
      {
        name: "Помаранчевий",
        id: 3,
      },
      {
        name: "Червоний",
        id: 4,
      },
      {
        name: "Рожевий",
        id: 5,
      },
      {
        name: "Фіолетовий",
        id: 6,
      },
      {
        name: "Синій",
        id: 7,
      },
      {
        name: "Зелений",
        id: 8,
      },
      {
        name: "Чорний",
        id: 9,
      },
    ],
  },
];

const WrapperSelect = ({ selectedItems, setSelectedItems, styles }) => {
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
        selectText="Виберіть як пакувати"
        showDropDowns={false}
        selectedText={" Вибрано"}
        searchPlaceholderText={""}
        confirmText={"Підтвердити"}
        readOnlyHeadings={true}
        onSelectedItemsChange={(i) => onSelectedItemsChange(i)}
        selectedItems={selectedItems}
        styles={styles.select}
      />
    </View>
  );
};

export default WrapperSelect;
