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
import Colors from '../theme/Colors';
import {Icon, Input} from 'react-native-elements';
import Font from '../theme/Font';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

function Register() {
  const navigation = useNavigation();
  const [secureText, setSecureText] = useState(true);

  function toggleSecureInput() {
    setSecureText(!secureText);
  }

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
                <Text style={styles.title}>Sign Up</Text>
              </View>
            </View>
            <View>
              <View>
                <Input
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  style={styles.inputBgColor}
                  placeholder="Full Name"
                  leftIcon={{
                    type: 'font-awesome',
                    name: 'user-o',
                    color: '#626262',
                  }}
                />
              </View>

              <View>
                <Input
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  style={styles.inputBgColor}
                  placeholder="Username"
                  leftIcon={{
                    type: 'font-awesome',
                    name: 'user-o',
                    color: '#626262',
                  }}
                />
              </View>

              <View>
                <Input
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  style={styles.inputBgColor}
                  placeholder="Email"
                  leftIcon={{
                    type: 'material-community',
                    name: 'email-outline',
                    color: '#626262',
                  }}
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
                  secureTextEntry={secureText}
                  rightIcon={() => (
                    <Icon
                      onPress={() => toggleSecureInput()}
                      type={'feather'}
                      name={'eye'}
                      color={'#626262'}
                    />
                  )}
                />
              </View>
              <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginVertical: 10}}>
                  <View style={styles.membershipSection}>
                    <View>
                      <Text style={styles.membershipText}>
                        Already a Member
                      </Text>
                    </View>
                    <View style={{marginHorizontal: 5}}>
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
    fontFamily: Font.RobotoRegular,
    fontSize: 15,
    color: Colors.secondary,
    textAlign: 'right',
  },
  loginButton: {
    width: 250,
    height: 65,
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
