import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import PersonalInformation from "./screens/PersonalInformation";
import Experience from "./screens/Experience";
import Education from "./screens/Education";

const isAndroid = Platform.OS === "android";
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.screen}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Personal Information"
              component={PersonalInformation}
            />
            <Tab.Screen name="Experience" component={Experience} />
            <Tab.Screen name="Education" component={Education} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, marginTop: isAndroid ? 20 : 0 },
});
