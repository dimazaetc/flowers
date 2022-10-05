import { StyleSheet, Text, useWindowDimensions } from "react-native";

const StyledText = (props) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <Text
      style={{
        ...styles.bgText,
        ...props?.style,
      }}
    >
      {props.children}
    </Text>
  );
};

export default StyledText;
const makeStyles = (fontScale) =>
  StyleSheet.create({
    bgText: {
      textAlign: "center",
      fontFamily: "Comfortaa-Bold",
      fontWeight: "bold",
      color: "white",
      fontSize: 22 / fontScale,
    },
  });
