import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../theme/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../theme/Colors';
import Font from '../../../theme/Font';

function Section({title, icon, iconType, children}) {
  return (
    <View>
      <View style={styles.card}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <View style={styles.iconWrapper}>
              <Icon
                name={icon}
                type={iconType}
                size={15}
                color={Colors.white}
              />
            </View>
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.helper}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.black,
    ...commonStyle.center,
  },
  card: {
    ...commonStyle.rowSpaceBetween,
    marginVertical: 12,
  },
  title: {
    fontFamily: Font.PoppinsBold,
    fontSize: 13,
    color: Colors.black,
  },
  helper: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.black,
  },
});

export default Section;
