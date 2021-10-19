import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import OfferSliderItem from './OfferSliderItem';
import Indicator from '../Carousel/Indicator';
import Colors from '../../theme/Colors';

function OfferSlider() {
  const [data] = useState([
    {
      id: 'offer-slider-item-one',
      backgroundColor: 'rgba(225,131,69,0.7)',
    },
    {
      id: 'offer-slider-item-two',
      backgroundColor: 'rgba(110, 99, 53, 0.7)',
    },
    {
      id: 'offer-slider-item-three',
      backgroundColor: 'rgba(236, 79, 60, 0.7)',
    },
    {
      id: 'offer-slider-item-four',
      backgroundColor: 'rgba(225,131,69,0.7)',
    },
    {
      id: 'offer-slider-item-five',
      backgroundColor: 'rgba(110, 99, 53, 0.7)',
    },
    {
      id: 'offer-slider-item-six',
      backgroundColor: 'rgba(236, 79, 60, 0.7)',
    },
  ]);

  const [index, setIndex] = useState(0);
  const [loop] = useState(false);
  const renderItem = ({item}) => <OfferSliderItem item={item} />;

  const onViewRef = React.useRef(viewableItems => {
    if (viewableItems.changed?.length > 0) {
      let currentIndex = viewableItems?.changed[0].index;
      if (currentIndex % data.length === data.length - 1 && loop) {
        setIndex(currentIndex);
      } else {
        setIndex(currentIndex);
      }
    }
    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <>
      {data && (
        <View>
          <FlatList
            horizontal={true}
            pagingEnabled={true}
            style={{width: wp('95%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            keyExtractor={item => item?.id?.toString()}
            data={data}
            renderItem={renderItem}
            getItemLayout={(content, index) => ({
              length: parseFloat(wp('95%')),
              offset: parseFloat(wp('95%')) * index,
              index,
            })}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
          />
          {data && (
            <View>
              <Indicator
                itemCount={data?.length}
                indicatorActiveColor={'#CCA145'}
                indicatorInActiveColor={'#F0E3C7'}
                indicatorStyle={styles.circle}
                indicatorContainerStyle={styles.indicatorContainerStyle}
                indicatorActiveWidth={12}
                currentIndex={index}
              />
            </View>
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: Colors.border,
    marginHorizontal: 2,
  },
  indicatorContainerStyle: {
    marginVertical: 5,
  },
});

export default OfferSlider;
