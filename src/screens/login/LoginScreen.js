import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import StyledText from "../../atoms/StyledText";
import FormInput from "../registration/FormInput";
import StyledButton from "../../atoms/StyledButton";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.formWrapper}>
          <StyledText>Вхід</StyledText>

          <FormInput
            text={phone}
            setText={setPhone}
            placeholder={"Номер телефону"}
            icon={"call"}
            type={"phone-pad"}
          />

          <FormInput
            text={password}
            setText={setPassword}
            placeholder={"Пароль"}
            isPassword={true}
          />

          <StyledButton text={"Увійти"} />
          <TouchableOpacity
            onPress={() => navigation.navigate("RegistrationScreen")}
            style={{ marginTop: 10 }}
          >
            <StyledText style={{ fontSize: 16 }}>Не маете аккаунту?</StyledText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424058",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  formWrapper: {
    backgroundColor: "#00000050",
    elevation: 24,
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
});
