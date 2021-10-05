import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../theme/Colors';
import Layout from '../theme/Layout';
import {Icon, Input} from 'react-native-elements';
import Font from '../theme/Font';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Image
            style={styles.canvas}
            source={require('../assets/images/login.png')}
          />
          <KeyboardAvoidingView style={{paddingHorizontal: 35}}>
            <View>
              <Input
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Username"
                leftIcon={{type: 'font-awesome', name: 'user-o'}}
              />
            </View>
            <View>
              <Input
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Password"
                leftIcon={{type: 'antdesign', name: 'unlock'}}
                rightIcon={() => <Icon type={'feather'} name={'eye'} />}
              />
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 10}}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>
            <View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.loginButton}>
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
          </KeyboardAvoidingView>
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
  inputStyle: {
    fontFamily: Font.RobotoRegular,
    fontSize: 18,
    color: Colors.primary,
    backgroundColor: Colors.invertBackground,
  },
  inputContainerStyle: {
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: Colors.invertBackground,
  },
  forgotPassword: {
    fontFamily: Font.RobotoRegular,
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
  loginButtonText: {
    fontFamily: Font.RobotoRegular,
    fontSize: 22,
    color: Colors.white,
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

export default Login;
