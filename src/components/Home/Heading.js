import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../theme/Font';
import Colors from '../../theme/Colors';
import {Icon} from 'react-native-elements';

function Heading({image, title, onPress}) {
  return (
    <View style={styles.headingSection}>
      <View style={styles.titleSection}>
        <View style={{marginHorizontal: 3}}>
          <Image style={{width: 28, height: 28}} source={image} />
        </View>
        <View style={{marginHorizontal: 3}}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.moreButton}>
        <Text style={styles.moreButtonText}>See All</Text>
        <Icon
          type={'feather'}
          name={'chevron-right'}
          style={styles.moreButtonText}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headingSection: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 15,
    color: Colors.black,
  },
  moreButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreButtonText: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 10,
    color: '#1A1919',
  },
});

export default Heading;
