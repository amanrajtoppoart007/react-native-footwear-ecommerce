import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../theme/Colors';
import ProductSlider from '../components/Product/ProductSlider';
import SimilarProductSlider from '../components/Home/ProductSlider';
import Font from '../theme/Font';
import StarRating from '../components/StarRating';
import NavBar from '../components/NavBar';

function Product() {
  const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
  const colors = ['green', 'black', 'red', 'grey'];
  const [sizeIndex, setSizeIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <NavBar pageTitle={'Product'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View style={{marginVertical: 15}}>
              <ProductSlider />
            </View>
            <View style={{paddingHorizontal: 5}}>
              <View style={{marginVertical: 2}}>
                <View style={styles.titleSection}>
                  <View>
                    <Text style={styles.name}>Nike Air Max 2090</Text>
                  </View>
                  <View style={styles.rowCenter}>
                    <View>
                      <View style={styles.iconBox}>
                        <Icon type={'font-awesome'} name={'heart'} size={15} />
                      </View>
                    </View>
                    <View style={{marginHorizontal: 5}}>
                      <View style={styles.iconBox}>
                        <Icon
                          type={'font-awesome'}
                          name={'share-alt'}
                          size={15}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View style={styles.priceSection}>
                  <View>
                    <Icon
                      type={'font-awesome'}
                      name={'dollar'}
                      size={15}
                      color={'#4C2E89'}
                    />
                  </View>
                  <View>
                    <Text style={styles.price}>{240?.toFixed(2)}</Text>
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View style={styles.rowFlexStart}>
                  <StarRating size={20} rating={4} />
                  <View style={{marginHorizontal: 5}}>
                    <Text style={styles.rating}>({4?.toFixed(1)})</Text>
                  </View>
                </View>
              </View>

              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View style={styles.rowFlexStart}>
                  <View>
                    <Icon
                      type={'font-awesome'}
                      name={'user'}
                      size={15}
                      color={'#686667'}
                    />
                  </View>
                  <View style={{marginHorizontal: 5}}>
                    <Text style={styles.resellerHelper}>Reseller</Text>
                  </View>
                  <View>
                    <Text style={styles.reseller}>Awesome Shop</Text>
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View style={styles.rowFlexStart}>
                  <View>
                    <Icon
                      type={'feather'}
                      name={'map-pin'}
                      size={15}
                      color={'#686667'}
                    />
                  </View>
                  <View style={{marginHorizontal: 5}}>
                    <Text style={styles.reseller}>4.6 Miles</Text>
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View>
                  <Text style={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Text>
                </View>
              </View>
              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View>
                  <Text style={styles.attributeTitle}>Size</Text>
                </View>
                <View style={styles.sizeRow}>
                  {sizes &&
                    sizes.map((size, index) => {
                      return (
                        <Pressable
                          key={Math.random() + size?.toString()}
                          onPress={() => setSizeIndex(index)}
                          style={
                            index === sizeIndex
                              ? styles.activeSizeBox
                              : styles.sizeBox
                          }>
                          <Text>{size}</Text>
                        </Pressable>
                      );
                    })}
                </View>
              </View>
              <View style={{marginVertical: 2, paddingHorizontal: 10}}>
                <View>
                  <Text style={styles.attributeTitle}>Color</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  {colors &&
                    colors.map(item => {
                      return (
                        <View
                          key={Math.random() + item}
                          style={[styles.circle, {backgroundColor: item}]}
                        />
                      );
                    })}
                </View>
              </View>

              <View style={{marginVertical: 10, paddingHorizontal: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#DBEBF8'}]}>
                    <Text style={[styles.buttonText, {color: Colors.black}]}>
                      Add To Cart
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: Colors.black}]}>
                    <Text style={[styles.buttonText, {color: Colors.white}]}>
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginVertical: 10, paddingHorizontal: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image
                      style={{width: 15, height: 15}}
                      source={require('../assets/icons/list.png')}
                    />
                  </View>
                  <View style={{marginHorizontal: 8}}>
                    <Text style={styles.productSectionTitle}>
                      Similar Products
                    </Text>
                  </View>
                </View>
                <View>
                  <SimilarProductSlider />
                </View>
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
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontFamily: Font.PoppinsBold,
    fontSize: 20,
    color: '#686667',
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#dad5d5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  price: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 30,
    color: '#4C2E89',
    marginHorizontal: 5,
  },
  rating: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 20,
    color: '#686667',
  },
  resellerHelper: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 15,
    color: '#686667',
  },
  reseller: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 15,
    color: '#686667',
  },
  description: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 15,
    color: '#686667',
  },
  attributeTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 22,
    color: '#686667',
  },
  sizeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  sizeBox: {
    width: 70,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b2afaf',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    marginVertical: 5,
  },
  activeSizeBox: {
    width: 70,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#DBEBF8',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    marginVertical: 5,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    marginHorizontal: 5,
  },
  button: {
    width: 180,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 15,
  },
  productSectionTitle: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 15,
    color: Colors.black,
  },
});

export default Product;
