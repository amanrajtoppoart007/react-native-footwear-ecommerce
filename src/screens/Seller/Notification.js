import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import commonStyle from '../../theme/Style';

function Notification() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <Text>Notification screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Notification;
