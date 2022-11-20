import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text } from "react-native";

const Tabnav = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>1</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>option</Text>
    </View>
  );
}

const Tab = () =>{
  return (
    <Tabnav.Navigator>
        <Tabnav.Screen name="Home" component={HomeScreen} />
        <Tabnav.Screen name="Settings" component={SettingsScreen} />
    </Tabnav.Navigator>

  )
}

export default Tab;