import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Colors from '../theme/Colors';
import SellerSlider from '../components/Home/SellerSlider';
import ProductSlider from '../components/Home/ProductSlider';
import VideoSlider from '../components/Home/VideoSlider';
import OfferSlider from '../components/Home/OfferSlider';
import CouponCard from '../components/Home/CouponCard';
import BrandSlider from '../components/Home/Brand/BrandSlider';
import TopSellerSlider from '../components/Home/TopSeller/TopSellerSlider';
import AdBanner from '../components/Home/AdBanner';
function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View style={{marginVertical: 20, marginBottom: 10}}>
              <AdBanner />
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
            <CouponCard />
            <View>
              <BrandSlider />
            </View>
            <View>
              <TopSellerSlider />
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
  },
});
export default Home;
