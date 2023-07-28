import React, { FC } from 'react';
import {
  View,
  Text 
} from 'react-native';

import { TYSdk } from 'tuya-panel-kit';
import { getOperationRecord, testApi } from 'api';
import { commonApi } from '@tuya/tuya-panel-api';


const FeedRecord: FC = () => {

  // 喂食记录
  // const getecordList = getOperationRecord();
  // let testList = JSON.stringify( testApi());
  let testList = "123";
  const getData = () => {
    TYSdk.device.getDeviceInfo()
      .then((data) => {
        console.log('data :>> ', data);
        testList = JSON.stringify(data);
      })
      .catch(error => {
        console.log('error :>> ', error);
        testList = JSON.stringify(error);
      });
  } 
  getData();
  return (
    <View style={{ flex: 1 }}>
      
      <Text>
        { testList }
      </Text>
    </View>
  );
};

export default FeedRecord;
