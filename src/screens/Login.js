import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../theme/Colors';
import Layout from '../theme/Layout';
import {Icon, Input} from 'react-native-elements';
import Font from '../theme/Font';
import {useNavigation} from '@react-navigation/native';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {FETCH_USER_URL} from '../services/api';
import {setAuthUser} from '../slices/Auth.slice';
import {setToken} from '../services/storage';
import {heightPercentageToDP} from 'react-native-responsive-screen';

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

    const response = await axios.post(FETCH_USER_URL, {email, password});
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
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View style={styles.curveContainer}>
            <View style={styles.curveUpperSection}>
              <View style={styles.curveUpperSectionInner}>
                <Image
                  style={{width: 200, height: 200}}
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
                inputStyle={styles.inputStyle}
                containerStyle={styles.containerStyle}
                style={{backgroundColor: '#E7E4E4FF'}}
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
                style={{backgroundColor: '#E7E4E4FF'}}
                placeholder="Password"
                leftIcon={{type: 'antdesign', name: 'unlock', color: '#626262'}}
                rightIcon={() => (
                  <Icon type={'feather'} name={'eye'} color={'#626262'} />
                )}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 10}}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>
            <View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => handleLogin()}
                  style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 50,
                    paddingHorizontal: 10,
                  }}>
                  <View style={{width: '50%'}}>
                    <Text style={styles.membershipText}>Not a Member</Text>
                  </View>
                  <View style={{width: '50%'}}>
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
  canvas: {
    width: Layout.window.width + 5,
    height: Layout.window.height * 0.5,
    left: -1,
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
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    marginVertical: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 18,
    color: Colors.primary,
    backgroundColor: Colors.invertBackground,
  },
  inputContainerStyle: {
    height: 65,
    borderWidth: 0,
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
    color: Colors.secondary,
    textAlign: 'right',
  },
  loginButton: {
    width: 200,
    height: 50,
    backgroundColor: Colors.secondary,
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
    fontFamily: Font.PoppinsRegular,
    fontSize: 22,
    color: Colors.white,
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
