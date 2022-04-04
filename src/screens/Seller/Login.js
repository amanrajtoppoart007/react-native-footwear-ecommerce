import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../../theme/Colors';
import {Icon} from 'react-native-elements';
import Font from '../../theme/Font';
import {useNavigation} from '@react-navigation/native';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {USER_LOGIN_URL} from '../../services/api';
import {setAuthUser} from '../../slices/Auth.slice';
import {setToken} from '../../services/storage';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import commonStyle from '../../theme/Style';
import InputBox from '../../components/Shared/InputBox';

function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = async () => {
    navigation.navigate('SellerSection');
    return;
    if (!email?.length) {
      SimpleToast.show('Please enter valid email');
      return false;
    }
    if (!password.length || password?.length < 6) {
      SimpleToast.show('Please enter valid more than six digit password');
      return false;
    }

    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    const response = await axios.post(USER_LOGIN_URL, data, {
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
    <SafeAreaView style={commonStyle.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        StatusBarStyle={'dark-content'}
      />
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
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
              <Text style={styles.title}>Sign in</Text>
            </View>
          </View>

          <View style={commonStyle.paddingHorizontal(20)}>
            <View style={commonStyle.marginVertical(4)}>
              <InputBox
                placeholder={'email'}
                value={email}
                handleChange={setEmail}
                leftIcon={
                  <Icon
                    type={'font-awesome'}
                    name={'user-o'}
                    color={'#6D6D6D'}
                    size={20}
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
                    type={'antdesign'}
                    name={'unlock'}
                    color={'#6D6D6D'}
                    size={20}
                  />
                }
                rightIcon={
                  <Icon
                    type={'feather'}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                    name={'eye'}
                    color={'#626262'}
                  />
                }
              />
            </View>

            <View style={commonStyle.paddingHorizontal(20)}>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.buttonSection}>
                <TouchableOpacity
                  onPress={() => handleLogin()}
                  style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={commonStyle.marginVertical(5)}>
                <View style={commonStyle.rowCenter}>
                  <View>
                    <Text style={styles.membershipText}>Not a seller?</Text>
                  </View>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SellerRegister')}>
                      <Text style={styles.registerText}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={commonStyle.marginVertical(5)}>
                <View style={commonStyle.rowCenter}>
                  <View>
                    <Text style={styles.membershipText}>Login as a</Text>
                  </View>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.registerText}>User</Text>
                    </TouchableOpacity>
                  </View>
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
  },
  logo: {
    width: 200,
    height: 200,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    backgroundColor: 'red',
  },
  inputStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 20,
    height: 60,
    color: Colors.primary,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    width: widthPercentageToDP('90%'),
    height: 60,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
    borderColor: '#F5F5F5',
  },
  forgotPassword: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 15,
    color: '#9E860F',
    textAlign: 'right',
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButton: {
    width: 250,
    height: 70,
    backgroundColor: '#A48800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 25,
    color: Colors.black,
  },
  loginButtonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 22,
    color: Colors.white,
  },
  membershipSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  membershipText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 15,
    color: Colors.primary,
  },
  registerText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default Login;
