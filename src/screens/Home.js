import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Colors from '../theme/Colors';
import SellerSlider from '../components/Home/SellerSlider';
import ProductSlider from '../components/Home/ProductSlider';
import VideoSlider from '../components/Home/VideoSlider';
import OfferSlider from '../components/Home/OfferSlider';
import CouponCard from '../components/Home/CouponCard';
import BrandSlider from '../components/Home/BrandSlider';
import TopSellerSlider from '../components/Home/TopSellerSlider';
import AdBanner from '../components/Home/AdBanner';
import Heading from '../components/Heading';
import Header from '../components/Header';
import {heightPercentageToDP} from 'react-native-responsive-screen';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
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
                  image={require('../assets/icons/re-seller.png')}
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
                  image={require('../assets/icons/box.png')}
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
                  image={require('../assets/icons/video.png')}
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
                  image={require('../assets/icons/store.png')}
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
                  image={require('../assets/icons/special.png')}
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
                  image={require('../assets/icons/special.png')}
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
