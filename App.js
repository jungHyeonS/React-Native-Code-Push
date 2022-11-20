import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import codePush from "react-native-code-push";
import Stack from './navigation/stack';
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
import SplashScreen from 'react-native-splash-screen';

import AppLoading from 'expo-app-loading';
import Intro from './src/Intro';
import Optional from './src/optional';

function App() {
  const [isReady,setIsReady] = useState(false);
  const [isUpdate,setIsUpdate] = useState("");
  const [data,setData] = useState();
  useEffect(()=>{
    SplashScreen.hide();
  },[])

  const getCodepushState = (update) => {
    if (!update) return 'UPTODATE';
    if (update.isMandatory) return 'FORCED';
    return 'OPTIONAL';
  }  

  const appUpdate = async()=>{
    try{
      const update = await codePush.checkForUpdate();
      const codePushState = await getCodepushState(update);
      setIsUpdate(codePushState)
      setData(update);
      return true;
    }catch(err){
      console.log(err);
    }
  }

  if(!isReady){
    return (
      <AppLoading
        startAsync={appUpdate}
        onFinish={() => setIsReady(true)}
        onError={console.log}
      />
    )
  }

  return (
    isUpdate == 'UPTODATE' ? (
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    ) : isUpdate == 'FORCED' ? (
      <Intro update={data}/>
    ) : (
      <Optional update={data}/>
    )
  );
}



export default codePush(codePushOptions)(App)
