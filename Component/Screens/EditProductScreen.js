import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppConst from '../Component/AppConst';
import AppImageSlider from '../Component/AppImageSlider';
import resp from 'rn-responsive-font';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
//import * as ApiClient from '../Component/ApiClient';
  
import DropDownPicker from 'react-native-dropdown-picker';

//import RNPickerSelect from 'react-native-picker-select';






const screenWidth = Dimensions.get('screen').width;

export default class EditProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.ProductCategoryCall = this.ProductCategoryCall.bind(this),
    this.ProductUnitCall = this.ProductUnitCall.bind(this),
      this.AddProductCall = this.AddProductCall.bind(this);
    this.state = {
      userId: '',
      Category: '',
      access_token: '',
      Name: '',
      Price: '',
      Unit: '',
      Bunch: '',
      Details_1: '',
      Details_2: '',
      imageList: [],
      Description: '',
      baseUrl: 'https://www.cartpedal.com/frontend/web/',
      CategoryList: [],
      ProductUnit:[]
    }



    let param = this.props.navigation.state.params;
    if (param && param.images) {
      this.state.imageList = param.images;

    }

  }

  componentDidMount() {
    AsyncStorage.getItem('@user_id').then((userId) => {
      if (userId) {
        this.setState({ userId: userId });
        console.log(" Edit user id ====" + this.state.userId);
      }
    });

    AsyncStorage.getItem('@access_token').then((access_token) => {
      if (access_token) {
        this.setState({ access_token: access_token });
        console.log(" Edit acces token ====" + this.state.access_token);
        this.ProductCategoryCall();
        this.ProductUnitCall();
      }
    });
  }


  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  CheckTextInput = () => {


    if (this.state.Category === '') {
      //Check for the Name TextInput
      alert('Please Enter Category ');

    }
    else if (this.state.Name === '') {
      alert('Please Enter Name');
    }
    else if (this.state.Price === ' ') {
      alert('Please Enter Price');
    }
    else if (this.state.Details_1 === '') {
      alert('Please Enter Details_1');
    }
    else if (this.state.Details_2 === '') {
      alert('Please Enter Details_2');
    }
    else if (this.state.Description === '') {
      alert('Please Enter Description');
    }
    else {
      this.showLoading();
      this.AddProductCall();


    }
  };

  ProductCategoryCall() {
    let formData = new FormData()

    console.log('form data==' + formData)
   
    var urlProduct = 'https://www.cartpedal.com/frontend/web/api-product/product-category-list'
    console.log('urlProduct :' + urlProduct)
    fetch(urlProduct, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        device_id: '1234',
        device_token: '1111',
        device_type: 'android',
        Authorization: 'Bearer xriPJWJGsQT-dUgP4qH11EMM357_kEaan7zJ4Vty'
      },
      // body: JSON.stringify({
      //   user_id:this.state.userId
      // }),
    })
      .then(response => response.json())
      .then(responseData => {
        // this.hideLoading();
        if (responseData.code == '200') {
          // this.LoginOrNot();
          //this.props.navigation.navigate('DashBoardScreen')
          // this.props.navigation.navigate('EditProductScreen')
          Toast.show(responseData.message);
          this.setState({ CategoryList: responseData.data })
          //  this.SaveLoginUserData(responseData);

          console.log('response object actagegg:', responseData)

        } else {
          // alert(responseData.data);
          alert(responseData.data)

        }

        // console.log('User user ID==' + responseData.data.userid)
        // console.log('access_token ',responseData.data.access_token)

      })
      .catch(error => {
        //  this.hideLoading();
        console.error(error)
      })

      .done()


  }

  ProductUnitCall() {
    let formData = new FormData()

    //console.log('form data==' + formData)
    // var urlProduct = 'https://www.cartpedal.com/frontend/web/api-product/product-list'
    var urlProductUnit = 'https://www.cartpedal.com/frontend/web/api-product/product-unit'
    console.log('urlProduct :' + urlProductUnit)
    fetch(urlProductUnit, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        device_id: '1234',
        device_token: '1111',
        device_type: 'android',
        Authorization: 'Bearer xriPJWJGsQT-dUgP4qH11EMM357_kEaan7zJ4Vty'
      },
      // body: JSON.stringify({
      //   user_id:this.state.userId
      // }),
    })
      .then(response => response.json())
      .then(responseData => {
        // this.hideLoading();
        if (responseData.code == '200') {
          // this.LoginOrNot();
          //this.props.navigation.navigate('DashBoardScreen')
          // this.props.navigation.navigate('EditProductScreen')
          Toast.show(responseData.message);
          this.setState({ ProductUnit: responseData.data })
          //  this.SaveLoginUserData(responseData);

          console.log('response object actagegg:', responseData)

        } else {
          // alert(responseData.data);
          alert(responseData.data)

        }

        // console.log('User user ID==' + responseData.data.userid)
        // console.log('access_token ',responseData.data.access_token)

      })
      .catch(error => {
        //  this.hideLoading();
        console.error(error)
      })

      .done()


  }

   AddProductCall() {
    let formData = new FormData()
    
    formData.append('user_id', this.state.userId)
    formData.append('name', this.state.Name)
    formData.append('category', this.state.CategoryList)
    formData.append('unit', this.state.Unit)
    formData.append('price', this.state.price)
    formData.append('description', this.state.Description)
    formData.append('bunch', 'nch')
    formData.append('detailone', this.state.Details_1)
    formData.append('detailtwo', this.state.Details_2)

    //formData.append('dUploads', this.state.imageList)


    console.log('form data==' + JSON.stringify(formData))


   // let responce =await ApiClient.saveProduct(formData)


    var otpUrl = this.state.baseUrl + 'api-product/add-product'
    console.log('Add product Url:' + otpUrl)
    fetch(otpUrl, {
      method: 'Post',
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
        device_id: '1111',
        device_token: '1111',
        device_type: 'android',
        // Authorization: 'Bearer' + this.state.access_token,  
        Authorization: 'Bearer xriPJWJGsQT-dUgP4qH11EMM357_kEaan7zJ4Vty'

      }),
      body: formData,
    })

      .then(response => response.json())
      .then(responseData => {
        this.hideLoading();
        if (responseData.code == '200') {
          this.props.navigation.navigate('StoryViewScreen')
          Toast.show(responseData.message);
          this.SaveProductListData(responseData)

        } else {
          // alert(responseData.data);
          // alert(responseData.data.password)

        }

        console.log('response object:', responseData)
        console.log('User user ID==', this.state.userId)
        console.log('access_token ', this.state.access_token)
        //   console.log('User Phone Number==' + formData.phone_number)
      })
      .catch(error => {
        this.hideLoading();
        console.error(error)
      })

      .done()


  }

  async SaveProductListData(responseData) {
    // await AsyncStorage.setItem('@user_id', responseData.data.userid.toString());
    // await AsyncStorage.setItem('@access_token', responseData.data.access_token.toString());
    await AsyncStorage.setItem('@name', responseData.data.name.toString());
    await AsyncStorage.setItem('@category', responseData.data.category.toString());
    await AsyncStorage.setItem('@unit', responseData.data.unit.toString());
    await AsyncStorage.setItem('@price', responseData.data.price.toString());
    await AsyncStorage.setItem('@description', responseData.data.description.toString());
    await AsyncStorage.setItem('@bunch', responseData.data.bunch.toString());
    await AsyncStorage.setItem('@detailone', responseData.data.detailone.toString());
    await AsyncStorage.setItem('@detailtwo', responseData.data.detailtwo.toString());


  }
  renderInnerImageList(item, index, separators) {
    return (
      <TouchableOpacity activeOpacity={1} style={{ flex: 1 }}>
        <Image style={styles.imageView} source={item} />


      </TouchableOpacity>
    )
  }


  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <View style={[styles.container, { backgroundColor: '#e3e3e3' }]}>

          <AppImageSlider
            sliderImages={this.state.imageList}
            rendorImages={(item, index) => this.renderInnerImageList(item, index)}

          />
        </View>

        <View style={styles.container2}>
          <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => {
                this.CheckTextInput()
                // this.props.navigation.navigate('StoryViewScreen')
              }}>
                <Text style={[styles.saveCancelButton, { borderBottomColor: 'green', color: 'green' }]}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('HomeScreen')
              }}>
                <Text style={[styles.saveCancelButton, { borderBottomColor: 'red', color: 'red', marginStart: 20 }]}>Cancel</Text>
              </TouchableOpacity>
            </View>

           
            {/* <DropDownPicker
              style={{
                alignItems: 'flex-start'
                , justifyContent: 'flex-start'
              }}
              items={this.state.CategoryList.map(item => ({ label:item.title, value:item.title }))}
              placeholder={'Please Select Category'}
              containerStyle={{ height: 50, width: 350 }}

              style={styles.inputTextView}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
            

              // onChangeItem={item => this.setState({
              //   CategoryList: item.value
              // },
              //   console.log(item.value)
              // )
              // }
            /> */}
             <TextInput
              style={styles.inputTextView}
              placeholder={AppConst.inputPH_select_cat}
              onChangeText={Category => this.setState({ Category })}
            />
         
            <TextInput
              style={styles.inputTextView}
              placeholder={AppConst.inputPH_enter_name}
              onChangeText={Name => this.setState({ Name })}
            />
            <TextInput
              style={styles.inputTextView}
              placeholder={AppConst.inputPH_price}
              onChangeText={price => this.setState({ price })}
            />
           {/* <DropDownPicker
              style={{
                alignItems: 'flex-start'
                , justifyContent: 'flex-start'
              }}
              items={this.state.ProductUnit.map(item => ({ label:item.title, value:item.title }))}
              placeholder={'Product Unit'}
              containerStyle={{ height: 50, width: 350 }}

              style={styles.inputTextView}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
           
              // onChangeItem={item => this.setState({
              //   ProductUnit: item.value
              // },
              //   console.log(item.value)
              // )
              // }
            /> */}
             
             <TextInput
              style={styles.inputTextView}
              placeholder={AppConst.inputPH_bunch}
              onChangeText={banch => this.setState({ banch })}

            />
            <TextInput
              style={styles.inputTextView}
              placeholder={AppConst.inputPH_bunch}
              onChangeText={banch => this.setState({ banch })}

            />
            <TextInput
              style={styles.inputTextView}
              placeholder={AppConst.inputPH_detail}
              onChangeText={Details_1 => this.setState({ Details_1 })}
            />

            <TextInput
              style={styles.inputTextView}
              placeholder={'Drtails 2'}
              onChangeText={Details_2 => this.setState({ Details_2 })}
            />
            <Text style={styles.DescriptionStyle}>Description </Text>
            <TextInput
              style={styles.inputTextView}
              placeholder={'(Maximum 450 characters)'}
              onChangeText={Description => this.setState({ Description })}
            />

          </ScrollView>
        </View>
        {/* <TouchableOpacity   onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', start: 20, top: 30, }}>
          <Image source={backIconWhite} style={styles.backIcon} />
        </TouchableOpacity> */}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
  },
  ShareTextStyle: {
    color: '#2B2B2B',
    marginLeft: resp(15),
  },
  saveCancelButton: {
    fontSize: 17,
    borderBottomWidth: 1,
  },
  backIcon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },

  imageView: {
    borderRadius: 5,
    width: screenWidth,
    height: screenWidth,
  },
  DescriptionStyle: {
    marginTop: resp(20),
    fontSize: resp(16),
    color: "#2B2B2B",
  },
  DescriptionStyle2: {
    width: resp(335),
    marginTop: resp(5),
    fontSize: resp(13),
    color: "#000000",
  },
  inputTextView: {
    fontSize: 17,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    marginTop: 10
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    marginTop: -50,
    paddingTop: 30,
    paddingStart: 30,
    paddingEnd: 30,
    height: resp(-50)
  },
  openButtonContainer: {
    marginTop: resp(10),
    flexDirection: 'row',
    width: resp(92),
    height: resp(24),
    borderColor: "#06BE7E",
    borderWidth: resp(2),
    borderRadius: resp(20),
    backgroundColor: '#e6f7f2',
  },
  AddIconStyle: {
    margin: resp(5)
  },
  openButtonStyle: {
    color: '#06BE7E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: resp(0),
  },
  ShareContainer: {
    flexDirection: 'row',
    marginTop: resp(10),
    width: '90%',
    height: 50,

  },
  MoreTextStyle: {
    fontWeight: 'bold',
    marginLeft: resp(10),
    fontSize: resp(16),
    color: "#06BE7E",
  },

  ShareButtonContainer: {
    marginTop: resp(10),
    marginHorizontal: (5),
    flexDirection: 'row',
    width: resp(105),
    height: resp(26),
    borderColor: "#DDDDDD",
    borderWidth: resp(2),
    borderRadius: resp(20),
    backgroundColor: '#7F7F7F1A',
  },
});
