import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../theme/Colors';

const Item = props => {
  const {item} = props;
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        imageStyle={{borderRadius: 10}}
        resizeMode={'cover'}
        source={item?.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('25%'),
    height: 80,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: Colors.transparent,
  },
  image: {
    width: wp('25%'),
    height: 80,
  },
});

export default Item;
