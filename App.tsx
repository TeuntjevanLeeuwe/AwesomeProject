import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import HomeScreen from "./src/pages/HomePage";
import SettingsScreen from "./src/pages/SettingsPage";
import LoginScreen from "./src/pages/LoginPage";
import Login from "./src/pages/LoginPage";
import { StyleSheet } from "react-native";

function App(): React.JSX.Element{
  const Tab = createBottomTabNavigator();

  return(
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home Screen" component={HomeScreen} />
          <Tab.Screen name="Setting Screen" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
