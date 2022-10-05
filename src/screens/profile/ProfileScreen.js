import {
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import SelectNavigation from "../SelectNavigation";
import StyledText from "../../atoms/StyledText";

const ProfileScreen = ({ navigation }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SelectNavigation navigation={navigation} screen={5} />
        <View style={styles.formWrapper}>
          <StyledText>Ваш профіль</StyledText>
        </View>
        <View style={styles.formWrapper}>
          <StyledText>Ваші підписки</StyledText>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
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
