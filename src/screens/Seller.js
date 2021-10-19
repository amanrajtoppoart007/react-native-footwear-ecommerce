import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../theme/Colors';
import ProductSlider from '../components/Seller/ProductSlider';
import Heading from '../components/Heading';
import VideoSlider from '../components/Seller/VideoSlider';
import CategorySlider from '../components/Seller/CategorySlider';
import SizeSlider from '../components/Seller/SizeSlider';
import TrendingProduct from '../components/Seller/TrendingProduct';
import Banner from '../components/Seller/Banner';
import ReviewSection from '../components/Seller/ReviewSection';
import NavBar from '../components/NavBar';

function Seller() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar pageTitle={'Seller'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View>
              <Banner />
            </View>
            <View style={{paddingVertical: 10}}>
              <Heading
                title={'PreOrder'}
                image={require('../assets/icons/box.png')}
              />
              <ProductSlider />
            </View>
            <View>
              <Heading
                title={'Video'}
                image={require('../assets/icons/video.png')}
              />
              <VideoSlider />
            </View>
            <View>
              <Heading
                title={'Top Trending Categories'}
                image={require('../assets/icons/video.png')}
              />
              <CategorySlider />
            </View>
            <View>
              <Heading
                title={'Sort by Size'}
                image={require('../assets/icons/video.png')}
              />
              <SizeSlider />
            </View>
            <View>
              <Heading
                title={'Trending Products'}
                image={require('../assets/icons/video.png')}
              />
              <TrendingProduct />
            </View>
            <View>
              <ReviewSection />
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
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: wp('100%'),
    height: hp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
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

export default Seller;
