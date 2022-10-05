import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import SelectNavigation from "../SelectNavigation";
import StyledText from "../../atoms/StyledText";
import FlowerSelect from "./FlowerSelect";
import ColorsSelect from "./ColorsSelect";
import WrapperSelect from "./WrapperSelect";
import StyledButton from "../../atoms/StyledButton";
import { useDispatch } from "react-redux";
import { addSettings } from "../../redux/actions/order";

const SettingsScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedWrappers, setSelectedWrappers] = useState([]);

  const dispatch = useDispatch();
  const addSet = () => {
    const obj = {
      flowers: selectedItems,
      colors: selectedColors,
      wrapper: selectedWrappers,
    };
    dispatch(addSettings(obj));
    navigation.navigate("OrderScreen");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SelectNavigation navigation={navigation} screen={3} />
        <View style={styles.formWrapper}>
          <StyledText>
            Виберіть як часто ваші квіти будуть до вас доставлятись Та на який
            термін ви обираете підписку
          </StyledText>
        </View>
        <ScrollView>
          <FlowerSelect
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            styles={styles}
          />
          <ColorsSelect
            selectedItems={selectedColors}
            setSelectedItems={setSelectedColors}
            styles={styles}
          />
          <WrapperSelect
            selectedItems={selectedWrappers}
            setSelectedItems={setSelectedWrappers}
            styles={styles}
          />
          <View style={{ margin: 20 }}>
            <StyledButton text={"Продовжити"} onPress={addSet} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
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
    padding: 15,
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
      backgroundColor: "#00000050",
      borderWidth: 1,
      borderColor: "white",
    },
    chipText: {
      color: "white",
      fontFamily: "Comfortaa-Bold",
    },
    chipIcon: {
      color: "white",
    },
    selectToggle: {
      backgroundColor: "#00000050",
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
});
