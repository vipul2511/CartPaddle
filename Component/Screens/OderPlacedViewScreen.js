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
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import Toast from 'react-native-simple-toast'
import CustomMenuIcon from './CustomMenuIcon'
import { SliderBox } from 'react-native-image-slider-box'
import MenuIcon from './MenuIcon'


function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={item.photo} style={styles.image} />
      {/* <View style={styles.MultipleOptionContainer}>
        <Image
          source={item.MultipleIcon}
          style={styles.MultipleIconStyle}></Image>
      </View> */}
      <View style={styles.columnStyele}>
        <Text style={styles.itemNameStyle}>{item.ProdcutName}</Text>


        <Text style={styles.SubTitlePoductNameSytle}>{item.SubTitlePoductName}</Text>

        <View style={styles.itemPriceContainer}>
          <Text style={styles.itemPriceStyle}>
            {'\u20B9'} {item.price}
          </Text>
          <Text style={styles.QtyStyle}>{item.Qty}</Text>

          {/* <View style={styles.eyeButtonContainer}>
            <Image source={item.eye_icon} style={styles.eyeButtonStyle}></Image>

            <Text style={styles.viewTextStyle}>{item.total_view}</Text>
          </View> */}


        </View>
      </View>
      <View style={styles.MenuStyleContanier}>
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
      </View>
      {/* <View style={styles.box}> */}


    </View>
    // </View>
  )
}

class OderPlacedViewScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid_data: [
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          ProdcutName: 'Kurti ',
          price: '246',
          photo: require('../images/itemImages.png'),
          SubTitlePoductName: 'Kurti Patiyala',
          Qty: ' Qty 50',
        },
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          price: '246',
          ProdcutName: 'Beats by Dre Headset',
          photo: require('../images/itemImages2.png'),
          SubTitlePoductName: 'Kurti Patiyala',
          Qty: ' Qty 50',
        },
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          price: '246',
          ProdcutName: 'kurti patiyala',
          photo: require('../images/ItemImage3.png'),
          SubTitlePoductName: 'Kurti Patiyala',
          Qty: ' Qty 50',
        },
        {
          MultipleIcon: require('../images/multipleImageIcon.png'),
          price: '246',
          ProdcutName: 'Beats by Dre Headset',
          photo: require('../images/itemImage4.png'),
          SubTitlePoductName: 'Kurti Patiyala',
          Qty: ' Qty 50',
        },
      ],
      images: [
        require('../images/slider_images.png'),
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
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
            {/* <Image
              source={require('../images/search.png')}
              style={styles.SearchIconStyle}
            /> */}
          </View>
        </View>

        <View style={styles.MainContentBox}>
          <ScrollView>
            <View style={styles.sliderImageContainer}>
              <SliderBox
                images={this.state.images}
                style={styles.sliderImageStyle}></SliderBox>

              <View style={styles.RiyaImageContainer}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/riyaJainProfileImage.png')}
                    style={styles.RiyaImageViewStyle}
                  />
                  {/* <Image
                    source={require('../images/status_add_largeicon.png')}
                    style={styles.StatusAddLargeStyle}></Image> */}
                </TouchableOpacity>
              </View>


            </View>
            <View style={styles.ProfileInfoContainer}>
              <View style={styles.PersonInfoContainer}>
                <Text style={styles.PersonNameStyle}>Riya Jain</Text>
                <Text style={styles.PersonDescriptionStyle}>
                  Description is the pattern of narrative development that aims
                  to make vivid a place, object, character, or group.
                  Description is one of four rhetorical modes, along with
                  exposition, argumentation, and narration. In practice it would
                  be difficult to write literature that drew on just one of the
                  four basic modes.
                </Text>
              </View>
              <View style={styles.ListMenuContainer}>
                <TouchableOpacity>
                  <View style={styles.messageButtonContainer}>
                    <Image
                      source={require('../images/message_icon.png')}
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

                <View style={styles.MenuStyleContanier}>
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
                    Toast.show('CLicked Shared Link', Toast.LONG)
                  }}
                  option3Click={() => {
                    Toast.show('CLicked Forward Link', Toast.LONG)
                  }}
                />
                </View>
              </View>

            </View>


            <View style={styles.horizontalLine}>
              <View style={styles.hairline} />
            </View>
            <FlatList
              style={{ flex: 1 }}
              data={this.state.grid_data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.email}
              numColumns={1}
            />
          </ScrollView>
          <TouchableOpacity

            onPress={() => {
              this.props.navigation.navigate('OpenForPublicScreen')
            }}>
            <Image
              source={require('../images/flatin_action_icon.png')}
              style={styles.FloatingActionStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TabBox}>
          <View style={styles.tabStyle}>
            <TouchableOpacity
              style={styles.tabButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('WelcomeActivity')
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
                source={require('../images/cart_bag_active_icon.png')}
                style={styles.styleChartTab}
              />
              <Text style={styles.bottomActiveTextStyle}>Cart</Text>
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
  MenuStyleContanier: {
   
  
    height: resp(30),
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
  messageButtonStyle: {
    marginTop: resp(4),
    color: '#F01738',
    width: resp(7),
    height: resp(7),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageButtonContainer: {
    margin: resp(5),
    marginTop: resp(5),
    width: resp(15),
    height: resp(15),
    borderRadius: resp(50),
    backgroundColor: '#ebced7',
  },
  MainContentBox: {
    flex: 1,
    flexDirection: 'column',
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
  columnStyele: {
    width: '45%',
    flexDirection: 'column',
   
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
    position: 'absolute', //Here is the trick
    bottom: 0,
    right: 20,
  },
  bottomActiveTextStyle: {
    color: '#FB3954',
    fontSize: resp(10),

    marginLeft: resp(5),
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
    bottom: -20,
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
    flex: 0.2,
    marginTop: resp(0),




    backgroundColor: 'red'
  },
  moreWhiteIconStyle: {
    marginTop: resp(7),
    marginLeft: resp(12),
    color: '#fff',
    width: resp(3.44),
    height: resp(15.33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileInfoContainer: {
    flexDirection: 'row',
    width: resp(375),
    height: resp(100),
    color: '#fff',
  },
  PersonInfoContainer: {
    flex: 0.85,
    flexDirection: 'column',
    marginTop: resp(20),

    height: resp(66),
  },
  PersonNameStyle: {
    marginLeft: resp(20),
    fontSize: resp(16),
    width: resp(70),
    height: resp(20),
    color: '#2B2B2B',
    fontWeight: 'bold',
  },
  PersonDescriptionStyle: {
    marginTop: resp(-2),
    marginLeft: resp(20),
    fontSize: resp(12),
    width: resp(334),
    height: resp(44),
    color: '#7F7F7F',
  },
  TotalBox: {
    flexDirection: 'row',
    width: '100%',
    height: resp(70),
  },
  TotalProfileViewContainer: {
    marginLeft: resp(90),
    flexDirection: 'column',
    width: resp(110),
    height: resp(80),
  },
  TotalProductViewContainer: {
    marginRight: resp(80),
    flexDirection: 'column',
    width: resp(120),
    height: resp(100),
  },
  TotalProfileTextStyle: {
    height: resp(25),
    marginLeft: resp(38),
    width: resp(35),
    height: resp(25),
    fontSize: resp(20),
    fontWeight: 'bold',
  },
  TotalProfileViewTextStyle: {
    margin: resp(5),
    width: resp(100),
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
  columnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  GridViewContainer: {
    flex: 1,

    margin: 0,
  },
  image: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 0,
    borderRadius: 10,
    width: resp(164),
    height: resp(196),
  },
  listItem: {
    marginTop: resp(20),
    width: '100%',
    marginLeft: resp(20),
    flexDirection: 'row',
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
    color: '#2B2B2B',
    marginLeft: resp(15),
    fontSize: resp(14),
    fontWeight: 'bold',
  },
  itemPriceStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: resp(7),
    fontSize: resp(14),
    fontWeight: 'bold',
  },
  itemPriceContainer: {
    color: '#2B2B2B',
    marginLeft: resp(10),
    marginTop: resp(5),
    flexDirection: 'column',
    fontWeight: 'bold',
  },
  SubTitlePoductNameSytle: {
    marginLeft: resp(15),
    marginTop: resp(5),
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: resp(14),
  },
  QtyStyle: {

    marginLeft: resp(3),
    marginTop: resp(5),
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: resp(14),
  },
  box: {
    width: resp(200),
    height: resp(25),

    backgroundColor: 'white',
    flexDirection: 'column',
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
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ListMenuContainer: {
    marginTop: resp(20),
    marginLeft: resp(20),
    flexDirection: 'row',
    flex:0.15,
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
export default OderPlacedViewScreen
