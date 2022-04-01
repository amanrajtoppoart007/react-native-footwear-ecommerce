import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../../theme/Colors';
import commonStyle from '../../../theme/Style';
import {Icon} from 'react-native-elements';
import Font from '../../../theme/Font';

function Section({item}) {
  const {type = '', title = '', isSelected = false, routes = []} = item;

  return (
    <View>
      <View style={commonStyle.marginVertical(12)}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            {type === 'pick-up' ? (
              <View style={commonStyle.outlineCircle(25, 1, Colors.secondary)}>
                <Icon
                  name={'circle'}
                  type={'font-awesome'}
                  size={12}
                  color={Colors.secondary}
                />
              </View>
            ) : (
              <View style={commonStyle.circle(25, Colors.black)}>
                <Icon
                  name={'map-marker-alt'}
                  type={'font-awesome-5'}
                  size={12}
                  color={Colors.white}
                />
              </View>
            )}
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.mapSection}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
      <View>
        {item &&
          routes &&
          routes.map((route, index) => {
            const {
              index: routeIndex = 0,
              title: routeTitle = '',
              address = '',
              distance = '',
            } = route;
            return (
              <View key={index} style={commonStyle.marginVertical(12)}>
                <View style={styles.card}>
                  <View style={commonStyle.width('80%')}>
                    <View>
                      <Text style={styles.cardTitle}>{routeTitle}</Text>
                    </View>
                    <View style={commonStyle.rowFlexStart}>
                      <View style={commonStyle.width('30%')}>
                        <Text style={styles.dataTitle}>Address</Text>
                      </View>
                      <View style={commonStyle.width('70%')}>
                        <Text style={styles.dataText}>{address}</Text>
                      </View>
                    </View>
                    <View style={commonStyle.rowFlexStart}>
                      <View style={commonStyle.width('30%')}>
                        <Text style={styles.dataTitle}>Distance</Text>
                      </View>
                      <View style={commonStyle.width('70%')}>
                        <Text style={styles.dataText}>{distance}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[commonStyle.center, commonStyle.width('20%')]}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Select</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: Font.PoppinsBold,
    fontSize: 14,
    color: Colors.black,
  },
  mapSection: {
    height: hp('20%'),
    backgroundColor: Colors.green,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: hp('10%'),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    borderRadius: 6,
    padding: 8,
  },
  cardTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.grayText,
  },
  dataTitle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.grayText,
  },
  dataText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.grayText,
  },
  button: {
    width: 65,
    height: 30,
    backgroundColor: Colors.secondary,
    borderRadius: 4,
    padding: 4,
    ...commonStyle.center,
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
});

export default Section;
