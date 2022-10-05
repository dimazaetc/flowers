import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import SelectNavigation from "../SelectNavigation";
import StyledText from "../../atoms/StyledText";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import StyledButton from "../../atoms/StyledButton";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../redux/actions/order";

const PeriodicityScreen = ({ navigation }) => {
  const [times, setTimes] = useState(1);
  const [subscription, setSubscription] = useState(1);
  const { fontScale } = useWindowDimensions();

  const dispatch = useDispatch();
  const addSubscr = () => {
    const obj = {
      periodicity: times,
      duration: subscription,
    };
    dispatch(addSubscription(obj));
    navigation.navigate("SettingsScreen");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SelectNavigation navigation={navigation} screen={2} />
        <View style={styles.formWrapper}>
          <StyledText style={{ fontSize: 22 / fontScale }}>
            Виберіть як часто ваші квіти будуть до вас доставлятись Та на який
            термін ви обираете підписку
          </StyledText>
        </View>
        <ScrollView style={{ margin: 20 }}>
          <View>
            <StyledText style={{ textAlign: "left" }}>
              Періодичніть: {times}
            </StyledText>
            <StyledText style={{ fontSize: 16 / fontScale, textAlign: "left" }}>
              Наприклад(3 рази на місяць)
            </StyledText>
            <View style={styles.rangeWrapper}>
              <View style={styles.languageWrapper}>
                <StyledText>1</StyledText>
                <StyledText>2</StyledText>
                <StyledText>4</StyledText>
                <StyledText>6</StyledText>
                <StyledText>8</StyledText>
                <StyledText>10</StyledText>
                <StyledText>12</StyledText>
              </View>
              <Slider
                style={{ width: "100%", height: 60 }}
                minimumValue={1}
                maximumValue={12}
                // thumbImage={require("../../../../../assets/clock.png")}
                step={1}
                onSlidingComplete={(value) => {
                  setTimes(value);
                }}
              />
            </View>
          </View>
          <View>
            <StyledText style={{ textAlign: "left" }}>
              Тривалість підписки : {subscription}{" "}
              {subscription === 1 ? "місяць" : "місяців"}
            </StyledText>

            <View style={styles.rangeWrapper}>
              <View style={styles.languageWrapper}>
                <StyledText>1</StyledText>
                <StyledText>3</StyledText>
                <StyledText>6</StyledText>
                <StyledText>9</StyledText>
                <StyledText>12</StyledText>
              </View>
              <Slider
                style={{ width: "100%", height: 60 }}
                minimumValue={1}
                maximumValue={12}
                // thumbImage={require("../../../../../assets/clock.png")}
                step={1}
                onSlidingComplete={(value) => {
                  setSubscription(value);
                }}
              />
            </View>
          </View>
          <StyledButton text={"Продовжити"} onPress={addSubscr} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PeriodicityScreen;

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
  languageWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  rangeWrapper: {
    marginVertical: 10,
  },
});
