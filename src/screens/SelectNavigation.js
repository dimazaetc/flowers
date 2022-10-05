import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import StyledText from "../atoms/StyledText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";

const SelectNavigation = ({ navigation, screen }) => {
  const [selectedScreen, setSelectedScreen] = useState(1);
  const { width } = useWindowDimensions();
  useEffect(() => {
    setSelectedScreen(screen);
  }, [navigation]);
  return (
    <View style={styles.circleWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate("SelectSizeScreen")}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: selectedScreen === 1 ? "#FF9A73" : "#FF9A7350",
            width: width / 6,
            height: width / 6,
          }}
        >
          <StyledText>1</StyledText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PeriodicityScreen")}
      >
        <View
          style={{
            ...styles.circle,
            backgroundColor: selectedScreen === 2 ? "#FF9A73" : "#FF9A7350",
            width: width / 6,
            height: width / 6,
          }}
        >
          <StyledText>2</StyledText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: selectedScreen === 3 ? "#FF9A73" : "#FF9A7350",
            width: width / 5.5,
            height: width / 5.5,
          }}
        >
          <StyledText>3</StyledText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OrderScreen")}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: selectedScreen === 4 ? "#FF9A73" : "#FF9A7350",
            width: width / 6,
            height: width / 6,
          }}
        >
          <StyledText>4</StyledText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: selectedScreen === 5 ? "#FF9A73" : "#FF9A7350",
            width: width / 6,
            height: width / 6,
          }}
        >
          <Ionicons name="md-person-circle-outline" size={49} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectNavigation;
const styles = StyleSheet.create({
  circleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 50,
  },
  circle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
