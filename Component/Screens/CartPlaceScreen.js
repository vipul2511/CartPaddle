

import React, { Component} from 'react'

console.disableYellowBox = true
import { withNavigation } from 'react-navigation';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import CustomMenuIcon from './CustomMenuIcon'
import Toast from 'react-native-simple-toast'
import MenuIcon from './MenuIcon'


function ParsonProfile({ item }) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.box}>
        <View style={styles.ProfileImageContainer}>
          <TouchableOpacity>
            <Image
              source={ require('../images/RiyaJainImage.png')}
              style={styles.ProfileImageViewStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileInfoContainer}>
  <Text style={styles.PersonNameStyle}>{item.username}</Text>
          <Text style={styles.ProfileDescription}>{item.description}</Text>
        </View>
        <View style={styles.ListMenuContainer}>
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
                source={require('../images/Heart_icon.png')}
                style={styles.heartButtonStyle}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ViewButtonContainer}>
              <Text style={styles.viewButtonStyle}>View All</Text>
            </View>
          </TouchableOpacity>

          <MenuIcon
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
              Toast.show('CLicked Block', Toast.LONG)
            }}
            option2Click={() => {
              Toast.show('CLicked Share Link', Toast.LONG)
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
              source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products.name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
               source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products.name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
               source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products.name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
                source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products.name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.price}
            </Text>
          </View>
        </View>


      </ScrollView>
      <View style={styles.ItemCountContainer}>
        <View style={styles.CartValueContainer}>
          <View style={styles.CartItemContainer}>
            <Text style={styles.CartItemTextStyle}>Cart Item</Text>
            <Text style={styles.CartValueTextStyle}>{item.cartitem}</Text>
          </View>
          <View style={styles.CartItemContainer}>
            <Text style={styles.CartItemTextStyle}>Cart Value</Text>
            <Text style={styles.CartValueTextStyle}>{item.cartvalue}</Text>
          </View>
        </View>
        <View style={styles.PlacedHolderButtonContainer}>
          <TouchableOpacity
                  >
            <View style={styles.PlacedButtonStyle}>
              <Text style={styles.PlaceHolderTextStyle}>Place Oder</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.hairline} />
    </View>
  )
}
class CartPlaceScreen extends Component {
  constructor(props) {
    super(props)
    this.favouriteProduct = this.favouriteProduct.bind(this),
    this.CartListCall = this.CartListCall.bind(this),
    this.PlaceOderCall = this.PlaceOderCall.bind(this),
    this.state = {
      CartListProduct:'',
      baseUrl: 'https://www.cartpedal.com/frontend/web/',
      data: [
        {
          ImagePerson: require('../images/RiyaJainImage.png'),
          personName: 'Rahul Jain',
          Description: ' Description is the pattern of narrative',
          message_icon: require('../images/message_icon.png'),
          heart_icon: require('../images/Heart_icon.png'),
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
          productImage5: require('../images/productImage6.png'),
          ItemName4: 'Ethnic Wear ',
          ItemPrice4: '300',
          Cart_itemName: 'Cart Item',
          Cart_ItemValue: '12',
          Cart_itemName2: 'Cart Value',
          Cart_ItemValue2: '20',
          placeOder_button: 'Place Oder'



        },
        {
          ImagePerson: require('../images/productImage4.png'),
          personName: 'Gaurav Jain',
          Description: ' Description is the pattern of narrative',
          message_icon: require('../images/message_icon.png'),
          heart_icon: require('../images/Heart_icon.png'),
          View_all: 'View All',
          menuButtom: require('../images/more.png'),
          productImage: require('../images/productImage4.png'),
          ItemName: 'Western Wear',
          ItemPrice: '120',
          productImage2: require('../images/productImage5.png'),
          ItemName2: 'Foot Wear',
          ItemPrice2: '216',
          productImage3: require('../images/productImage5.png'),
          ItemName3: 'Accessories ',
          ItemPrice3: '246',
          productImage4: require('../images/productImage6.png'),
          ItemName4: 'Ethnic Wear ',
          ItemPrice4: '296',
          productImage5: require('../images/productImage6.png'),
          ItemName4: 'Ethnic Wear ',
          ItemPrice4: '300',
          Cart_itemName: 'Cart Item',
          Cart_ItemValue: '12',
          Cart_itemName2: 'Cart Value',
          Cart_ItemValue2: '20',
          placeOder_button: 'Place Oder'
        },
      ],
    }
  }

  GotoNextScreen(item) {
    
    this.props.navigation.navigate('CartViewScreen');
    console.log('Selected Item :', item)
  }
  PlaceODerCallMethode() {
    this.PlaceOderCall();
   
  }
  actionOnRow(item) {
    console.log('Selected Item :', item)
  }

  async componentDidMount() {
    this.CartListCall();
  //   AsyncStorage.getItem('@user_id').then((userId) => {
  //     if (userId) {
  //         this.setState( { userId: userId });
  //         console.log("Edit user id Dhasbord ====" + this.state.userId);
  //        // this.CartListCall();
  //     }
  // });
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
favouriteProduct() {
  let formData = new FormData()
    
    formData.append('user_id', 10)
    formData.append('block_id', 10)
    formData.append('type', 1)
    console.log('form data==' + JSON.stringify(formData))


  


  // var CartList = this.state.baseUrl + 'api-product/cart-list'
    var favouriteProductUrl = "https://www.cartpedal.com/frontend/web/api-product/cart-list"
    console.log('BlockUser Url:' + favouriteProductUrl)
    fetch(favouriteProductUrl, {
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

       // console.log('response object:', responseData)
        console.log('favouriteProduct', JSON.stringify(responseData))
        // console.log('access_token ', this.state.access_token)
        //   console.log('User Phone Number==' + formData.phone_number)
      })
      .catch(error => {
      //  this.hideLoading();
        console.error(error)
      })

      .done()

}

  CartListCall() {
    let formData = new FormData()
      
      formData.append('user_id', 10)
      formData.append('type', 0)
      console.log('form data==' + JSON.stringify(formData))

    // var CartList = this.state.baseUrl + 'api-product/cart-list'
      var CartList = "https://www.cartpedal.com/frontend/web/api-product/cart-list"
      console.log('Add product Url:' + CartList)
      fetch(CartList, {
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

  PlaceOderCall() {
    let formData = new FormData()
      
      formData.append('user_id', 10)
      formData.append('seller_id',{"0":"3"})
      console.log('form data==' + JSON.stringify(formData))
     
      var PalceOderUrl =   this.state.baseUrl+"api-product/place-order"
     // var PalceOderUrl = "https://www.cartpedal.com/frontend/web/api-product/place-order"
      console.log('placeOder:' + PalceOderUrl)
      fetch(PalceOderUrl, {
        method: 'Post',
        headers: new Headers({
          'Content-Type': 'multipart/form-data',
          device_id: '11111',
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
          if (responseData.code == '200 ') {
          //  this.props.navigation.navigate('StoryViewScreen')
            Toast.show(responseData.message);
           // this.setState({CartListProduct:responseData.data})
          // this.SaveProductListData(responseData)
            
          }
           else if (responseData.done=='500'){
              Toast.show(responseData.message)
          }
          
          else {
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


async SaveLoginUserData(responseData){
  await AsyncStorage.setItem('@user_id', responseData.data.userid.toString());
  await AsyncStorage.setItem('@access_token', responseData.data.access_token.toString());
  
 
}


  render() {
    console.log("navigatiion",this.props.navigation)
    return (
      <SafeAreaView style={styles.container}>


        <View style={styles.MainContentBox}>

          <View style={styles.hairline} />

          <FlatList
            style={{ flex: .85 }}
            data={this.state.CartListProduct}
           // renderItem={({ item }) => <ParsonProfile item={item} />}
            keyExtractor={(item,personName) => item.personName}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => this.GotoNextScreen(item)}>
                <View>
                  <ParsonProfile item={item} />
                </View>
              </TouchableWithoutFeedback>
            )}
            ListEmptyComponent={this.ListEmpty}
          />


          <View style={styles.BottomContainer}>
            <View style={styles.BottomQuanitityContainer}>
              <Text style={styles.OderTextStyle}>Total Oder Quanitity</Text>
              <Text style={styles.OderTextNumberStyle}>24</Text>
            </View>
            <View style={styles.BottomValueContainer}>
              <Text style={styles.OderValueTextStyle}>Total Oder Value</Text>
              <Text style={styles.OderValueTextNumberStyle}>{'\u20B9'}40</Text>
            </View>
            <TouchableOpacity style={styles.BottomPlaceHolderContainer}
               onPress={() => {
                this.PlaceODerCallMethode();
              }}>
                {/* Toast.show('CLicked Forward Link', Toast.LONG)}} >*/}

              

                 
              <Text style={styles.PlaceHolderTextStyle2}>Place Oder</Text>
          
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
  Profile2Container: {
    color: '#fff',
    flexDirection: 'row',
  },
  ProfileContainer: {
    height: resp(414),
    color: 'red',
    flexDirection: 'row',
  },

  PersonNameStyle: {
    marginTop: resp(10),
    width: resp(80),
    height: resp(20),
    color: '#000',
    fontWeight: 'bold',
  },
  ProfileDescription: {
  
    width: resp(260),
    height: resp(20),
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
    marginTop: resp(5),
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
  ItemCountContainer: {
    marginLeft: resp(20),
    marginTop: resp(5),
    width: resp(415),
    height: resp(75),
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 5,
    },
    elevation: 0,
  },
  CartItemContainer: {
    flex: 0.5,
    height: resp(22),
    width: resp(130),
    margin: resp(5),
    flexDirection: 'row',

  },
  PlacedButtonStyle: {
    marginLeft: resp(40),
    height: resp(40),
    width: resp(130),
    marginTop: resp(20),
    backgroundColor: '#FFCF33',


  },
  PlaceHolderTextStyle: {
    marginTop: resp(10),
    alignSelf: 'center',

    height: resp(18),
    fontWeight: 'bold',
    fontSize: 15,
    color: "#2B2B2B",

  },
  PlaceHolderTextStyle2: {
    alignSelf: 'center',
    height: resp(18),
    fontWeight: 'bold',
    fontSize: 15,
    color: "#2B2B2B",

  },
  CartItemTextStyle: {
    width: resp(80),
    height: resp(18),

    fontSize: 15,
    color: "#2B2B2B"
  },
  CartValueTextStyle: {
    marginLeft: resp(20),
    width: resp(50),
    height: resp(18),
    fontWeight: 'bold',
    fontSize: 15,
    color: "#2B2B2B",

  },

  CartValueContainer: {
    margin: resp(5),
    width: resp(150),
    height: resp(65),
    flex: 0.5,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 5,
    },
    elevation: 0,
  },
  PlacedHolderButtonContainer: {
    marginBottom: resp(20),
    margin: resp(5),
    width: resp(150),
    height: resp(65),
    flex: 0.5,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 5,
    },
    elevation: 0,
  },
  itemBox: {
    height: resp(350),
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
  MenuIconStyle: {
    marginTop: resp(4),
    width: resp(3.44),
    height: resp(15.33),
  },
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: resp(2),
  },
  ColumView: {
    flexDirection: 'column',
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
    borderColor: '#F01738',
  },
  hairline: {
    backgroundColor: '#C8C7CC80',
    height: 5,
    width: '100%',
  },
  headerBox: {
    width: '100%',
    flex: 0.1,
    color: 'black',
  },
  MainContentBox: {
    flex: 1,
  },
  rowGray: {
    color: 'black',
    width: '100%',
    height: 50,
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
    width: 20,
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
    marginTop: 0,
    marginLeft: 10,
    textAlign: 'center',
  },
  ImageContainer: {
    marginTop: resp(-8),
    flexDirection: 'column',
    width: resp(90),
    height: resp(133),
    marginLeft: resp(10),
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
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 20,
  },

  StatusAddLargeStyle: {
    marginTop: resp(-20),
    marginLeft: resp(60),
    width: resp(30),
    height: resp(30),

    position: 'absolute', //Here is the trick
    bottom: 0,
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
    flex: 0.5,
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
    margin: resp(5),
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
  heartButtonStyle: {
    marginTop: resp(4),
    color: '#F01738',
    width: resp(10),
    height: resp(8),
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
  bottomVideoTextStyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginRight: 10,
    marginTop: 3,
    textAlign: 'center',
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
  bottomNotificationTextStyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginLeft: 10,
    marginTop: 3,
    textAlign: 'center',
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
    fontSize: resp(12),
    marginLeft: resp(15),

  },
  itemPriceStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: resp(17),
    fontSize: resp(12),
    alignItems: 'center',


  },
  BottomContainer: {

    flex: .14,
    width: '100%',
    flexDirection: 'row',
    margin: resp(2),

  },
  BottomQuanitityContainer: {
    flex: 0.33,
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor: '#FFFFFF'
  },
  BottomValueContainer: {
    flex: 0.33,
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor: '#F01738'
  },
  BottomPlaceHolderContainer: {
    flex: 0.33,
    justifyContent:'center',
    backgroundColor: '#FFCF33'
  },
  OderTextStyle: {
    color: '#7F7F7F',
    marginLeft: resp(7),
    fontSize: resp(12),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  OderTextNumberStyle: {
    color: '#F01738',
    marginLeft: resp(7),
    fontSize: resp(16),
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  OderValueTextStyle: {
    color: '#FFFFFF',
    marginLeft: resp(7),
    fontSize: resp(12),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  OderValueTextNumberStyle: {
    color: '#FFFFFF',
    marginLeft: resp(7),
    fontSize: resp(20),
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
})
export default withNavigation (CartPlaceScreen)
