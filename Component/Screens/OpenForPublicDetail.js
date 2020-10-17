import React, { Component, useState } from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import CustomMenuIcon from './CustomMenuIcon'




function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={item.photo} style={styles.image} />
      <View style={styles.MultipleOptionContainer}>
        <Image
          source={item.MultipleIcon}
          style={styles.MultipleIconStyle}></Image>
      </View>
      <View>
        <Text style={styles.itemNameStyle}>{item.ProdcutName}</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.priceContainer}>
          <View style={styles.itemPriceContainer}>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'} {item.price}
            </Text>
          </View>
          </View>
          <View style={styles.eyeButtonContainer}>
            <Image source={item.Shopping_cart} style={styles.ShopingCartStyle}></Image>

           
          </View>

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


}}
/>
       
      </View>
    </View>
  )
}

class OpenForPublicDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
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
  actionOnRow(item) {
    console.log('Selected Item :', item)
    this.setState({ isModalVisible: !this.state.isModalVisible });
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
          <View style={styles.SearchContainer}>
          
          </View>
        </View>

        <View style={styles.MainContentBox}>
          <ScrollView>
            <View style={styles.ProfileContainer}>
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
              <View style={styles.ProfileInfoContainer}>
              <Text style={styles.PersonNameStyle}>Riya Jain</Text>
             
              <View style={styles.PersonInfoContainer}>
                
            
                  
                    <Text style={styles.PersonDescriptionStyle}>
                      Description is the pattern of narrative development that aims
                      to make vivid a place, object, character, or group.
                      Description is one of four rhetorical modes, along with
                      exposition, argumentation, and narration.
                      
                </Text>
                 
              
              </View>
              </View>
              <TouchableOpacity>
           
              <Image
                source={ require('../images/Heart_icon.png')}
                style={styles.heartButtonStyle}></Image>
           
             </TouchableOpacity>
        
             

            </View> 
            
            
      
            <View style={styles.horizontalLine}>
              <View style={styles.hairline} />
            </View>

         
            <FlatList
              style={{ flex: 1 }}
              data={this.state.grid_data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.ProdcutName}
              numColumns={2}
            
            />
          </ScrollView>

        </View>
        <View style={styles.TabBox}>
          <View style={styles.tabStyle}>
            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('DashBoardScreen')
              }}>
              <Image
                source={require('../images/home_inactive_icon.png')}
                style={styles.StyleHomeTab}
              />

              <Text style={styles.bottomInactiveTextStyle}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('OpenForPublicScreen')
              }}>
              <Image
                source={require('../images/group_active_icon.png')}
                style={styles.StyleOpenForPublicTab}
              />
              <Text style={styles.bottomActiveTextStyle}>
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
 
 
 
  heartButtonStyle: {
    marginTop: resp(20),
   
    color: '#F01738',
    width: resp(12),
    height: resp(10.47),
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  SearchContainer: {
    flex: 0.2,
    backgroundColor: '#fff',
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
 
  RiyaImageContainer: {
    marginBottom: resp(30),
    margin: resp(10),
    flexDirection: 'row',
    flex: 0.2,
    width: resp(90),
    height: resp(90),
   
  },
  ProfileContainer:{
    flexDirection: 'row',
    width: '100%',
  },
  RiyaImageViewStyle: {
    
  
    width: resp(90),
    height: resp(90),
    borderRadius: resp(10),
    borderWidth: 2,
    borderColor: '#fff',
  },
  StatusAddLargeStyle: {
 
    marginLeft: resp(65),
    width: resp(25),
    height: resp(25),
    position: 'absolute', //Here is the trick
    bottom: 0,
  },

 
  ProfileInfoContainer: {
      flex:0.75,
    flexDirection: 'column',
    width: '100%',
    marginLeft:resp(15),
    marginTop:resp(18),
    height: resp(30),
    color: '#fff',
  },
  PersonInfoContainer: {
     marginTop:resp(5),
    flexDirection: 'row',
    width: resp(260),    
    height: resp(66),
  },

  PersonNameStyle: {
    fontSize: resp(16),
    width: resp(200),
    color: '#2B2B2B',
    fontWeight: 'bold',
  },

  PersonDescriptionStyle: {
    fontSize: resp(12),
    width: resp(250),
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

  },
  priceContainer: {
    flex: 0.8,
    marginLeft:resp(-5),
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  eyeButtonContainer: {
    flex: 0.1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
   marginBottom:resp(2),
    width: resp(15),
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
  viewTextStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: resp(30),
    height: resp(24),
    backgroundColor: '#fff',
  },
})
export default OpenForPublicDetail;