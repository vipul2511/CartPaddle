import React, { Component, useState } from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import Toast from 'react-native-simple-toast'
import CustomMenuIcon from './CustomMenuIcon'
import { SliderBox } from 'react-native-image-slider-box'
import ReadMore from 'react-native-read-more-text'



function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={item.photo} style={styles.image} />
      <View style={styles.MultipleOptionContainer}>
        <Image
          source={ require('../images/multipleImageIcon.png')}
          style={styles.MultipleIconStyle}></Image>
      </View>
      <View>
        <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
      </View>

      <View style={styles.box}>
       
          <View style={styles.itemPriceContainer}>
           <Text style={styles.itemPriceStyle}>
              {'\u20B9'} {item.products[0].price}
            </Text>
          </View>
         
          <View style={styles.eyeButtonContainer}>
            <Image source={require('../images/shopping-cart-Icon.png')} style={styles.ShopingCartStyle}></Image>

           
          </View>
         
          <View style={styles.ListMenuContainer}>
            <TouchableOpacity>
              <CustomMenuIcon
                menutext='Menu'
                menustyle={{
                  marginRight: 5,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
                textStyle={{
                  color: 'white',
                }}
                option1Click={() => {
                  Toast.show('CLicked Shared Link', Toast.LONG)
                }}
                option2Click={() => {
                  Toast.show('CLicked Forward Link', Toast.LONG)

                  // this.props.navigation.navigate('BluetoothDeviceList')
                }}
              />
            </TouchableOpacity>
          </View>
          </View>
     
    </View>
  )
}

class OpenForProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.UserProfileCall = this.UserProfileCall.bind(this),
    this.state = {
      isModalVisible: false,
      userId:'',
      profileID:'',
      ProfileData:'',
      baseUrl: 'https://www.cartpedal.com/frontend/web/',
      grid_data: [
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          ProdcutName: 'Kurti Patiyala',
          price: '246',
          photo: require('../images/itemImages.png'),
          Shopping_cart: require('../images/shopping-cart-Icon.png'),
          total_view: '20',
        },
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          price: '246',
          ProdcutName: 'Beats by Dre Headset',
          photo: require('../images/itemImages2.png'),
          Shopping_cart: require('../images/shopping-cart-Icon.png'),
          total_view: '20',
        },
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          price: '246',
          ProdcutName: 'kurti patiyala',
          photo: require('../images/ItemImage3.png'),
          Shopping_cart: require('../images/shopping-cart-Icon.png'),
          total_view: '20',
        },
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          price: '246',
          ProdcutName: 'Beats by Dre Headset',
          photo: require('../images/itemImage4.png'),
          Shopping_cart: require('../images/shopping-cart-Icon.png'),
          total_view: '20',
        },
      ],
      images: [
        require('../images/slider_images.png'),
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
      ],
     
      data: [
        {
          ImagePerson: require('../images/RiyaJainImage.png'),
          personName: 'Rahul Jain',
          Description: ' Description is the pattern of narrative',
          message_icon: require('../images/message_icon.png'),
          View_all: 'View All',
          menuButtom: require('../images/more.png'),
          productImage: require('../images/ProductImage.png'),
          ItemName: 'Western Wear',
          ItemPrice: '500',
          productImage2: require('../images/ProductImage2.png'),
          ItemName2: 'Foot Wear',
          ItemPrice2: '300',
          productImage3: require('../images/ProductImages3.png'),
          ItemName3: 'Accessories ',
          ItemPrice3: '500',
          productImage4: require('../images/productImage6.png'),
          ItemName4: 'Ethnic Wear ',
          ItemPrice4: '300',
        },
      ],
    }
  }

  async componentDidMount() {

    this.UserProfileCall();
    AsyncStorage.getItem('@user_id').then((userId) => {
      if (userId) {
          this.setState( { userId: userId });
          console.log("  user id ====" + this.state.userId);
        //  this.UserProfileCall();
      }
  });
  AsyncStorage.getItem('@PofileUser').then((profileID) => {
    if (profileID) {
        this.setState( { profileID: profileID });
        console.log("  Profile ID ====" , responseData.data.id);
        
    }
});
}
  actionOnRow(item) {
    console.log('Selected Item :', item)
    this.props.navigation.navigate('ProductDetailScreen')
  }
  UserProfileCall() {
    let formData = new FormData()
  
    formData.append('user_id', + 10)
  
    formData.append('profile_id',9)
    console.log('form data==' + formData)
  
    var userProfile = this.state.baseUrl + 'api-user/user-profile'
    console.log('UserProfile Url:' + userProfile)
    fetch(userProfile, {
      method: 'Post',
      headers: {
        'Content-Type': 'multipart/form-data',
        device_id: '1234',
        device_token: '1111',
        device_type: 'android',
        Authorization: 'Bearer xriPJWJGsQT-dUgP4qH11EMM357_kEaan7zJ4Vty'
      },
      body: formData,
    })
      .then(response => response.json())
      .then(responseData => {
       // this.hideLoading();
        if (responseData.code == '200') {
         
          this.props.navigation.navigate('OpenForProfileScreen')
         // this.props.navigation.navigate('EditProductScreen')
          Toast.show(responseData.message);
          this.setState({ProfileData:responseData.data})
        //  this.SaveUserProfileData(responseData);
  
  
        } else {
          // alert(responseData.data);
          alert(responseData.message)
  
        }
  
        console.log('response object:', responseData)
        console.log('User user ID==' + responseData.data.userid)
        console.log('access_token ',responseData.data.access_token)
        console.log('Profile ID===== ',responseData.data.id)
       
      })
      .catch(error => {
      //  this.hideLoading();
        console.error(error)
      })
  
      .done()
  
  
  }
  async SaveUserProfileData(responseData){
    await AsyncStorage.setItem('@user_id', responseData.data.userid.toString());
    await AsyncStorage.setItem('@access_token', responseData.data.access_token.toString());
    await AsyncStorage.setItem('@PofileUser',responseData.data.id.toString());
     
 console.log('Profile',responseData.data.userId);
}
   
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.BackButtonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../images/back_blck_icon.png')}
                style={styles.backButtonStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.TitleContainer}>
            <Image
              source={require('../images/logo_cart_paddle.png')}
              style={styles.LogoIconStyle}
            />
            <TouchableOpacity
              style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.TitleStyle}>cardpaddle</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.SearchContainer}
           onPress={() => {
           
            this.props.navigation.navigate('SearchBarScreen')
          }}>
            <Image
              source={require('../images/search.png')}
              style={styles.SearchIconStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.MainContentBox}>
          <ScrollView>
            <View style={styles.sliderImageContainer}>
              <SliderBox
                images={this.state.images}
                style={styles.sliderImageStyle}>

              </SliderBox>

              <View style={styles.RiyaImageContainer}>
                <TouchableOpacity >
                  <Image
                    source={require('../images/riyaJainProfileImage.png')}
                    style={styles.RiyaImageViewStyle}
                  />
                  <Image
                    source={require('../images/status_add_largeicon.png')}
                    style={styles.StatusAddLargeStyle}></Image>
                </TouchableOpacity>
              </View>

             
               </View>
              <View style={styles.ProfileInfoContainer}>
              <Text style={styles.PersonNameStyle}>Rahul</Text>
              <View style={styles.ListMenuContainer2}>
          <TouchableOpacity>
            <View style={styles.messageButtonContainer}>
              <Image
                source={ require('../images/message_icon.png')}
                style={styles.messageButtonStyle}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.messageButtonContainer}>
              <Image
                source={ require('../images/Heart_icon.png')}
                style={styles.heartButtonStyle}></Image>
            </View>
          </TouchableOpacity>
        
          <CustomMenuIcon
            //Menu Text
            menutext='Menu'
            //Menu View Style
            menustyle={{
              marginRight: 5,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            //Menu Text Style
            textStyle={{
              color: 'white',
            }}
            //Click functions for the menu items
            option1Click={() => {
              Toast.show('CLicked Shared Link', Toast.LONG)
            }}
            option2Click={() => {
              Toast.show('CLicked Forward Link', Toast.LONG)
            }}
          />
        </View>
              </View>
              <View style={styles.PersonInfoContainer}>
                
                <View style={styles.card}>
                  <ReadMore numberOfLines={2}
                    onReady={this._handleTextReady}>
                    <Text style={styles.PersonDescriptionStyle}>
                      Description is the pattern of narrative development that aims
                      to make vivid a place, object, character, or group.
                      Description is one of four rhetorical modes, along with
                      exposition, argumentation, and narration.
                      
                </Text>
                  </ReadMore>
                </View>
              </View>
      
            <View style={styles.horizontalLine}>
              <View style={styles.hairline} />
            </View>

         
            <FlatList
              style={{ flex: 1 }}
              data={this.state.ProfileData}
            //  renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.ProdcutName}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => this.actionOnRow(item)}>
                  <View>
                    <Item item={item} />
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </ScrollView>

        </View>
        <View style={styles.TabBox}>
          <View style={styles.tabStyle}>
            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('WelcomeActivity')
              }}>
              <Image
                source={require('../images/home_active_icon.png')}
                style={styles.StyleHomeTab}
              />

              <Text style={styles.bottomActiveTextStyle}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('OpenForPublicScreen')
              }}>
              <Image
                source={require('../images/group_inactive_icon.png')}
                style={styles.StyleOpenForPublicTab}
              />
              <Text style={styles.bottomInactiveTextStyle}>
                Open for Public
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('CartScreen')
              }}>
              <Image
                source={require('../images/cart_bag_inactive_icon.png')}
                style={styles.styleChartTab}
              />
              <Text style={styles.bottomInactiveTextStyleChart}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('ChatScreen')
              }}>
              <Image
                source={require('../images/chat_inactive_icon.png')}
                style={styles.StyleChatTab}
              />
              <Text style={styles.bottomInactiveTextStyle}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('SettingScreen')
              }}>
              <Image
                source={require('../images/setting_inactive_icon.png')}
                style={styles.StyleSettingTab}
              />
              <Text style={styles.bottomInactiveTextStyle}>Setting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerView: {
    flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 20,
  },
  BackButtonContainer: {
    flex: 0.2,
    marginLeft: 10,
    backgroundColor: 'white',
  },
  backButtonStyle: {
    margin: 10,
    height: 20,
    width: 20,
  },
  ListMenuContainer2: {
  
    flexDirection: 'row',
    flex: 0.2,
    width: resp(0),
    height: resp(30),
  
  },
  TitleContainer: {
    flexDirection: 'row',
    flex: 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoIconStyle: {
    margin: 5,
    height: 30,
    width: 30,
  },
  TitleStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: resp(20),
    textAlign: 'center',
  },
 
  messageButtonContainer: {
    margin: resp(5),
    marginTop: resp(5),
    width: resp(15),
    height: resp(15),
    borderRadius: resp(50),
    backgroundColor: '#ebced7',
  },
  messageButtonStyle: {
    marginTop: resp(4),
    color: '#F01738',
    width: resp(7),
    height: resp(7),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartButtonStyle: {
    marginTop: resp(4),
    color: '#F01738',
    width: resp(10),
    height: resp(8),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchContainer: {
    flex: 0.2,
    backgroundColor: '#fff',
  },
  SearchIconStyle: {
    margin: 5,
    marginRight: 20,
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },
 

  card: {
    marginHorizontal: 20,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 1,

  },
  MainContentBox: {
    flex: 1,
    flexDirection: 'column',
  },
  TabBox: {
    flex: 0.1,
    color: '#000',
  },
  tabStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
  tabButtonStyle: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  StyleSettingTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleChartTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomInactiveTextStyleChart: {
    color: '#887F82',
    fontSize: resp(10),
    marginTop: 3,
    marginLeft: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  bottomInactiveTextStyle: {
    color: '#887F82',
    fontSize: resp(10),
    marginTop: 3,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  StyleHomeTab: {
    marginTop: 5,
    width: 30,
    height: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  bottomActiveTextStyle: {
    color: '#FB3954',
    fontSize: resp(10),
    marginTop: 5,
    textAlign: 'center',
  },
  StyleOpenForPublicTab: {
    marginTop: 11,
    marginRight: 10,
    width: 38,
    height: 23,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleChatTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderImageContainer: {
    width: resp(375),
    height: resp(200),
  },
  sliderImageStyle: {
    width: resp(420),
    height: resp(180),
  },
  RiyaImageContainer: {
    marginBottom: resp(30),
    margin: resp(10),
    flexDirection: 'column',
    flex: 0.2,
    width: resp(80),
    height: resp(80),
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
  RiyaImageViewStyle: {
    margin: resp(10),
    width: resp(90),
    height: resp(90),
    borderRadius: resp(10),
    borderWidth: 2,
    borderColor: '#fff',
  },
  StatusAddLargeStyle: {
    marginTop: resp(-20),
    marginLeft: resp(80),
    width: resp(30),
    height: resp(30),
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
 
 
  ProfileInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: resp(30),
    backgroundColor:'white',
    color: '#fff',
  },
  PersonInfoContainer: {
    flexDirection: 'column',
   
    width: resp(333),
    backgroundColor:'white',
    height: resp(66),
  },
  PersonNameStyle: {
      flex:0.8,
    marginLeft: resp(20),
    fontSize: resp(16),
    width: resp(70),
    height: resp(20),
    color: '#2B2B2B',
    backgroundColor:'white',
    fontWeight: 'bold',
  },
  PersonDescriptionStyle: {
    marginTop: resp(-2),
    marginLeft: resp(30),
    fontSize: resp(12),
    width: resp(334),
    height: resp(44),
    color: '#7F7F7F',
  },
 
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: resp(2),
  },
  hairline: {
    backgroundColor: '#C8C7CC80',
    height: 5,
    width: '100%',
  },
 
 
  ImageViewStyle: {
    margin: resp(8),
    width: resp(55),
    height: resp(55),
    borderWidth: 2,
    borderColor: '#F01738',
  },
 


  image: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 0,
    marginRight:resp(-100),
    borderRadius: 10,
    width: resp(180),
    height: resp(196),
  },
  listItem: {
    marginTop: resp(15),
    width: '50%',
    flexDirection: 'column',
    margin: resp(0),
   
    backgroundColor: 'white',
    borderRadius: 10,
  },
  MultipleOptionContainer: {
    marginLeft: 20,
    position: 'absolute',
    bottom: 50,
    width: 14,
    height: 14,
    borderRadius: resp(20),
    backgroundColor: '#fff',
  },
  MultipleIconStyle: {
    marginLeft: 20,
    width: resp(13.85),
    height: resp(13.85),
    position: 'absolute', //Here is the trick
    bottom: 0,
    right: 1,
  },
  itemNameStyle: {
    color: '#887F82',
    width:'150%',
    backgroundColor:'white',
    marginLeft: resp(15),
    fontSize: resp(14),
  },
  itemPriceStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: resp(7),
    fontSize: resp(13),
  },
  itemPriceContainer: {
    flex: 0.8,
    marginLeft:resp(15),
    flexDirection: 'row',
    
  },
  box: {
    width: resp(200),
    height: resp(25),
    backgroundColor: 'white',
    flexDirection: 'row',
  
  },
  priceContainer: {
    
    marginLeft:resp(-5),
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ListMenuContainer: {
    flexDirection: 'row',
    flex: 0.1,
    backgroundColor: 'white',
    width: resp(0),
    
  },
  eyeButtonContainer: { 
    flex:0.1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
   marginBottom:resp(2),
    width: resp(20),
    height: resp(20),
    borderRadius: resp(50),
    backgroundColor: '#ebced7',
  },
  ShopingCartStyle: {
    marginTop: resp(0),
    width: 10,
    height: 11,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
})
export default OpenForProfileScreen;
