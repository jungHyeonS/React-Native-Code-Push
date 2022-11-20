import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
import Intro from "../src/Intro";
import Main from "../src/main";



const NativeStack = createNativeStackNavigator();


const Stack = () => {
  return (
      <NativeStack.Navigator screenOptions={{ headerShown: false }}>
          <NativeStack.Screen name="Main" component={Main}/>
          <NativeStack.Screen name="Intro" component={Intro}/>
      </NativeStack.Navigator>
  )
}

export default Stack;