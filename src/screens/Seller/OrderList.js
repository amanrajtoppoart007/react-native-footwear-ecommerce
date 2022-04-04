import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../theme/Style';
import SimpleNavBar from '../../components/Seller/SimpleNavBar';
import Font from '../../theme/Font';
import Colors from '../../theme/Colors';
import {Icon} from 'react-native-elements';

function OrderList() {
  const listing = [
    {
      orderNo: '#5345435',
      status: 'PENDING',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'DELIVERED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'CANCELLED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'PENDING',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'CANCELLED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'RETURNED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'DELIVERED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'DELIVERED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'CANCELLED',
      date: '09-08-2021',
    },
    {
      orderNo: '#5345435',
      status: 'DELIVERED',
      data: '09-08-2021',
    },
  ];

  const [orders, setOrders] = useState(listing);
  const [filter, setFilter] = useState([]);
  const [filterItems, setFilterItems] = useState([
    {
      status: 'ALL',
      isActive: false,
    },
    {
      status: 'PENDING',
      isActive: false,
    },
    {
      status: 'CANCELLED',
      isActive: false,
    },
    {
      status: 'DELIVERED',
      isActive: false,
    },
    {
      status: 'RETURNED',
      isActive: false,
    },
  ]);
  const toggle = index => {
    const list = filterItems.map((item, i) => {
      return {
        ...item,
        isActive: index === i ? !item.isActive : item.isActive,
      };
    });
    setFilterItems(list);
    let filters = filterItems.map((item, i) => {
      return item.isActive ? item.status : null;
    });
    let filterList = filters.map(item => {
      return item !== null;
    });
    setFilter(filterList);
  };
  const OrderItem = ({item}) => {
    const {orderNo, status, date} = item;
    return (
      <View style={styles.orderItem}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.orderNumber}>{orderNo}</Text>
          </View>
          <View style={commonStyle.rowFlexStart}>
            <View style={commonStyle.marginHorizontal(4)}>
              <View style={styles.circle(status)} />
            </View>
            <View>
              <Text>{status}</Text>
            </View>
          </View>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View</Text>
              <Icon
                name={'chevron-right'}
                type={'font-awesome'}
                size={12}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <SimpleNavBar pageTitle={'My Orders'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <View style={commonStyle.paddingHorizontal(12)}>
              <View style={commonStyle.marginVertical(14)}>
                <View style={styles.filterSection}>
                  {filterItems &&
                    filterItems.map((item, index) => {
                      return (
                        <View key={index}>
                          <TouchableOpacity
                            onPress={() => toggle(index)}
                            style={styles.filterChip(item.isActive)}>
                            <Text style={styles.filterChipText(item.isActive)}>
                              {item.status}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                </View>
              </View>
              <View>
                {orders &&
                  orders.map((item, index) => {
                    return (
                      <View style={commonStyle.marginVertical(4)} key={index}>
                        <OrderItem item={item} />
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filterSection: {
    ...commonStyle.rowSpaceEven,
  },
  filterChip(isActive) {
    return {
      width: 70,
      height: 35,
      borderRadius: 6,
      backgroundColor: isActive ? Colors.pacificBlue : Colors.white,
      ...commonStyle.center,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#c8c7c7',
    };
  },
  filterChipText(isActive) {
    return {
      fontFamily: Font.PoppinsRegular,
      fontSize: 11,
      color: isActive ? Colors.white : Colors.pacificBlue,
    };
  },
  orderItem: {
    borderRadius: 8,
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7c7',
  },
  orderNumber: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 13,
    color: Colors.black,
  },
  date: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 11,
    color: Colors.black,
  },
  button: {
    width: 55,
    height: 25,
    backgroundColor: Colors.primary,
    ...commonStyle.rowSpaceBetween,
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.white,
  },
  circle(status) {
    let bgColor = Colors.googlePlus;
    switch (status) {
      case 'PENDING':
        bgColor = Colors.peru;
        break;
      case 'CANCELLED':
        bgColor = Colors.danger;
        break;
      case 'DELIVERED':
        bgColor = Colors.green;
        break;
      default:
        bgColor = Colors.googlePlus;
    }
    return {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: bgColor,
    };
  },
});

export default OrderList;
