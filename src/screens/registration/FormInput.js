import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const FormInput = ({ text, setText, placeholder, icon, type, isPassword }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"white"}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        keyboardType={type}
        secureTextEntry={isPassword && !isShowPassword}
        textContentType={"newPassword"}
      />
      {isPassword ? (
        <>
          {isShowPassword ? (
            <Ionicons
              style={{
                position: "absolute",
                right: 10,
                top: "35%",
              }}
              name="eye-off"
              size={24}
              color="white"
              onPress={() => setIsShowPassword(!isShowPassword)}
            />
          ) : (
            <Ionicons
              style={{
                position: "absolute",
                right: 10,
                top: "35%",
              }}
              name="eye"
              size={24}
              color="white"
              onPress={() => setIsShowPassword(!isShowPassword)}
            />
          )}
        </>
      ) : (
        <Ionicons
          style={{
            position: "absolute",
            right: 10,
            top: "35%",
          }}
          name={icon}
          size={24}
          color="white"
        />
      )}
    </View>
  );
};

export default FormInput;
const makeStyles = (fontScale) =>
  StyleSheet.create({
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
