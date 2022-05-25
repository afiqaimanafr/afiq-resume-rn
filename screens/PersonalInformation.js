import { View, Text, StyleSheet } from "react-native";

function PersonalInformation() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Information Page!</Text>
    </View>
  );
}

export default PersonalInformation;

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { color: "white" },
});
