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
import SimpleNavBar from '../../components/Seller/SimpleNavBar';
import OrderItem from '../../components/Seller/Order/OrderItem';
import Font from '../../theme/Font';
import Colors from '../../theme/Colors';
import PriceCard from '../../components/Seller/Order/PriceCard';

function OrderDetail() {
  const orderItems = [
    {
      name: 'Pro Brown Nike Shoe 255',
      price: 1000,
      image: require('../../assets/images/shoes/shoe-a.png'),
    },
    {
      name: 'Pro Brown Adidas Shoe 255',
      price: 1000,
      image: require('../../assets/images/shoes/shoe-b.png'),
    },
    {
      name: 'Pro Brown Bata Shoe 255',
      price: 1000,
      image: require('../../assets/images/shoes/shoe-c.png'),
    },
  ];
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <SimpleNavBar pageTitle={'Order Details'} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={commonStyle.paddingHorizontal(20)}>
              <View style={styles.card}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <Text>#5345345</Text>
                  </View>
                  <TouchableOpacity>
                    <Text>Processed</Text>
                  </TouchableOpacity>
                </View>

                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <Text>Method : Online</Text>
                  </View>
                  <View>
                    <Text>2021-06-06 11:12 pm</Text>
                  </View>
                </View>
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <Text>Details</Text>
                  </View>
                  <View>
                    <Text>Paid</Text>
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={commonStyle.rowFlexStart}>
                  <View style={commonStyle.width('20%')} />
                  <View style={commonStyle.width('60%')}>
                    <Text>Item</Text>
                  </View>
                  <View style={commonStyle.width('20%')}>
                    <Text>Price</Text>
                  </View>
                </View>
                <View>
                  {orderItems &&
                    orderItems.map((item, index) => {
                      return (
                        <View style={commonStyle.marginVertical(4)} key={index}>
                          <OrderItem item={item} />
                        </View>
                      );
                    })}
                </View>
                <View>
                  <View style={commonStyle.marginVertical(4)}>
                    <PriceCard label={'Item Price'} value={1000} />
                  </View>
                  <View style={commonStyle.marginVertical(4)}>
                    <PriceCard label={'Tax'} value={20} />
                  </View>
                  <View style={commonStyle.marginVertical(4)}>
                    <PriceCard label={'Discount'} value={100} />
                  </View>
                  <View style={commonStyle.marginVertical(4)}>
                    <PriceCard label={'Sub Total'} value={920} />
                  </View>
                  <View style={commonStyle.marginVertical(4)}>
                    <PriceCard label={'Coupon Discount'} value={0.0} />
                  </View>
                  <View style={commonStyle.marginVertical(4)}>
                    <PriceCard label={'Shipping Fee'} value={0.0} />
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <View>
                  <Text>Shipping Address</Text>
                  <Text>Name: Nippon Camera</Text>
                  <Text>Address:2</Text>
                  <Text>Phone : 5345345</Text>
                </View>
              </View>

              <View style={styles.card}>
                <View>
                  <Text>Customer Contact Details</Text>
                  <Text>Name: Nippon Camera</Text>
                  <Text>Address:2</Text>
                  <Text>Phone : 5345345</Text>
                </View>
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
    marginVertical: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemPriceSection: {
    width: '20%',
    ...commonStyle.rowFlexEnd,
  },
});

export default OrderDetail;
