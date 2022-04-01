import React from 'react';
import {StyleSheet, View} from 'react-native';

function Section({children}) {
  return <View style={styles.section}>{children}</View>;
}

const styles = StyleSheet.create({
  section: {
    marginTop: 15,
    marginBottom: 8,
  },
});

export default Section;
