import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import commonStyle from '../../theme/Style';
import SimpleNavBar from '../../components/Seller/SimpleNavBar';
import Section from '../../components/Seller/Shipping/Section';

function Shipping() {
  const [list] = useState([
    {
      type: 'pick-up',
      title: 'Pick Up',
      isSelected: true,
      routes: [
        {
          index: 0,
          title: 'Pick Up Point 1',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
        {
          index: 1,
          title: 'Pick Up Point 2',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
        {
          index: 2,
          title: 'Pick Up Point 3',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
        {
          index: 3,
          title: 'Pick Up Point 4',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
      ],
    },
    {
      type: 'drop',
      title: 'Drop',
      isSelected: false,
      routes: [
        {
          index: 0,
          title: 'Drop Up Point 1',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
        {
          index: 1,
          title: 'Drop Up Point 2',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
        {
          index: 2,
          title: 'Drop Up Point 3',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
        {
          index: 3,
          title: 'Drop Up Point 4',
          address: 'RawatPura Colony Road,Raipur,497001',
          distance: '9 Miles',
        },
      ],
    },
  ]);
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <SimpleNavBar pageTitle={'Shipping'} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={commonStyle.paddingHorizontal(20)}>
              <View>
                {list?.length > 0 &&
                  list.map((item, index) => {
                    return <Section item={item} key={index} />;
                  })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Shipping;
