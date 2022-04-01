import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../theme/Style';
import SimpleNavBar from '../../components/Seller/SimpleNavBar';

function OrderDetail() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <SimpleNavBar pageTitle={'Order Details'} />
          <View style={commonStyle.paddingHorizontal(12)}>
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
              <View style={commonStyle.rowSpaceBetween}>
                <View />
                <View>
                  <Text>Item</Text>
                </View>
                <View>
                  <Text>Price</Text>
                </View>
              </View>
            </View>
          </View>
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
});

export default OrderDetail;
