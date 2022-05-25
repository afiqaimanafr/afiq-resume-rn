import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PersonalInformation from "./screens/PersonalInformation";
import Experience from "./screens/Experience";
import Education from "./screens/Education";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Tab.Navigator>
            <Tab.Screen
              name="Personal Information"
              component={PersonalInformation}
            />
            <Tab.Screen name="Experience" component={Experience} />
            <Tab.Screen name="Education" component={Education} />
          </Tab.Navigator>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
