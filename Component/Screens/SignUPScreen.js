import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native'
import resp from 'rn-responsive-font'
import Toast from 'react-native-simple-toast';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

console.disableYellowBox = true
var mobileNumber, otp;
class SignUPScreen extends Component {
  constructor(props) {
    super(props)
    this.SignUPCall = this.SignUPCall.bind(this)
    this.state = {
      name: '',
      password: '',
      mobile: '',
      email: '',
      baseUrl: 'https://www.cartpedal.com/frontend/web/',
     // baseUrl: 'http://cartpadle.atmanirbhartaekpahel.com/frontend/web/',
    }
  }
  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  componentDidMount() {
    const { navigation } = this.props
    mobileNumber = navigation.getParam('mobile', 'no-mobile')
    otp = navigation.getParam('otp', 'no-otp')
    console.log(" in SignUP====== ", mobileNumber)

  }
  CheckTextInput = () => {

    if (this.state.name === '') {

      alert('Please Enter Name ');
    } else if (this.state.email == ' ' || this.validate(this.state.email)) {
      alert('Please Enter Email');
    }
    else if (this.state.password === '') {
      alert('Please Enter Password');
    }

    else {
      this.SignUPCall();
      this.showLoading();
    }
  };

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      alert('Please Enter validate Email');
      //console.log("Email is Not Correct");
      this.setState({ email: text })
      return false;
    }
    else {
      this.setState({ email: text })
      console.log("Email is Correct");
    }
  }

  SignUPCall() {
    let formData = new FormData()
    formData.append('name', this.state.name)
    formData.append('mobile', mobileNumber)
    formData.append('email', this.state.email)
    formData.append('password', this.state.password)
    console.log('form data==' + formData)

    var otpUrl = this.state.baseUrl + 'api-user/signup'
    console.log('url:' + otpUrl)
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
          this.props.navigation.navigate('DashBoardScreen')
          Toast.show(responseData.message);

        } else if(responseData.code=='500'){
          alert(responseData.data.mobile)
        }
        
        else {

          alert(responseData.data.mobile)

        }

        console.log('response object:', responseData)
      })
      .catch(error => {

        console.error(error)
      })

      .done()
  }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container2}>
            <View style={styles.headerView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/back_icon.png')}
                  style={styles.MenuHomeIconStyle}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.HeadingText}>Sign UP</Text>
            <View style={styles.box}></View>
            <Text style={styles.UserName}>UserName</Text>
            <View style={styles.inputView1}>
              <View style={{ flexDirection: 'row', marginLeft: 15 }}></View>

              <TextInput
                placeholder=''
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}
                onChangeText={name => this.setState({ name })}
              />
            </View>
            <Text style={styles.UserName}>Email</Text>
            <View style={styles.inputView1}>
              <View style={{ flexDirection: 'row', marginLeft: 15 }}></View>

              <TextInput
                placeholder=''
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}

                onChangeText={email => this.setState({ email })}
              />
            </View>

            <Text style={styles.UserName}>Password</Text>
            <View style={styles.inputView1}>
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

            <View style={styles.forgetButton}></View>

            <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.2}
              onPress={() => {
                this.CheckTextInput()

              }}>
              <Text style={styles.buttonWhiteTextStyle}>Sign Up</Text>
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
            <TouchableOpacity style={styles.SignUPText}
              onPress={() => {
                this.props.navigation.navigate('LoginScreen')
              }}>
              <Text style={styles.color}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.account}>Already have an account?</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  box: {
    marginTop: 60,
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
  buttonWhiteTextStyle: {
    textAlign: 'center',
    fontSize: resp(16),
    color: 'white',
    alignContent: 'center',
  },
  headerView: {
    flex: 0.1,
    marginTop: -70,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    height: 50,
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
  HeadingText: {
    marginTop: resp(30),
    color: 'black',
    width: resp(355),
    fontSize: resp(30),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  buttonWhiteTextStyle1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: resp(20),
    color: 'white',
    alignContent: 'center',
  },
  MenuHomeIconStyle: {
    height: 30,
    width: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'

  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginTop: 50,
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'grey',
    elevation: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
  },
  ImageIconStyle: {
    height: 25,
    width: 25,
    marginLeft: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIconStyle: {
    height: 15,
    width: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgetButton: {
    color: 'black',
    width: resp(380),
    height: resp(50),
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
    bottom: 2,
  },
  input: {
    color: 'black',
    width: 300,
    height: 50,
    padding: 10,
    textAlign: 'left',
  },
  CircleFlexDirection: {
    marginRight: 10,
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },

  inputView1: {
    width: '90%',
    marginBottom: 15,
    alignSelf: 'center',
    borderColor: '#F01738',
    borderBottomWidth: 1,
  },
  loginButtonStyle: {
    marginTop: 10,
    width: resp(350),
    height: resp(50),
    padding: 10,
    backgroundColor: '#F01738',
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
})

export default SignUPScreen;
