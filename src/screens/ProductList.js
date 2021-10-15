import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../theme/Colors';
import ProductCard from '../components/ProductList/ProductCard';
import Font from '../theme/Font';

function ProductList() {
  const [activeTab, setActiveTab] = useState(false);
  const products = [
    {
      id: 'product-list-item-one',
      title: 'Fast Running shoe , M candid one',
      image: require('../assets/images/shoes/image-one.png'),
      price: 240,
      reseller: 'Sports Place',
      distance: 3.6,
      rating: 5.0,
    },
    {
      id: 'product-list-item-two',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 100,
      reseller: 'Awesome Shoes',
      distance: 4.8,
      rating: 2.0,
    },
    {
      id: 'product-list-item-three',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'Moving Sports',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-four',
      title: 'Nike React Vision',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'Shoe Plaza',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-five',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoe-a.png'),
      price: 150,
      reseller: 'Sports Place',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-six',
      title: 'Adidas run fast',
      image: require('../assets/images/shoes/box-shoe.png'),
      price: 150,
      reseller: 'Right Choice',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-seven',
      title: 'Puma Up Top Hill',
      image: require('../assets/images/shoes/running-shoe.png'),
      price: 150,
      reseller: 'Shoes Buy',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-eight',
      title: 'J Town running shoes',
      image: require('../assets/images/shoes/shoe-b.png'),
      price: 150,
      reseller: 'Speed Test',
      distance: 2.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-nine',
      title: 'Bata CJ casual shoe',
      image: require('../assets/images/shoes/shoe-c.png'),
      price: 150,
      reseller: 'Shoe Plaza',
      distance: 1.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-ten',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoe-img-one.png'),
      price: 150,
      reseller: 'Let`s Run',
      distance: 9.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-eleven',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'Sports Place',
      distance: 4.6,
      rating: 3.0,
    },
    {
      id: 'product-list-item-twelve',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoe-a.png'),
      price: 150,
      reseller: 'RealTime Players',
      distance: 7.6,
      rating: 2.0,
    },
    {
      id: 'product-list-item-thirteen',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'FastTrack Shoes',
      distance: 8.6,
      rating: 3.0,
    },
  ];

  const menus = [
    {
      id: 'menu-item-one',
      title: 'Shoes',
      image: require('../assets/icons/running.png'),
    },
    {
      id: 'menu-item-two',
      title: 'Sun Glass',
      image: require('../assets/icons/eyeglasses-with-half-frame.png'),
    },
    {
      id: 'menu-item-three',
      title: 'Watch',
      image: require('../assets/icons/watch.png'),
    },
    {
      id: 'menu-item-four',
      title: 'BackPack',
      image: require('../assets/icons/backpack.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View style={styles.titleSection}>
              <View>
                <Text style={styles.title}>Our Products</Text>
              </View>
              <View>
                <Text>Short By</Text>
              </View>
            </View>
            <View>
              <View style={styles.menuSection}>
                {menus &&
                  menus.map((item, index) => {
                    return (
                      <View>
                        <Pressable
                          onPress={() => setActiveTab(index)}
                          style={
                            index === activeTab
                              ? styles.activeTabItem
                              : styles.tabItem
                          }>
                          <Image
                            style={{width: 40, height: 40}}
                            source={item?.image}
                          />
                        </Pressable>
                        <View style={styles.center}>
                          <Text style={styles.menu}>{item?.title}</Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
            <View style={styles.center}>
              <View style={styles.productSection}>
                {products &&
                  products.map(item => {
                    return <ProductCard key={item?.id} item={item} />;
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
  menuSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
  },
  menu: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 12,
    color: Colors.black,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 20,
    color: Colors.black,
  },
  filter: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 13,
    color: Colors.black,
  },
  tabItem: {
    width: 70,
    height: 60,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabItem: {
    width: 70,
    height: 60,
    backgroundColor: '#DBEBF8',
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;
