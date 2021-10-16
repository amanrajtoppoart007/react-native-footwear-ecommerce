import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../theme/Colors';

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
});

export default Settings;
