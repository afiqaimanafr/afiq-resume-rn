import { View, Text, StyleSheet } from "react-native";

function Experience() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Information Page!</Text>
    </View>
  );
}

export default Experience;

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { color: "white" },
});
