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
              <Heading
                image={require('../assets/icons/re-seller.png')}
                title={'Near By Reseller'}
                onPress={() => {}}
              />
              <SellerSlider />
            </View>
            <View>
              <Heading
                image={require('../assets/icons/box.png')}
                title={'New Release'}
                onPress={() => {}}
              />
              <ProductSlider />
            </View>
            <View>
              <Heading
                image={require('../assets/icons/video.png')}
                title={'Video'}
                onPress={() => {}}
              />
              <VideoSlider />
            </View>
            <View style={{marginVertical: 12}}>
              <CouponCard />
            </View>
            <View>
              <Heading
                image={require('../assets/icons/store.png')}
                title={'Stores'}
                onPress={() => {}}
              />
              <BrandSlider />
            </View>
            <View>
              <Heading
                image={require('../assets/icons/special.png')}
                title={'Top Selling Reseller'}
                onPress={() => {}}
              />
              <TopSellerSlider />
            </View>
            <View style={{marginVertical: 8}}>
              <Heading
                image={require('../assets/icons/special.png')}
                title={'Trending Seller'}
                onPress={() => {}}
              />
              <SellerSlider />
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
