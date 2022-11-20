import React from "react";
import { Button, Text, View } from "react-native";


import codePush from "react-native-code-push";
const Optional = ({update}) => {




  const optionalCode = async()=>{
    try{
      update.download((progress)=>{
        console.log("다운로드중");
      }).then((newPackage)=>{
        newPackage.install().done(()=>{
          codePush.allowRestart();
        })
      });
    }catch(error){
      console.log(error);
    }
  }

  const appRestart = async () => {
    codePush.restartApp();
  }


  return (
    <View>
      <Text>abc12121222142</Text>
      <Button title='최신 버전 다운로드' onPress={optionalCode}/>
      <Button title='앱 재실행' onPress={appRestart}/>
    </View>
  )
}

export default Optional