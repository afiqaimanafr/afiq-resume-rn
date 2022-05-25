import { StyleSheet, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import PersonalInformation from "./screens/PersonalInformation";
import Experience from "./screens/Experience";
import Education from "./screens/Education";
import { GlobalStyles } from "./constants/styles";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <SafeAreaProvider style={styles.screen}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: { backgroundColor: GlobalStyles.colors.navy },
              tabBarLabelStyle: { color: GlobalStyles.colors.lightBlue },
            }}
          >
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
  screen: { flex: 1, marginTop: StatusBar.currentHeight },
});
