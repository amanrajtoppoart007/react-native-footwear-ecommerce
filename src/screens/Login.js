import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../theme/Colors';
import {Icon, Input} from 'react-native-elements';
import Font from '../theme/Font';
import {useNavigation} from '@react-navigation/native';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {USER_LOGIN_URL} from '../services/api';
import {setAuthUser} from '../slices/Auth.slice';
import {setToken} from '../services/storage';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email?.length) {
      SimpleToast.show('Please enter valid email');
      return false;
    }
    if (!password.length || password?.length < 6) {
      SimpleToast.show('Please enter valid more than six digit password');
      return false;
    }

    const response = await axios.post(USER_LOGIN_URL, {email, password});
    if (response?.status === 200) {
      const result = response?.data;
      dispatch(setAuthUser(result?.user));
      await setToken(result?.user?.session_key);
      SimpleToast.show(result?.message);
    } else {
      SimpleToast.show(response?.message?.toString());
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
                    source={require('../assets/images/shue-app-logo.png')}
                  />
                </View>
              </View>
              <View style={styles.curveBottomSection}>
                <Text style={styles.title}>Sign in</Text>
              </View>
            </View>

            <View>
              <View>
                <Input
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  style={styles.inputBgColor}
                  inputContainerStyle={styles.inputContainerStyle}
                  placeholder="Username"
                  leftIcon={{
                    type: 'font-awesome',
                    name: 'user-o',
                    color: '#626262',
                  }}
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View>
                <Input
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  style={styles.inputBgColor}
                  placeholder="Password"
                  leftIcon={{
                    type: 'antdesign',
                    name: 'unlock',
                    color: '#626262',
                  }}
                  rightIcon={() => (
                    <Icon type={'feather'} name={'eye'} color={'#626262'} />
                  )}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View style={{paddingHorizontal: 20}}>
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
                <View style={{marginVertical: 5}}>
                  <View style={styles.membershipSection}>
                    <View>
                      <Text style={styles.membershipText}>Not a Member</Text>
                    </View>
                    <View style={{marginHorizontal: 5}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Sign Up</Text>
                      </TouchableOpacity>
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
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  inputStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 18,
    color: Colors.primary,
    backgroundColor: Colors.invertBackground,
  },
  inputContainerStyle: {
    width: widthPercentageToDP('90%'),
    height: 60,
    backgroundColor: '#E7E4E4FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
    borderColor: '#E7E4E4FF',
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
    fontSize: 24,
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

export default Login;
