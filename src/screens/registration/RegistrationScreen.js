import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import StyledText from "../../atoms/StyledText";
import FormInput from "./FormInput";
import { useEffect, useState } from "react";
import StyledButton from "../../atoms/StyledButton";
import { usePasswordValidation } from "./usePasswordValidation";

const RegistrationScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const { validLength, upperCase, lowerCase, match, specialChar } =
    usePasswordValidation({
      firstPassword: password,
      secondPassword: secondPassword,
      requiredLength: 8,
    });
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("../../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.formWrapper}>
          <StyledText>Реєстрація</StyledText>
          <FormInput
            text={name}
            setText={setName}
            placeholder={"Ваше імʼя"}
            icon={"person-circle"}
            type={"default"}
          />
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
          {password && !validLength && (
            <StyledText style={{ fontSize: 14, color: "red", marginTop: 5 }}>
              Короткий пароль
            </StyledText>
          )}
          {password && !upperCase && (
            <StyledText style={{ fontSize: 14, color: "red", marginTop: 5 }}>
              Має містити символ верхнього регістру
            </StyledText>
          )}
          {password && !lowerCase && (
            <StyledText style={{ fontSize: 14, color: "red", marginTop: 5 }}>
              Має містити символ нижнього регістру
            </StyledText>
          )}
          {password && !specialChar && (
            <StyledText style={{ fontSize: 14, color: "red", marginTop: 5 }}>
              Має містити один зі спеціальнихсимволів
            </StyledText>
          )}

          <FormInput
            text={secondPassword}
            setText={setSecondPassword}
            placeholder={"Підтвердіть пароль"}
            isPassword={true}
          />
          {secondPassword && !match && (
            <StyledText style={{ fontSize: 14, color: "red", marginTop: 5 }}>
              Паролі не співпадають
            </StyledText>
          )}
          <StyledButton text={"Зареєструватися"} />
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ marginTop: 10 }}
          >
            <StyledText style={{ fontSize: 16 }}>Вхід</StyledText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
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
