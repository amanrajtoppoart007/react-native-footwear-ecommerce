import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Colors from '../../theme/Colors';
import SellerSlider from '../../components/User/Home/SellerSlider';
import ProductSlider from '../../components/User/Home/ProductSlider';
import VideoSlider from '../../components/User/Home/VideoSlider';
import OfferSlider from '../../components/User/Home/OfferSlider';
import CouponCard from '../../components/User/Home/CouponCard';
import BrandSlider from '../../components/User/Home/BrandSlider';
import TopSellerSlider from '../../components/User/Home/TopSellerSlider';
import AdBanner from '../../components/User/Home/AdBanner';
import Heading from '../../components/User/Heading';
import Header from '../../components/User/Header';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import commonStyle from '../../theme/Style';

function Home() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <View style={styles.section}>
              <View style={styles.sliderSection}>
                <AdBanner />
              </View>
              <View style={styles.sliderSection}>
                <OfferSlider />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Heading
                  image={require('../../assets/icons/re-seller.png')}
                  title={'Near By Reseller'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.sliderSection}>
                <SellerSlider />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Heading
                  image={require('../../assets/icons/box.png')}
                  title={'New Release'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.sliderSection}>
                <ProductSlider />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Heading
                  image={require('../../assets/icons/video.png')}
                  title={'Video'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.sliderSection}>
                <VideoSlider />
                <View style={{marginVertical: 12}}>
                  <CouponCard />
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Heading
                  image={require('../../assets/icons/store.png')}
                  title={'Stores'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.sliderSection}>
                <BrandSlider />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Heading
                  image={require('../../assets/icons/special.png')}
                  title={'Top Selling Reseller'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.sliderSection}>
                <TopSellerSlider />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Heading
                  image={require('../../assets/icons/special.png')}
                  title={'Trending Seller'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.sliderSection}>
                <SellerSlider />
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
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    marginBottom: heightPercentageToDP('12%'),
  },
  section: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: Colors.border,
    borderBottomColor: Colors.border,
    paddingVertical: 10,
  },
  headingSection: {
    marginVertical: 14,
    marginBottom: 7,
  },
  sliderSection: {
    marginVertical: 10,
    marginTop: 7,
  },
});
export default Home;
