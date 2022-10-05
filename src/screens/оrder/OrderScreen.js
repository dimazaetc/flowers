import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import SelectNavigation from "../SelectNavigation";
import StyledText from "../../atoms/StyledText";
import StyledButton from "../../atoms/StyledButton";
import FormInput from "../registration/FormInput";
import { useSelector } from "react-redux";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
const items = [
  {
    name: "Міста",
    id: 0,
    children: [
      {
        name: "Запоріжжя",
        id: 10,
      },
      {
        name: "Київ",
        id: 11,
      },
    ],
  },
];
const getMonth = (m) => {
  if (m === 1) {
    return "місяць";
  } else if (m === 2 || m === 3 || m === 4) {
    return "місяці";
  } else {
    return "місяців";
  }
};
const getTimes = (m) => {
  if (m === 1) {
    return "раз";
  } else if (m === 2 || m === 3 || m === 4) {
    return "рази";
  } else {
    return "разів";
  }
};
const getPrice = (s) => {
  if (s === "S") {
    return 300;
  } else if (s === "M") {
    return 500;
  } else if (s === "L") {
    return 700;
  } else if (s === "XL") {
    return 1000;
  }
};

const OrderScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [comment, setComment] = useState("");
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const onSelectedItemsChange = (selectedItem) => {
    setSelectedItems([...selectedItem]);
  };
  const order = useSelector((state) => state.order.order);
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SelectNavigation navigation={navigation} screen={4} />
        <View style={styles.formWrapper}>
          <StyledText>Заповніть данні та перевірте замовлення</StyledText>
        </View>
        <ScrollView>
          <View style={styles.formWrapper}>
            <StyledText>Данні отримувача</StyledText>
            <FormInput
              text={name}
              setText={setName}
              placeholder={"Імʼя Отримувача"}
              icon={"person-circle"}
              type={"default"}
            />
            <FormInput
              text={phone}
              setText={setPhone}
              placeholder={"Номер телефону отримувача"}
              icon={"call"}
              type={"phone-pad"}
            />
            <View style={{ marginTop: 20 }}>
              <SectionedMultiSelect
                items={items}
                IconRenderer={Icon}
                uniqueKey="name"
                subKey="children"
                selectText="Виберіть місто доставки"
                showDropDowns={false}
                selectedText={"Вибрано"}
                searchPlaceholderText={""}
                confirmText={"Підтвердити"}
                readOnlyHeadings={true}
                onSelectedItemsChange={(i) => onSelectedItemsChange(i)}
                selectedItems={selectedItems}
                styles={styles.select}
              />
            </View>
            <FormInput
              text={address}
              setText={setAddress}
              placeholder={"Адресса доставки"}
              icon={"location"}
              type={"default"}
            />
          </View>
          {/*subscription*/}
          <View style={styles.formWrapper}>
            <StyledText style={{ fontSize: 18 / fontScale, textAlign: "left" }}>
              Данні підписки:
            </StyledText>
            <View style={{ marginTop: 7 }}>
              <StyledText
                style={{ fontSize: 16 / fontScale, textAlign: "left" }}
              >
                Тривалість підписки {order.subscription.duration}{" "}
                {getMonth(order.subscription.duration)}
              </StyledText>
            </View>
            <View style={{ marginTop: 7 }}>
              <StyledText
                style={{ fontSize: 16 / fontScale, textAlign: "left" }}
              >
                Букет буде доставлятись {order.subscription.periodicity}{" "}
                {getTimes(order.subscription.periodicity)} на місяць
              </StyledText>
            </View>
          </View>
          {/*// person*/}
          <View style={styles.formWrapper}>
            <StyledText style={{ fontSize: 18 / fontScale, textAlign: "left" }}>
              Данні одержувача:
            </StyledText>
            <View style={{ marginTop: 7 }}>
              <StyledText
                style={{ fontSize: 16 / fontScale, textAlign: "left" }}
              >
                Імʼя одержувача: {name}
              </StyledText>
            </View>
            <View style={{ marginTop: 7 }}>
              <StyledText
                style={{ fontSize: 16 / fontScale, textAlign: "left" }}
              >
                Номер телефона одержувача: {phone}
              </StyledText>
            </View>
            <View style={{ marginTop: 7 }}>
              <StyledText
                style={{ fontSize: 16 / fontScale, textAlign: "left" }}
              >
                Адресса доставки: місто {selectedItems[0]}, {address}
              </StyledText>
            </View>
          </View>

          {/*info*/}
          <View style={styles.formWrapper}>
            <View>
              <StyledText
                style={{ fontSize: 18 / fontScale, textAlign: "left" }}
              >
                Деталі букету:
              </StyledText>
              <View style={{ marginTop: 7 }}>
                <StyledText
                  style={{ fontSize: 16 / fontScale, textAlign: "left" }}
                >
                  Розмір букета: {order.size}
                </StyledText>
              </View>

              <View style={{ marginTop: 7 }}>
                <StyledText
                  style={{ fontSize: 16 / fontScale, textAlign: "left" }}
                >
                  Бажані квіти:{" "}
                  {order.flowers.map((item, index) => (
                    <StyledText
                      key={index}
                      style={{ fontSize: 14 / fontScale }}
                    >
                      {" "}
                      {item},
                    </StyledText>
                  ))}
                </StyledText>
              </View>
              <View style={{ marginTop: 7 }}>
                <StyledText
                  style={{ fontSize: 16 / fontScale, textAlign: "left" }}
                >
                  Бажані кольори :{" "}
                  {order.colors.map((item, index) => (
                    <StyledText
                      key={index}
                      style={{ fontSize: 14 / fontScale }}
                    >
                      {" "}
                      {item},
                    </StyledText>
                  ))}
                </StyledText>
              </View>
              <View style={{ marginTop: 7 }}>
                <StyledText
                  style={{ fontSize: 16 / fontScale, textAlign: "left" }}
                >
                  Бажана обертка:{" "}
                  {order.wrapper.map((item, index) => (
                    <StyledText
                      key={index}
                      style={{ fontSize: 14 / fontScale }}
                    >
                      {" "}
                      {item},
                    </StyledText>
                  ))}
                </StyledText>
              </View>
            </View>
          </View>

          <View style={styles.formWrapper}>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={4}
              onChangeText={(text) => setComment(text)}
              value={comment}
              placeholder={
                "Напишіть коментар, наприклад(Хочу залишитись анонімним)"
              }
              placeholderTextColor={"white"}
            />
          </View>
          <View style={{ margin: 20 }}>
            <StyledButton
              text={`До сплати ${
                getPrice(order.size) *
                order.subscription.duration *
                order.subscription.periodicity
              } грн`}
              onPress={() => navigation.navigate("SettingsScreen")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default OrderScreen;
const makeStyles = (fontScale) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#424058",
    },
    image: {
      flex: 1,
    },
    formWrapper: {
      backgroundColor: "#00000050",
      elevation: 24,
      margin: 20,
      padding: 20,
      borderRadius: 20,
    },
    select: {
      modalWrapper: { padding: 20 },
      container: { borderRadius: 20 },
      button: {
        backgroundColor: "#FF9A73",
        borderRadius: 10,
        padding: 10,
        margin: 10,
      },
      chipContainer: {
        display: "none",
      },
      selectToggle: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        padding: 10,
      },
      selectToggleText: {
        color: "white",
        fontFamily: "Comfortaa-Bold",
      },
    },
    inputWrapper: {
      position: "relative",
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 10,
      padding: 10,
      marginTop: 20,
    },
    input: {
      fontFamily: "Comfortaa-Bold",
      fontWeight: "bold",
      color: "white",
      fontSize: 16 / fontScale,
    },
  });
