import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const Item = props => {
  const {item} = props;
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        resizeMode={'contain'}
        source={item?.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('20%'),
    height: 100,
    borderRadius: 8,
  },
  image: {
    width: wp('20%'),
    height: 100,
    borderRadius: 8,
  },
});

export default Item;
