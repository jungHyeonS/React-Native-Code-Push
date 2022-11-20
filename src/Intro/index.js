import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import codePush from "react-native-code-push";
import * as Progress from 'react-native-progress';
const Intro =({update}) => {
  const [value,setValue] = useState();
  const forcedCodepushUpdate = async (update) =>{
    try{
      update.download((progress)=>{
        setValue(progress.receivedBytes / progress.totalBytes);
        console.log("패키지 다운로드중");
      }).then((newPackage)=>{
        newPackage.install().done(()=>{
          console.log('적용 완료');
          codePush.restartApp();
        })
      })
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    forcedCodepushUpdate(update)
  });
  return (
    <View>
      <Text>12121</Text>
      <Progress.Bar progress={value} width={200} />
    </View>
  )
}

export default Intro;