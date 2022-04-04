import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import Colors from '../../theme/Colors';
import {Icon} from 'react-native-elements';
import Font from '../../theme/Font';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {USER_SIGNUP_URL} from '../../services/api';
import {setAuthUser} from '../../slices/Auth.slice';
import {setToken} from '../../services/storage';
import {useDispatch} from 'react-redux';
import commonStyle from '../../theme/Style';
import InputBox from '../../components/Seller/InputBox';

function Register() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');

  function toggleSecureInput() {
    setSecureTextEntry(!secureTextEntry);
  }

  const handleRegister = async () => {
    if (!username?.length) {
      SimpleToast.show('Please enter your first name');
      return false;
    }
    if (!email?.length) {
      SimpleToast.show('Please enter valid email');
      return false;
    }
    if (!number?.length) {
      SimpleToast.show('Please enter valid email');
      return false;
    }
    if (!password.length || password?.length < 6) {
      SimpleToast.show('Please enter valid more than six digit password');
      return false;
    }
    if (!companyName?.length) {
      SimpleToast.show('Please enter your last name');
      return false;
    }
    if (!address?.length) {
      SimpleToast.show('Please enter your last name');
      return false;
    }
    if (!city?.length) {
      SimpleToast.show('Please enter your last name');
      return false;
    }
    if (!country?.length) {
      SimpleToast.show('Please enter your last name');
      return false;
    }

    if (!zipCode?.length) {
      SimpleToast.show('Please enter your last name');
      return false;
    }

    const data = new FormData();
    data.append('username', username);
    data.append('companyName', companyName);
    data.append('number', number);
    data.append('email', email);
    data.append('password', password);
    data.append('address', address);
    data.append('city', city);
    data.append('country', country);
    data.append('zipcode', zipCode);

    const response = await axios.post(USER_SIGNUP_URL, data, {
      headers: {'Content-Type': 'multipart/form-data'},
    });
    if (response?.status === 200) {
      const result = response?.data;
      if (result.user) {
        dispatch(setAuthUser(result?.user));
        await setToken(result?.user?.session_key);
      }
      SimpleToast.show(result?.message);
    } else {
      const {message = ''} = response;
      SimpleToast.show(message?.toString());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        StatusBarStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View style={styles.curveContainer}>
              <View style={styles.curveUpperSection}>
                <View style={styles.curveUpperSectionInner}>
                  <Image
                    style={styles.logo}
                    source={require('../../assets/images/shue-app-logo.png')}
                  />
                </View>
              </View>
              <View style={styles.curveBottomSection}>
                <Text style={styles.title}>Sign Up</Text>
              </View>
            </View>
            <View>
              <View style={commonStyle.paddingHorizontal(20)}>
                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Username'}
                    value={username}
                    handleChange={setUsername}
                    leftIcon={
                      <Icon
                        type={'font-awesome'}
                        name={'user-o'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Email'}
                    value={email}
                    handleChange={setEmail}
                    leftIcon={
                      <Icon
                        type={'entypo'}
                        name={'email'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>
                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Mobile Number'}
                    value={number}
                    handleChange={setNumber}
                    leftIcon={
                      <Icon
                        type={'font-awesome-5'}
                        name={'mobile-alt'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    secureTextEntry={secureTextEntry}
                    placeholder={'Password'}
                    value={password}
                    handleChange={setPassword}
                    leftIcon={
                      <Icon
                        type={'ionicon'}
                        name={'lock-open-outline'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                    rightIcon={
                      <Icon
                        type={'feather'}
                        onPress={() => toggleSecureInput(secureTextEntry)}
                        name={'eye'}
                        color={'#626262'}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Company Name'}
                    value={companyName}
                    handleChange={setCompanyName}
                    leftIcon={
                      <Icon
                        type={'font-awesome'}
                        name={'building-o'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Address'}
                    value={address}
                    handleChange={setAddress}
                    leftIcon={
                      <Icon
                        type={'entypo'}
                        name={'location'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'City'}
                    value={city}
                    handleChange={setCity}
                    leftIcon={
                      <Icon
                        type={'font-awesome-5'}
                        name={'city'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Country'}
                    value={country}
                    handleChange={setCountry}
                    leftIcon={
                      <Icon
                        type={'material-icon'}
                        name={'where-to-vote'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>

                <View style={commonStyle.marginVertical(4)}>
                  <InputBox
                    placeholder={'Zipcode'}
                    value={zipCode}
                    handleChange={setZipCode}
                    leftIcon={
                      <Icon
                        type={'feather'}
                        name={'code'}
                        color={'#6D6D6D'}
                        size={15}
                      />
                    }
                  />
                </View>
              </View>

              <View>
                <View style={commonStyle.center}>
                  <TouchableOpacity
                    onPress={() => handleRegister()}
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>

                <View style={commonStyle.marginVertical(10)}>
                  <View style={styles.membershipSection}>
                    <View>
                      <Text style={styles.membershipText}>
                        Already a Member
                      </Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.registerText}>Login</Text>
                      </Pressable>
                    </View>
                  </View>
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
  inputBgColor: {
    backgroundColor: '#E7E4E4FF',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 25,
    color: Colors.black,
  },
  curveContainer: {backgroundColor: Colors.black},
  curveUpperSection: {
    backgroundColor: Colors.white,
    height: heightPercentageToDP('25%'),
  },
  curveUpperSectionInner: {
    backgroundColor: Colors.black,
    borderBottomRightRadius: 60,
    height: heightPercentageToDP('25%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  curveBottomSection: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 60,
    height: heightPercentageToDP('15%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  loginButton: {
    width: 250,
    height: 50,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    fontFamily: Font.RobotoRegular,
    fontSize: 22,
    color: Colors.white,
  },
  membershipSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    paddingHorizontal: 10,
  },
  membershipText: {
    fontFamily: Font.RobotoRegular,
    fontSize: 15,
    color: Colors.primary,
  },
  registerText: {
    fontFamily: Font.RobotoRegular,
    fontSize: 24,
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default Register;
