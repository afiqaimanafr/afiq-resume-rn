import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PersonalInformation from "./screens/PersonalInformation";
import Experience from "./screens/Experience";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Tab.Screen name="Experience" component={Experience} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
