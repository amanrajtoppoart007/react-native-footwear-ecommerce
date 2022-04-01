import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Heading from '../Heading';
import StarRating from '../StarRating';
import Font from '../../../theme/Font';
import Colors from '../../../theme/Colors';

function ReviewSection() {
  const users = [
    {
      userId: 'user-id-one',
      name: 'Samantha',
      rating: 1,
      image: require('../../../assets/images/users/user-one.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-two',
      name: 'Karen William',
      rating: 5,
      image: require('../../../assets/images/users/user-two.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-three',
      name: 'Angela Smith',
      rating: 3,
      image: require('../../../assets/images/users/user-three.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-four',
      name: 'Olivia Jack',
      rating: 2,
      image: require('../../../assets/images/users/user-one.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-five',
      name: 'Emma Watson',
      rating: 4,
      image: require('../../../assets/images/users/user-two.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-six',
      name: 'Ava Green',
      rating: 3,
      image: require('../../../assets/images/users/user-three.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-seven',
      name: 'Charlotte Brown',
      rating: 1,
      image: require('../../../assets/images/users/user-one.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-eight',
      name: 'Sophia Richard',
      rating: 3,
      image: require('../../../assets/images/users/user-two.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-nine',
      name: 'Amelia Heart',
      rating: 4,
      image: require('../../../assets/images/users/user-three.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-ten',
      name: 'Isabella Roz Diyez',
      rating: 5,
      image: require('../../../assets/images/users/user-one.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-eleven',
      name: 'Mia Fernadis',
      rating: 3,
      image: require('../../../assets/images/users/user-two.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      userId: 'user-id-twelve',
      name: 'Carrol Brown',
      rating: 4,
      image: require('../../../assets/images/users/user-three.png'),
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const Item = ({item}) => (
    <View style={styles.commentSection}>
      <View>
        <Image style={styles.userImage} source={item?.image} />
      </View>
      <View style={{marginLeft: 15}}>
        <Text style={styles.userName}>{item?.name}</Text>
        <StarRating rating={item?.rating} />
        <Text>{item?.comment}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Heading
          title={'Review'}
          image={require('../../../assets/icons/video.png')}
        />
        <View style={styles.ratingRow}>
          <View>
            <Text style={styles.rating}>4.0</Text>
          </View>
          <View style={{marginHorizontal: 5}}>
            <StarRating rating={4} />
            <Text>From 20 Peoples</Text>
          </View>
        </View>

        {users &&
          users.map(item => {
            return <Item key={item?.userId?.toString()} item={item} />;
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  rating: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 30,
    color: Colors.black,
  },
  commentSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
  },
  userName: {
    fontFamily: Font.PoppinsMedium,
    fontSize: 13,
    color: Colors.black,
  },
  comment: {
    fontFamily: Font.PoppinsLight,
    fontSize: 10,
    color: Colors.blackFaded,
  },
});

export default ReviewSection;
