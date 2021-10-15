import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../theme/Colors';
import {Icon} from 'react-native-elements';

function TabBarItem({isFocused, route}) {
  if (route.name === 'Home') {
    return isFocused ? (
      <View style={styles.activeTabStyle}>
        <Icon name={'home'} type={'font-awesome'} size={30} color={'white'} />
      </View>
    ) : (
      <View style={styles.tabStyle}>
        <Icon name={'home'} type={'font-awesome'} size={30} color={'black'} />
      </View>
    );
  }
  if (route.name === 'Search') {
    return isFocused ? (
      <View style={styles.activeTabStyle}>
        <Icon name={'search'} type={'ionicon'} size={30} color={'white'} />
      </View>
    ) : (
      <View style={styles.tabStyle}>
        <Icon name={'search'} type={'ionicon'} size={30} color={'black'} />
      </View>
    );
  }
  if (route.name === 'WishList') {
    return isFocused ? (
      <View style={styles.activeTabStyle}>
        <Icon
          name={'heart-o'}
          type={'font-awesome'}
          size={30}
          color={'white'}
        />
      </View>
    ) : (
      <View style={styles.tabStyle}>
        <Icon
          name={'heart-o'}
          type={'font-awesome'}
          size={30}
          color={'black'}
        />
      </View>
    );
  }
  if (route.name === 'OrderList') {
    return isFocused ? (
      <View style={styles.activeTabStyle}>
        <Icon
          name={'list-alt'}
          type={'material-icon'}
          size={30}
          color={'white'}
        />
      </View>
    ) : (
      <View style={styles.tabStyle}>
        <Icon
          name={'list-alt'}
          type={'material-icon'}
          size={30}
          color={'black'}
        />
      </View>
    );
  }
  if (route.name === 'Profile') {
    return isFocused ? (
      <View style={styles.activeTabStyle}>
        <Icon name={'user-o'} type={'font-awesome'} size={30} color={'white'} />
      </View>
    ) : (
      <View style={styles.tabStyle}>
        <Icon name={'user-o'} type={'font-awesome'} size={30} color={'black'} />
      </View>
    );
  }
}
export default function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={Math.random() + index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <TabBarItem isFocused={isFocused} route={route} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('90%'),
    height: 70,
    borderRadius: 8,
    bottom: 20,
    left: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: Colors.border,
  },
  button: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  tabStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CCA145',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
