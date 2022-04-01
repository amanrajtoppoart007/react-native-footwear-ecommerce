import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../../theme/Style';
function SimpleNavBar({pageTitle}) {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        animated={true}
        translucent={false}
        barStyle={Colors.black}
        backgroundColor={Colors.white}
        StatusBarStyle={'default'}
      />
      <View style={styles.card}>
        <View>
          <View style={commonStyle.rowFlexStart}>
            <View style={styles.iconSection}>
              <Icon
                onPress={() => navigation.goBack()}
                name={'chevron-left'}
                type={'material-community-icon'}
                size={30}
                color={Colors.black}
              />
            </View>

            <View style={[commonStyle.width('90%'), commonStyle.center]}>
              <Text style={styles.title}>{pageTitle}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('100%'),
    height: 45,
    backgroundColor: Colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c8c7c7',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  iconSection: {
    width: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleSection: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignLeft: {
    alignSelf: 'flex-start',
  },
  title: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 18,
    color: Colors.black,
    marginLeft: -60,
  },
});

export default SimpleNavBar;
