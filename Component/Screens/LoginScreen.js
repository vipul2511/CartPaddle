import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,

} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import resp from 'rn-responsive-font'
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

console.disableYellowBox = true




class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.loginCall = this.loginCall.bind(this);
    this.state = {
      phone_number: '',
      password: '',

      baseUrl: 'https://www.cartpedal.com/frontend/web/'
        // baseUrl: 'http://cartpadle.atmanirbhartaekpahel.com/frontend/web/',
    }
  }

  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  CheckTextInput = () => {
   
   
    if (this.state.phone_number === '') {
      //Check for the Name TextInput
      alert('Please Enter Phone Number ');

    }
    else if (this.state.password === '') {
      alert('Please Enter Password');
    }

    else {
      this.showLoading();
      this.loginCall();
    //  this.props.navigation.navigate('DashBoardScreen')

    }
  };

  LoginOrNot = async () => {
    await AsyncStorage.setItem('@is_login', "1");

  }

  loginCall() {
    let formData = new FormData()

    formData.append('identity', '+91' + this.state.phone_number)

    formData.append('password', this.state.password)
    //console.log('form data==' + formData)

    var otpUrl = this.state.baseUrl + 'api-user/login'
    console.log('Login Url:' + otpUrl)
    fetch(otpUrl, {
      method: 'Post',
      headers: {
        'Content-Type': 'multipart/form-data',
        device_id: '1234',
        device_token: '1111',
        device_type: 'android',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(responseData => {
        this.hideLoading();
        if (responseData.code == '200') {
          this.LoginOrNot();
          this.props.navigation.navigate('DashBoardScreen')
         // this.props.navigation.navigate('EditProductScreen')
          Toast.show(responseData.message);
          this.SaveLoginUserData(responseData);


        } else {
          // alert(responseData.data);
          alert(responseData.data.password)

        }

        console.log('response object:', responseData)
        console.log('User user ID==' + responseData.data.userid)
        console.log('access_token ',responseData.data.access_token)
       
      })
      .catch(error => {
        this.hideLoading();
        console.error(error)
      })

      .done()


  }

  async SaveLoginUserData(responseData){
    await AsyncStorage.setItem('@user_name', responseData.data.username.toString());
    await AsyncStorage.setItem('@access_token', responseData.data.access_token.toString());
    
   
  }

 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container2}>
            <Image
              source={require('../images/logo_cart_paddle.png')}
              style={styles.ImageView}
            />
            <Text style={styles.CartTextStyle}>cartpaddle</Text>
            <View style={styles.box}></View>
            <Text style={styles.UserName}>Phone Number</Text>
            <View style={styles.inputView}>
              <View style={{ flexDirection: 'row', marginLeft: 15 }}></View>

              <TextInput
                placeholder=''
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                keyboardType={'numeric'}
                style={styles.input}
                maxLength={10}
                onChangeText={phone_number => this.setState({ phone_number })}
              />
            </View>
            <Text style={styles.UserName}>Password</Text>
            <View style={styles.inputView}>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}></View>

              <TextInput
                placeholder=''
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity>
              <Text
                style={styles.forgetButton}
                onPress={() => {
                  this.props.navigation.navigate('ForgotPasswordScreen')
                }}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.2}
              onPress={() => {
                this.CheckTextInput()

              }}>
              <Text style={styles.buttonWhiteTextStyle}>Sign in</Text>
            </TouchableOpacity>
            {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#F01738" />



              </View>
            )}
            <View style={styles.horizontal}>
              <View style={styles.hairline} />
              <Text style={styles.OrText}>or</Text>
              <View style={styles.hairline} />
            </View>
            <TouchableOpacity
              style={styles.SignUPText}
              onPress={() => {
                this.props.navigation.navigate('PhoneScreen')
              }}>
              <Text style={styles.color}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.account}>Don't have an account ?</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  container2: {
    height: 780,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    marginTop: 60,
    height: resp(40),
    width: resp(40),
  },
  CartTextStyle: {
    marginTop: resp(0),
    fontSize: resp(30),
    color: '#000',
    fontWeight: 'bold',
  },
  buttonWhiteTextStyle: {
    textAlign: 'center',
    fontSize: resp(16),
    color: 'white',
    alignContent: 'center',
  },
  ImageView: {
    height: resp(100),
    width: resp(100),
    backgroundColor: 'white',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: resp(80),
  },
  OrText: {
    fontFamily: 'AvenirNext-Bold',
    color: 'red',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: 165,
  },
  UserName: {
    color: 'gray',
    width: resp(350),
    fontSize: resp(12),
    textAlign: 'left',
  },
  forgetButton: {
    color: 'black',
    width: resp(380),
    height: resp(50),
    marginRight:resp(20),
    textAlign: 'right',
  },
  SignUPText: {
    color: 'red',
    marginTop: 10,
    position: 'absolute', //Here is the trick
    bottom: 30,
  },
  color: {
    color: 'red',
  },
  account: {
    color: 'gray',
    marginTop: 10,
    position: 'absolute', //Here is the trick
    bottom: 10,
  },
  input: {
    color: 'black',
    width: 300,
    height: 50,
    padding: 10,
    textAlign: 'left',
  },

  inputView: {
    width: '90%',
    marginBottom: 15,
    alignSelf: 'center',
    borderColor: '#f2000c',
    borderBottomWidth: 1,
  },
  loginButtonStyle: {
    marginTop: 10,
    width: resp(350),
    height: resp(50),
    padding: 10,
    backgroundColor: '#f2000c',
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
})

export default LoginScreen
