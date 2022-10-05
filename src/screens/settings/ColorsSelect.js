import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import StyledText from "../../atoms/StyledText";
import { useState } from "react";
import ColorsInfoScreen from "./ColorsInfoScreen/ColorsInfoScreen";
const items = [
  {
    name: "Кольори",
    id: 0,
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
      {
        name: "Двобарвні букети",
        id: 10,
      },
    ],
  },
];

const ColorsSelect = ({ selectedItems, setSelectedItems, styles }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onSelectedItemsChange = (selectedItem) => {
    setSelectedItems([...selectedItem]);
  };
  const { fontScale } = useWindowDimensions();

  return (
    <View style={{ margin: 20 }}>
      <SectionedMultiSelect
        items={items}
        IconRenderer={Icon}
        uniqueKey="name"
        subKey="children"
        selectText="Виберіть бажані кольори"
        showDropDowns={false}
        selectedText={" Вибрано"}
        searchPlaceholderText={"Пошук кольорів..."}
        confirmText={"Підтвердити"}
        readOnlyHeadings={true}
        onSelectedItemsChange={(i) => onSelectedItemsChange(i)}
        selectedItems={selectedItems}
        styles={styles.select}
      />
      <ColorsInfoScreen
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <StyledText style={{ fontSize: 14 / fontScale }}>
          Які кольори що означають?
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

export default ColorsSelect;
