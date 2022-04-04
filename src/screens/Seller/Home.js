import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../theme/Style';
import SimpleNavBar from '../../components/Seller/SimpleNavBar';
import Colors from '../../theme/Colors';
import Font from '../../theme/Font';
import Section from '../../components/Seller/Home/Section';
import OrderCard from '../../components/Seller/Home/OrderCard';
import NavBar from '../../components/Seller/NavBar';

function Home() {
  const records = [
    {
      title: 'Order Received',
      value: 554,
    },
    {
      title: 'Order Delivered',
      value: 400,
    },
    {
      title: 'Order Pending',
      value: 100,
    },
    {
      title: 'Total Orders',
      value: 1054,
    },
    {
      title: 'Total   Sales',
      value: 1054 * 100,
    },
    {
      title: 'Payment Received',
      value: 500 * 100,
    },
    {
      title: 'Payment Pending',
      value: 554 * 100,
    },
  ];
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <NavBar />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={commonStyle.paddingHorizontal(12)}>
              <View style={commonStyle.marginVertical(8)}>
                <View style={styles.row}>
                  {records &&
                    records.map((record, index) => {
                      return (
                        <View key={index} style={styles.card}>
                          <Text style={styles.cardTitle}>{record.value}</Text>
                          <Text style={styles.cardText}>{record.title} </Text>
                        </View>
                      );
                    })}
                </View>
                <View style={commonStyle.marginVertical(12)}>
                  <Section
                    icon={'clipboard-list'}
                    iconType={'font-awesome-5'}
                    title={'Recent Orders'}>
                    <View>
                      <OrderCard />
                      <OrderCard />
                      <OrderCard />
                    </View>
                  </Section>
                </View>

                <View style={commonStyle.marginVertical(12)}>
                  <Section
                    icon={'truck'}
                    iconType={'feather'}
                    title={'Delivered Orders'}>
                    <View>
                      <OrderCard />
                      <OrderCard />
                      <OrderCard />
                    </View>
                  </Section>
                </View>

                <View style={commonStyle.marginVertical(12)}>
                  <Section
                    icon={'swap'}
                    iconType={'ant-design'}
                    title={'Trade'}>
                    <View>
                      <OrderCard />
                      <OrderCard />
                      <OrderCard />
                    </View>
                  </Section>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 80,
    height: 80,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderRadius: 6,
    ...commonStyle.center,
    padding: 4,
    margin: 4,
  },
  cardTitle: {
    fontFamily: Font.PoppinsBold,
    fontSize: 13,
    color: Colors.black,
  },
  cardText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 11,
    color: Colors.black,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default Home;
