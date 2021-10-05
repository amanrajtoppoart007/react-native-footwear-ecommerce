import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../theme/Colors';
import SellerSlider from '../components/Home/SellerSlider';
import ProductSlider from '../components/Home/ProductSlider';
import VideoSlider from '../components/Home/VideoSlider';
import OfferSlider from '../components/Home/OfferSlider';

import Font from '../theme/Font';
function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View style={{marginVertical: 20, marginBottom: 10}}>
              <View style={styles.introBanner}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <View style={{marginVertical: 5}}>
                      <Text
                        style={{
                          fontFamily: Font.RobotoRegular,
                          color: Colors.textColor,
                          fontSize: 20,
                        }}>
                        Casual Shoe
                      </Text>
                    </View>
                    <View style={{marginVertical: 3}}>
                      <Text
                        style={{
                          fontFamily: Font.RobotoRegular,
                          color: Colors.white,
                          fontSize: 22,
                        }}>
                        Adidas Shoes
                      </Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <TouchableOpacity
                        style={{
                          width: 120,
                          height: 35,
                          backgroundColor: Colors.textColor,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 8,
                        }}>
                        <Text
                          style={{
                            fontFamily: Font.RobotoBold,
                            color: Colors.black,
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          Get an E-Locker
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <View>
                      <Text
                        style={{
                          fontFamily: Font.RobotoRegular,
                          color: Colors.white,
                          fontSize: 22,
                        }}>
                        Upto
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: Font.RobotoBold,
                          color: Colors.white,
                          fontSize: 28,
                          fontWeight: 'bold',
                        }}>
                        70%
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: Font.RobotoRegular,
                          color: Colors.white,
                          fontSize: 22,
                        }}>
                        off
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image source={require('../assets/icons/category.png')} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginVertical: 20, marginTop: 10}}>
              <OfferSlider />
            </View>
            <View>
              <SellerSlider />
            </View>
            <View>
              <ProductSlider />
            </View>
            <View>
              <VideoSlider />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.adsBanner}>
                <Text>ads Page</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    justifyContent: 'center',
  },
  introBanner: {
    width: wp('95%'),
    height: hp('20%'),
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
  },
  offerBanner: {
    width: wp('95%'),
    height: hp('25%'),
    backgroundColor: Colors.peru,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  adsBanner: {
    width: wp('90%'),
    height: hp('15%'),
    backgroundColor: Colors.peru,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default Home;
