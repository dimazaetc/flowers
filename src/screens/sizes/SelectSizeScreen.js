import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import SelectNavigation from "../SelectNavigation";
import StyledText from "../../atoms/StyledText";
import { useDispatch, useSelector } from "react-redux";
import { addSize } from "../../redux/actions/order";

const SelectSizeScreen = ({ navigation }) => {
  const { fontScale } = useWindowDimensions();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const selectSize = (size) => {
    dispatch(addSize(size));
    navigation.navigate("PeriodicityScreen");
  };
  console.log(order);
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SelectNavigation navigation={navigation} screen={1} />
        <View style={styles.formWrapper}>
          <StyledText style={{ fontSize: 26 / fontScale }}>
            Виберіть розмір букету
          </StyledText>
        </View>
        <ScrollView style={styles.sizesWrapper}>
          <TouchableOpacity onPress={() => selectSize("S")}>
            <View style={styles.sizeWrapper}>
              <Image
                style={{ width: "50%", resizeMode: "contain" }}
                source={require("../../../assets/flowers.png")}
              />
              <View
                style={{
                  width: "40%",
                  margin: 20,
                  justifyContent: "space-between",
                }}
              >
                <StyledText>Набір S</StyledText>
                <StyledText
                  style={{
                    fontSize: 16 / fontScale,
                    textAlign: "left",
                    lineHeight: 16 / fontScale,
                  }}
                >
                  Містить квіти розміром до 50 см
                </StyledText>
                <StyledText
                  style={{
                    fontSize: 14 / fontScale,
                    lineHeight: 16 / fontScale,
                    textAlign: "left",
                  }}
                >
                  (Ціна одного букету - 300грн)
                </StyledText>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectSize("M")}>
            <View style={styles.sizeWrapper}>
              <Image
                style={{ width: "50%", resizeMode: "contain" }}
                source={require("../../../assets/flowers.png")}
              />
              <View
                style={{
                  width: "40%",
                  margin: 20,

                  justifyContent: "space-between",
                }}
              >
                <StyledText>Набір М</StyledText>
                <StyledText
                  style={{
                    fontSize: 16 / fontScale,
                    textAlign: "left",
                    lineHeight: 16 / fontScale,
                  }}
                >
                  Містить квіти розміром приблизно 60 см
                </StyledText>
                <StyledText
                  style={{
                    fontSize: 14 / fontScale,
                    lineHeight: 16 / fontScale,
                    textAlign: "left",
                  }}
                >
                  (Ціна одного букету - 500грн)
                </StyledText>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectSize("L")}>
            <View style={styles.sizeWrapper}>
              <Image
                style={{ width: "50%", resizeMode: "contain" }}
                source={require("../../../assets/flowers.png")}
              />
              <View
                style={{
                  width: "40%",
                  margin: 20,

                  justifyContent: "space-between",
                }}
              >
                <StyledText>Набір L</StyledText>
                <StyledText
                  style={{
                    fontSize: 16 / fontScale,
                    textAlign: "left",
                    lineHeight: 16 / fontScale,
                  }}
                >
                  Містить квіти розміром приблизно 80 см
                </StyledText>
                <StyledText
                  style={{
                    fontSize: 14 / fontScale,
                    lineHeight: 16 / fontScale,
                    textAlign: "left",
                  }}
                >
                  (Ціна одного букету - 700грн)
                </StyledText>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectSize("XL")}>
            <View style={styles.sizeWrapper}>
              <Image
                style={{ width: "50%", resizeMode: "contain" }}
                source={require("../../../assets/flowers.png")}
              />
              <View
                style={{
                  width: "40%",
                  margin: 20,
                  justifyContent: "space-between",
                }}
              >
                <StyledText>Набір XL</StyledText>
                <StyledText
                  style={{
                    fontSize: 16 / fontScale,
                    textAlign: "left",
                    lineHeight: 16 / fontScale,
                  }}
                >
                  Містить квіти розміром приблизно 120 см
                </StyledText>
                <StyledText
                  style={{
                    fontSize: 14 / fontScale,
                    lineHeight: 16 / fontScale,
                    textAlign: "left",
                  }}
                >
                  (Ціна одного букету - 1000грн)
                </StyledText>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SelectSizeScreen;

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
  sizesWrapper: {
    margin: 20,
  },
  sizeWrapper: {
    backgroundColor: "#00000050",
    elevation: 24,
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: 20,
  },
});
