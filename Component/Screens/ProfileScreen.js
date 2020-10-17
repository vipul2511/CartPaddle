import React, { Component } from 'react'
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
  TouchableNativeFeedback,
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';
import ProfileCustomMenuIcon from './ProfileCustomMenuIcon'
import Toast from 'react-native-simple-toast'
import CustomMenuIcon from './CustomMenuIcon'
import { SliderBox } from 'react-native-image-slider-box'
import ReadMore from 'react-native-read-more-text'
import ProductMenuIcon from './ProductMenuIcon'
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from "react-native-image-picker";



function Item2({ item }) {
  return (
    <View style={styles.storyItemBox}>
      <Image source={item.StoryImage} style={styles.ImageViewStyle} />
      <Image
        source={item.status_add_icon}
        style={styles.StatusAddStyle}></Image>
      <Text style={styles.storyTextView}>{item.StoryPerson}</Text>
    </View>
  )
}
let Image_Http_URL ={ uri: 'https://www.cartpedal.com/frontend/web/product/product_91_01602064139.jpg'};

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      
      <Image  source={Image_Http_URL} 
            style={styles.image} />
      <View style={styles.MultipleOptionContainer}>
        <Image
          source={require('../images/multipleImageIcon.png')}
          style={styles.MultipleIconStyle}></Image>
      </View>
      <View>
        <Text style={styles.itemNameStyle}>{item.name}</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.priceContainer}>
          <View style={styles.itemPriceContainer}>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'} {item.price}
            </Text>
          </View>

          <View style={styles.eyeButtonContainer}>
            <Image source={ require('../images/eye_icon.png')} style={styles.eyeButtonStyle}></Image>

           
          </View>
          <Text style={styles.viewTextStyle}>{item.total_view}</Text>
          <View style={styles.ListMenuContainer}>
            <TouchableOpacity>
              <ProductMenuIcon
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
                  Toast.show('CLicked Unshow Link', Toast.LONG)
                }}
                option2Click={() => {
                  Toast.show('CLicked Share Link', Toast.LONG)
                }}
                option3Click={() => {
                  Toast.show('CLicked Forward Link', Toast.LONG)
                }}
                option4Click={() => {
                  Toast.show('CLicked Edit Link', Toast.LONG)
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.ProductListCall = this.ProductListCall.bind(this),
    this.ProfileViewCall = this.ProfileViewCall.bind(this),
    this.state = {
      pickedImage: null,
      userId:'',
      access_token:'',
      productName:'',
      baseUrl: 'https://www.cartpedal.com/frontend/web/',
      isModalVisible: false,
      productList:'',
     
      images: [
        require('../images/slider_images.png'),
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
        'https://cdn.wallpapersafari.com/86/73/JgYos9.jpg',
      ],
      data1: [
        {
          StoryImage: require('../images/storyImage_1.png'),
          StoryPerson: 'Your Story',
          status_add_icon: require('../images/status_add_icon.png'),
        },
        {
          StoryImage: require('../images/story_images_2.png'),
          StoryPerson: '1 hour',
        },
        {
          StoryImage: require('../images/story_images_3.png'),
          StoryPerson: '45 mint ago',
        },
        {
          StoryImage: require('../images/story_images_4.png'),
          StoryPerson: '15 min ago',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: '30 mint ago',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: '1 mint ago',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: '18 min ago',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: 'just now',
        },
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
  
  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });

      }
    });
  }
  actionOnRow(item) {
    console.log('Selected Item :', item)
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  
  async componentDidMount() {
    this.ProfileViewCall();
   this.ProductListCall();
    
          AsyncStorage.getItem('@user_id').then((userId) => {
            if (userId) {
                this.setState( { userId: userId });
                console.log(" Edit user id ====" + this.state.userId);
              // this.ProductListCall()
            }
        });
      }


      ListEmpty = () => {
        return (
           
            <View style={styles.container}>
                <Text style={{ 
             alignSelf:'center',
             marginTop:resp(50),
             
              }}>No Data </Text>
            </View>
        );
      };
      
 
      ProfileViewCall() {
        let formData = new FormData()
        var urlprofile = 'https://www.cartpedal.com/frontend/web/api-user/view-profile?user_id=10'
        console.log('profileurl :' + urlprofile)
        fetch(urlprofile, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            device_id: '1234',
            device_token: '1111',
            device_type: 'android',
            Authorization: 'Bearer xriPJWJGsQT-dUgP4qH11EMM357_kEaan7zJ4Vty'
          },
          // Params: JSON.stringify({
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
             // this.setState({productList:responseData.data})
            //  this.SaveLoginUserData(responseData);
      
            console.log('response profile object:', responseData)
      
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
      
 
ProductListCall() {
  let formData = new FormData()

  //console.log('form data==' + formData)
 // var urlProduct = 'https://www.cartpedal.com/frontend/web/api-product/product-list'
  var urlProduct = 'https://www.cartpedal.com/frontend/web/api-product/product-list?user_id=10&type=0'
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
    // Params: JSON.stringify({
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
        this.setState({productList:responseData.data})
      //  this.SaveLoginUserData(responseData);

      console.log('response object:', responseData)

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
                <TouchableOpacity 
                 onPress={() => {
                  this.pickImageHandler()        
                  }}>
                  <Image
                    source={this.state.pickedImage}
                    style={styles.RiyaImageViewStyle}
                  />
                  <Image
                    source={require('../images/status_add_largeicon.png')}
                    style={styles.StatusAddLargeStyle}></Image>
                </TouchableOpacity>
              </View>

              <View style={styles.sliderMenuContainer}>
                <ProfileCustomMenuIcon
                  menustyle={{
                    marginRight: 5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                  textStyle={{
                    color: 'white',
                  }}
                  option1Click={() => {
                    Toast.show('OPTION1 CLICKED', Toast.LONG)
                  }}
                  option2Click={() => {
                    Toast.show('OPTION2 CLICKED', Toast.LONG)
                  }}
                  option3Click={() => {
                    this.props.navigation.navigate('UploadCoverPhotoScreen')
                  }}
                />
              </View>
            </View>
            <View style={styles.ProfileInfoContainer}>
              <View style={styles.PersonInfoContainer}>
                <Text style={styles.PersonNameStyle}>No name</Text>
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
              <View style={styles.sliderMenuContainer2}>

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
              <View style={styles.TotalBox}>
                <View style={styles.TotalProfileViewContainer}>
                  <Text style={styles.TotalProfileTextStyle}>162</Text>
                  <Text style={styles.TotalProfileViewTextStyle}>
                    Total Profile Views
                  </Text>
                </View>
                <View style={styles.TotalProductViewContainer}>
                  <Text style={styles.TotalProfileTextStyle}>100</Text>
                  <Text style={styles.TotalProductViewTextStyle}>
                    Total Product Views
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.horizontalLine}>
              <View style={styles.hairline} />
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ flex: 1, flexDirection: 'row' }}
              data={this.state.data1}
              keyExtractor={item => item.StoryImage}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onLongPress={() => this.actionOnRow(item)}>
                  {/* onPress={ Toast.show("please Long press")} */}

                  <View>
                    <Item2 item={item} />
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
            <Modal
              isVisible={this.state.isModalVisible}
              style={styles.modal}
              animationType="slide"

              transparent={true}
              onBackdropPress={() => this.setState({ isModalVisible: false })}
              >


              <Image
                source={require('../images/modal_close.png')}
                style={styles.CloseButtonStyle}
              />
            <View style={styles.DeleteContainer}>
             <Image
                source={require('../images/modal_delete.png')}
                style={styles.DeleteButtonStyle}
              />
              <Text style={styles.DeleteStutsStyle}>Delete Status</Text>
              </View>
              <Text style={styles.DeleteStutsDiscraptionStyle}>Are you sure you want to remove this status?</Text>

              <View style={styles.ButtonContainer}>
                <View style={styles.EmptyButtonCOntainer}></View>
                <TouchableOpacity style={styles.YesButtonContainer}
                            isVisible={this.state.isModalVisible}
                            onPressOut={() => this.setState({ isModalVisible: false })}>
                                <Text style={styles.YesTextStyle}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.NoButtonContainer}
                             isVisible={this.state.isModalVisible}
                            onPressOut={() => this.setState({ isModalVisible: false })}>
                                <Text style={styles.NoTextStyle}>NO</Text>
                            </TouchableOpacity>
              </View>
            </Modal>

            <View style={styles.horizontalLine}>
              <View style={styles.hairline} />
            </View>

           
            <FlatList
              style={{ flex: 1 }}
              data={this.state.productList}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.product_id}
              numColumns={2}
              ListEmptyComponent={this.ListEmpty}
            />
             <TouchableNativeFeedback 

            onPress={() => {
            this.props.navigation.navigate('HomeScreen')     
            console.log("clicked")         
            }}>
            <Image
              source={require('../images/flatin_action_icon.png')}
              style={styles.FloatingActionStyle}
            />
            </TouchableNativeFeedback >
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
    backgroundColor: '#F6F9FE',
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
  modal: {
    backgroundColor: '#fff',
    margin: resp(240), // This is the important style you need to set

    alignSelf: 'center',
    width: resp(300),
    height: resp(220),
    borderRadius: resp(30),

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
  CloseButtonStyle: {
    marginRight:resp(20),
    alignSelf: 'flex-end',
  },
  DeleteContainer:{
    marginTop:resp(-10),
    margin:resp(20),
    flexDirection:'row',
   
  },
  DeleteButtonStyle: {
    alignSelf: 'flex-start',
  },
  DeleteStutsStyle:{
    fontWeight:'bold',
    fontSize:resp(20),
   marginLeft:resp(10),
    color:'#2B2B2B'
  },
  DeleteStutsDiscraptionStyle:{
    marginLeft:resp(55),
    marginTop:resp(-20),
    color:'#7F7F7F',
    width:resp(207),
    fontSize:resp(14),
  },
  ButtonContainer:{
    height:resp(50),
    marginTop:resp(20),
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
   
  },
  EmptyButtonCOntainer:{
    flex:0.2,
   
  },
  YesButtonContainer:{
    flex:0.4,
    marginHorizontal:resp(10),
    marginLeft:resp(-10),
    width:resp(95),
    height:resp(40),
    backgroundColor:'#06BE7E',
    borderRadius:resp(40)
  },
  NoButtonContainer:{
    flex:0.4,
    marginRight:resp(20),
    width:resp(95),
    height:resp(40),
    backgroundColor:'#3C404333',
    borderRadius:resp(40)
  },
  YesTextStyle:{
    marginTop:resp(10),
    alignSelf:'center',
    fontSize:resp(15),
    color:'#FFFFFF'
  },
  NoTextStyle:{
    marginTop:resp(10),
    alignSelf:'center',
    fontSize:resp(15),
    color:'#7F7F7F'
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
  FloatingActionStyle: {
    marginTop: 5,
    width: 50,
    height: 50,
    bottom: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    right: 20,
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
    bottom: 5,
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
    marginLeft: resp(80),
    width: resp(25),
    height: resp(25),
    position: 'absolute', //Here is the trick
    bottom: 5,
  },
  sliderMenuContainer: {
    marginTop: resp(20),
    marginRight: resp(-15),
    position: 'absolute',
    top: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: resp(20),
    backgroundColor: '#9da1a3',
  },
  sliderMenuContainer2: {
    marginTop: resp(20),
    marginRight: resp(-20),
    position: 'absolute',
    top: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: resp(20),
  },
  ProfileInfoContainer: {
    flexDirection: 'column',
    width: resp(375),
    height: resp(150),
    color: '#fff',
  },
  PersonInfoContainer: {
    flexDirection: 'column',
    marginTop: resp(30),
    width: resp(333),
    height: resp(66),
  },
  PersonNameStyle: {
    marginTop: resp(-20),
    marginLeft: resp(20),
    fontSize: resp(16),
    width: resp(70),
    height: resp(20),
    color: '#2B2B2B',
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
  TotalBox: {
    flexDirection: 'row',
    width: '100%',
    marginLeft:resp(20),
    height: resp(70),
  },
  TotalProfileViewContainer: {
    flex:0.5,
    marginLeft: resp(70),
    flexDirection: 'column',

    height: resp(80),
  },
  TotalProductViewContainer: {
    marginRight: resp(70),
    flex:0.5,
    flexDirection: 'column',
   
    height: resp(100),
  },
  TotalProfileTextStyle: {
    height: resp(25),
    marginLeft: resp(38),
    width: resp(50),
    height: resp(25),
    fontSize: resp(20),
    fontWeight: 'bold',
  },
  TotalProfileViewTextStyle: {
    margin: resp(5),
    width: resp(150),
    height: resp(35),
    fontSize: resp(12),
    color: '#7F7F7F',
  },
  TotalProductViewTextStyle: {
    margin: resp(5),
    marginLeft: resp(10),
    width: resp(120),
    height: resp(35),
    fontSize: resp(12),
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
  storyItemBox: {
    height: resp(90),
    backgroundColor: 'white',
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 5,
    },
    elevation: 2,
  },
 
  ImageViewStyle: {
    margin: resp(8),
    width: resp(55),
    height: resp(55),
    borderWidth: 2,
    borderColor: '#F01738',
  },
  StatusAddStyle: {
    marginRight: resp(-50),
    marginTop: -10,
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 25,
  },
  storyTextView: {
    color: '#887F82',
    fontSize: resp(10),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  image: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 0,
    borderRadius: 10,
    width: resp(180),
    height: resp(196),
  },
  listItem: {
    marginTop: resp(5),
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
    marginLeft: resp(18),
    fontSize: resp(14),
  },
  itemPriceStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: resp(7),
    fontSize: resp(14),
  },
  itemPriceContainer: {
    flex: 0.6,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  box: {
    width: resp(200),
    height: resp(25),
    marginLeft: resp(17),
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 5,
    },
    elevation: 0,
  },
  priceContainer: {
    flex: 1,
    marginLeft:resp(-5),
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ListMenuContainer: {
    flexDirection: 'row',
    flex: 0.1,
    backgroundColor: 'white',
    width: resp(0),
    height: resp(50),
  },
  eyeButtonContainer: {
    flex: 0.2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: resp(50),
    height: resp(30),
    borderRadius: resp(50),
    backgroundColor: 'white',
  },
  eyeButtonStyle: {
    marginTop: resp(0),
    width: resp(18),
    height: resp(11.17),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: resp(30),
    height: resp(24),
    backgroundColor: '#fff',
  },
})
export default ProfileScreen
