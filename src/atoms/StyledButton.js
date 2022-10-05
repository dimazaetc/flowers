import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import StyledText from "./StyledText";

const StyledButton = ({ text, onPress }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <StyledText style={{ fontSize: 16 }}>{text}</StyledText>
    </TouchableOpacity>
  );
};

export default StyledButton;
const makeStyles = (fontScale) =>
  StyleSheet.create({
    button: {
      backgroundColor: "#FF9A73",
      borderRadius: 10,
      padding: 10,
      marginTop: 30,
    },
  });
