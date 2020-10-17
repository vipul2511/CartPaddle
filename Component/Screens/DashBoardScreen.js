import React, { Component } from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,

} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import CustomMenuIcon from './CustomMenuIcon'
import MenuIcon from './MenuIcon'
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';



function Item({ item }) {
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

function PersonPofile({ item }) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.box}>
        <View style={styles.ProfileImageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../images/RiyaJainImage.png')}
              style={styles.ProfileImageViewStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileInfoContainer}>
          <Text style={styles.PersonNameStyle}>{item.name}</Text>
          <Text style={styles.ProfileDescription}>{item.Description}</Text>
        </View>
        <View style={styles.ListMenuContainer}>
          <TouchableOpacity>
            <View style={styles.messageButtonContainer}>
              <Image
                source={ require('../images/message_icon.png')}
                style={styles.messageButtonStyle}></Image>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.ViewButtonContainer}
        onPress={() => {
           
        //  this.props.navigation.navigate('OpenForPublicDetail')
        }}>
           
              <Text style={styles.viewButtonStyle}>{'View All'}</Text>
            
          </TouchableOpacity>

          <MenuIcon
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
             // this.BlockUser();
               Toast.show('CLicked Block Link', Toast.LONG)
            }}
            option2Click={() => {
              Toast.show('CLicked Shared Link', Toast.LONG)
            }}
            option3Click={() => {
              Toast.show('CLicked Forward Link', Toast.LONG)
            }}
          />
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.columnView}>
          <View style={styles.ImageContainer}>
            <Image
              source={item.products[0].image}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[0].price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={item.products[0].image}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[0].price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={item.products[0].image}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[0].price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={item.products[0].image}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[0].price}
            </Text>
          </View>
        </View>

        <View style={styles.hairline} />
      </ScrollView>

      <View style={styles.hairline} />
    </View>
  )
}
class DashBoardScreen extends Component {
  constructor(props) {
    super(props)
    this.BlockUserCall = this.BlockUserCall.bind(this),
    this.RecentUpdateCall = this.RecentUpdateCall.bind(this),
    this.state = {
      baseUrl: 'https://www.cartpedal.com/frontend/web/',
      userId:'',
      data1: [
        {
          StoryImage: require('../images/storyImage_1.png'),
          StoryPerson: 'Your Story',
          status_add_icon: require('../images/status_add_icon.png'),
        },
        {
          StoryImage: require('../images/story_images_2.png'),
          StoryPerson: 'Himesh',
        },
        {
          StoryImage: require('../images/story_images_3.png'),
          StoryPerson: 'Naina',
        },
        {
          StoryImage: require('../images/story_images_4.png'),
          StoryPerson: 'Pawan',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: 'Aliyana',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: 'Raju',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: 'Aakash',
        },
        {
          StoryImage: require('../images/story_images_5.png'),
          StoryPerson: 'Harshit',
        },
      ],
      RecentUpdateProduct:'',
      
      // data: [
      //   {
      //     ImagePerson: require('../images/RiyaJainImage.png'),
      //     personName: 'Rahul Jain',
      //     Description: ' Description is the pattern of narrative',
      //     message_icon: require('../images/message_icon.png'),
      //     View_all: 'View All',
      //     menuButtom: require('../images/more.png'),
      //     productImage: require('../images/ProductImage.png'),
      //     ItemName: 'Western Wear',
      //     ItemPrice: '500',
      //     productImage2: require('../images/ProductImage2.png'),
      //     ItemName2: 'Foot Wear',
      //     ItemPrice2: '300',
      //     productImage3: require('../images/ProductImages3.png'),
      //     ItemName3: 'Accessories ',
      //     ItemPrice3: '500',
      //     productImage4: require('../images/productImage6.png'),
      //     ItemName4: 'Ethnic Wear ',
      //     ItemPrice4: '300',
      //   },
      //   {
      //     ImagePerson: require('../images/productImage4.png'),
      //     personName: 'Gaurav Jain',
      //     Description: ' Description is the pattern of narrative',
      //     message_icon: require('../images/message_icon.png'),
      //     View_all: 'View All',
      //     menuButtom: require('../images/more.png'),
      //     productImage: require('../images/productImage4.png'),
      //     ItemName: 'Western Wear',
      //     ItemPrice: '120',
      //     productImage2: require('../images/productImage5.png'),
      //     ItemName2: 'Foot Wear',
      //     ItemPrice2: '216',
      //     productImage3: require('../images/productImage5.png'),
      //     ItemName3: 'Accessories ',
      //     ItemPrice3: '246',
      //     productImage4: require('../images/productImage6.png'),
      //     ItemName4: 'Ethnic Wear ',
      //     ItemPrice4: '296',
      //   },
      // ],
    }
  }

  actionOnRow(item) {
    console.log('Selected Item :', item)
  }

  actionOnViewProfile(item) {
    console.log('Selected view Item :', item)
     // this.UserProfileCall();
    this.props.navigation.navigate('OpenForProfileScreen')
   

   
  }




  async componentDidMount() {
   this.RecentUpdateCall();

    AsyncStorage.getItem('@user_id').then((userId) => {
      if (userId) {
          this.setState( { userId: userId });
          console.log("Edit user id Dhasbord ====" + this.state.userId);
          //this.RecentUpdateCall();
      }
  });
 
}
ListEmpty = () => {
  return (
     
      <View style={styles.container}>
          <Text style={{ 
        margin:resp(175),
       
        }}>No Data </Text>
      </View>
  );
};

BlockUserCall() {
  let formData = new FormData()
    
    formData.append('user_id', 10)
    formData.append('block_id', 10)
    formData.append('type', 0)
    console.log('form data==' + JSON.stringify(formData))


  


  // var CartList = this.state.baseUrl + 'api-product/cart-list'
    var BlockUserUrl = "https://www.cartpedal.com/frontend/web/api-product/cart-list"
    console.log('BlockUser Url:' + BlockUserUrl)
    fetch(BlockUserUrl, {
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
    //   this.hideLoading();
        if (responseData.code == '200') {
        //  this.props.navigation.navigate('StoryViewScreen')
          Toast.show(responseData.message);
          this.setState({CartListProduct:responseData.data})
        // this.SaveProductListData(responseData)

        } else {
          // alert(responseData.data);
          // alert(responseData.data.password)

        }

        console.log('response object:', responseData)
        console.log('User user ID==', JSON.stringify(responseData))
        // console.log('access_token ', this.state.access_token)
        //   console.log('User Phone Number==' + formData.phone_number)
      })
      .catch(error => {
      //  this.hideLoading();
        console.error(error)
      })

      .done()

}
 
RecentUpdateCall() {
  let formData = new FormData()

  console.log('form data==' + formData)
 // var urlProduct = 'https://www.cartpedal.com/frontend/web/api-product/product-list'
  var urlRecentUpdate = 'https://www.cartpedal.com/frontend/web/api-user/recent-update?user_id=10'
  console.log('urlProduct :' + urlRecentUpdate)
  fetch(urlRecentUpdate, {
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
       
        Toast.show(responseData.message);
        this.setState({RecentUpdateProduct:responseData.data})
       this.SaveUserProfileData(responseData);
      console.log('response Recent update :', responseData)
      console.log('PRofiles ID===',responseData.data.id)
        

      } else {
        // alert(responseData.data);
        alert(responseData.data)

      }

       
     
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
  
 console.log('Profile',responseData.data.id);
}

  render() {
    console.log("navigatiiondsfgh", this.props.navigation)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.BackButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.setItem('@is_login', "");
                this.props.navigation.navigate('LoginScreen')
              }}>
              <Text style={styles.backButtonStyle}>Log Out</Text>
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
            <View style={styles.hairline} />

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ flex: 1, flexDirection: 'row' }}
              data={this.state.data1}
              keyExtractor={item => item.StoryImage}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => this.actionOnRow(item)}>
                  <View>
                    <Item item={item} />
                  </View>
                </TouchableWithoutFeedback>
               
              )}
            
            />

            <View style={styles.hairline} />

            <View style={styles.Profile2Container}>
              <View style={styles.Profile2ImageContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ShareWithScreen')
                  }}>

                

                  <Image
                    source={require('../images/RiyaJainImage.png')}
                    style={styles.Profile2ImageViewStyle}
                  />
                  <Image
                    source={require('../images/status_add_largeicon.png')}
                    style={styles.StatusAddLargeStyle}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.Profile2InfoContainer}>
                <Text style={styles.PersonNameStyle}>Riya Jain</Text>
                <Text style={styles.ProfileDescription}>
                  Description is the pattern of narrative development that aims
                  to
                </Text>
              </View>
              <View style={styles.RiyaMenuContainer}>

                <TouchableOpacity style={styles.openButtonContainer}
                  onPress={() => {
                    this.props.navigation.navigate('ProfileScreen')
                    //  Toast.show('CLicked Share Link', Toast.LONG)
                  }}>
                  <Text style={styles.openButtonStyle}>open</Text>

                </TouchableOpacity>

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


                     this.BlockUserCall();

                      Toast.show('CLicked Shared Link', Toast.LONG)

                    }}
                    option2Click={() => {
                      Toast.show('CLicked Forward Link', Toast.LONG)


                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.RecentViewStyle}>
              <Text style={styles.RecentTextStyle}>RECENT UPDATES</Text>
            </View>

            <FlatList
              style={{ flex: 1 }}
              data={this.state.RecentUpdateProduct}

              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => this.actionOnViewProfile(item)}>
                  <View>
                    <PersonPofile item={item} />
                  </View>
                </TouchableWithoutFeedback>
              )}
              ListEmptyComponent={this.ListEmpty}



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
    backgroundColor: '#fff',
  },
  Profile2Container: {
    color: '#fff',
    flexDirection: 'row',
  },
  PersonNameStyle: {
    marginTop: resp(10),
    width: resp(100),
    height: resp(20),
    color: '#000',
    fontWeight: 'bold',
  },
  ProfileDescription: {
    marginRight: resp(-2),
    width: resp(260),
    height: resp(50),
    color: '#7F7F7F',
    fontSize: resp(12),
  },
  Profile2ImageContainer: {
    margin: resp(10),
    flexDirection: 'column',
    flex: 0.2,
    width: resp(70),
    height: resp(70),
  },
  ProfileImageContainer: {
    margin: resp(10),
    flexDirection: 'column',
    flex: 0.2,
    width: resp(70),
    height: resp(70),
  },
  box: {
    marginTop: 5,
    width: resp(415),
    height: resp(75),
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
  itemBox: {
    height: resp(290),
    backgroundColor: 'white',
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 5,
    },
    elevation: 0,
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
  Profile2ImageViewStyle: {
    margin: resp(10),
    width: resp(70),
    height: resp(70),
    borderRadius: resp(10),
  },
  ProfileImageViewStyle: {
    margin: resp(10),
    width: resp(50),
    height: resp(50),
    borderRadius: resp(8),
  },
  RecentViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: resp(2),
    height: resp(35),
    backgroundColor: '#F1F0F2',
    width: '100%',
  },
  RecentTextStyle: {
    fontSize: resp(14),
    marginTop: resp(30),
    marginLeft: resp(10),
    height: resp(50),
    color: '#8E8E8E',
  },
  margintop: {
    marginTop: '10',
  },
  ImageViewStyle: {
    margin: resp(8),
    width: resp(55),
    height: resp(55),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#F01738',
  },
  hairline: {
    backgroundColor: '#C8C7CC80',
    height: 5,
    width: '100%',
  },

  MainContentBox: {
    flex: 1,
  },

  TabBox: {
    flex: 0.1,
    color: '#000',
  },
  BackButtonContainer: {
    flex: 0.2,
    marginLeft: 10,
    backgroundColor: 'white',
  },
  backButtonStyle: {
    margin: 10,
    height: 20,
    width: 50,
  },
  LogoIconStyle: {
    margin: 5,
    height: 30,
    width: 30,
  },
  SearchIconStyle: {
    margin: 5,
    marginRight: 20,
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },
  TitleContainer: {
    flexDirection: 'row',
    flex: 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: resp(20),
    textAlign: 'center',
  },
  SearchContainer: {
    flex: 0.2,
    backgroundColor: '#fff',
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

  bottomActiveTextStyle: {
    color: '#FB3954',
    fontSize: resp(10),
    marginTop: 5,
    textAlign: 'center',
  },
  ImageContainer: {
    marginTop: resp(-8),
    flexDirection: 'column',
    width: resp(86),
    height: resp(130),
    margin: resp(8),
    borderRadius: resp(5),
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
  StatusAddStyle: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 25,
    marginLeft: resp(45),
  },
  StatusAddLargeStyle: {
    marginTop: resp(0),
    marginLeft: resp(60),
    width: resp(25),
    height: resp(25),
    position: 'absolute', //Here is the trick
    bottom: 5,
  },
  Profile2InfoContainer: {
    color: '#fff',
    margin: resp(10),
    marginTop: resp(20),
    flexDirection: 'column',
    flex: 0.6,
    width: resp(70),
    height: resp(70),
  },
  ProfileInfoContainer: {
    margin: resp(),
    marginTop: resp(15),
    flexDirection: 'column',
    flex: 0.6,
    width: resp(70),
    height: resp(70),
  },
  RiyaMenuContainer: {
    margin: resp(15),
    marginTop: resp(20),
    flexDirection: 'row',
    flex: 0.2,
    width: resp(80),
    height: resp(70),
  },
  ListMenuContainer: {
    marginTop: resp(20),
    flexDirection: 'row',
    flex: 0.3,
    width: resp(0),
    height: resp(70),
  },
  openButtonStyle: {
    color: '#06BE7E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: resp(10),
  },
  viewButtonStyle: {
    color: '#000',
    marginRight: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: resp(4),
  },

  openButtonContainer: {
    width: resp(60),
    height: resp(24),
    borderRadius: resp(20),
    backgroundColor: '#e6f7f2',
  },
  messageButtonContainer: {
    marginTop: resp(5),
    width: resp(15),
    height: resp(15),
    borderRadius: resp(50),
    backgroundColor: '#ebced7',
  },
  messageButtonStyle: {
    marginTop: resp(5),
    color: '#F01738',
    width: resp(7),
    height: resp(7),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewButtonContainer: {
    width: resp(60),
    height: resp(24),
    backgroundColor: '#fff',
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
  styleChartTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    marginLeft: 10,
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
  StyleSettingTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
  columnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonStyle: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  storyTextView: {
    color: '#887F82',
    fontSize: resp(10),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  itemNameStyle: {
    color: '#887F82',
    marginLeft: resp(7),
    fontSize: resp(10),

  },
  itemPriceStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: resp(7),
    fontSize: resp(13),

  },
})
export default withNavigation (DashBoardScreen) 
