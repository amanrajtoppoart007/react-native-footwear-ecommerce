import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../theme/Style';
import Colors from '../../theme/Colors';
import SimpleNavBar from '../../components/Seller/SimpleNavBar';
import PriceCard from '../../components/Seller/Trade/PriceCard';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Font from '../../theme/Font';

function Trade() {
  const listing = [
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-a.png'),
    },
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-b.png'),
    },
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-c.png'),
    },
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-a.png'),
    },
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-b.png'),
    },
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-c.png'),
    },
    {
      name: 'Convert Roto...',
      brand: 'Nike',
      price: 56.0,
      image: require('../../assets/images/shoes/shoe-a.png'),
    },
  ];
  return (
    <SafeAreaView style={commonStyle.container}>
      <SimpleNavBar pageTitle={'Trade'} />
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={commonStyle.paddingHorizontal(12)}>
              <View style={styles.card}>
                <View style={commonStyle.rowFlexStart}>
                  <View>
                    <View style={styles.box}>
                      <View style={styles.round}>
                        <Image
                          style={styles.boxImage}
                          source={require('../../assets/images/shoes/shoe-a.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Image
                      style={styles.swapImage}
                      source={require('../../assets/icons/transfer.png')}
                    />
                    <Text>Trade</Text>
                  </View>
                  <View>
                    <View style={styles.box}>
                      <View style={styles.round}>
                        <Image
                          style={styles.boxImage}
                          source={require('../../assets/images/shoes/shoe-c.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  {listing &&
                    listing.map((item, index) => {
                      return (
                        <View style={commonStyle.marginVertical(8)} key={index}>
                          <PriceCard item={item} />
                        </View>
                      );
                    })}
                </View>
              </View>
              <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>TRADE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    borderColor: '#c8c7c7',
    height: 150,
    ...commonStyle.center,
    marginVertical: 12,
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7c7',
    ...commonStyle.center,
  },
  boxImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  swapImage: {
    width: 45,
    height: 45,
  },
  round: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderWidth: 6,
    borderColor: Colors.border,
    ...commonStyle.center,
    alignSelf: 'center',
  },
  buttonSection: {
    width: '100%',
    ...commonStyle.center,
    marginVertical: 12,
  },
  button: {
    width: widthPercentageToDP('55%'),
    height: 35,
    backgroundColor: Colors.secondary,
    ...commonStyle.center,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
});

export default Trade;
