import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function PersonalInformation() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Information Page!</Text>
    </View>
  );
}

export default PersonalInformation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: GlobalStyles.colors.midnightblue },
  text: { color: GlobalStyles.colors.powderblue },
});
