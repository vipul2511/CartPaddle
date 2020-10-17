
import React, { Component } from 'react'

console.disableYellowBox = true

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    TextInput,
    SafeAreaView,
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import CustomMenuIcon from './CustomMenuIcon'
import Toast from 'react-native-simple-toast'

function ParsonProfile({ item }) {
    return (
      <View style={styles.itemBox}>
        <View style={styles.box}>
          <View style={styles.ProfileImageContainer}>
            <TouchableOpacity>
              <Image
                source={item.ImagePerson}
                style={styles.ProfileImageViewStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ProfileInfoContainer}>
            <Text style={styles.PersonNameStyle}>{item.personName}</Text>
            <Text style={styles.ProfileDescription}>{item.Description}</Text>
          </View>
          <View style={styles.ListMenuContainer}>
            <TouchableOpacity>
              <View style={styles.messageButtonContainer}>
                <Image
                  source={item.message_icon}
                  style={styles.messageButtonStyle}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.messageButtonContainer}>
                <Image
                  source={item.heart_icon}
                  style={styles.heartButtonStyle}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ViewButtonContainer}>
                <Text style={styles.viewButtonStyle}>{item.View_all}</Text>
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.columnView}>
            <View style={styles.ImageContainer}>
              <Image
                source={item.productImage}
                style={styles.ImageContainer}></Image>
              <Text style={styles.itemNameStyle}>{item.ItemName}</Text>
              <Text style={styles.itemPriceStyle}>
                {'\u20B9'}
                {item.ItemPrice}
              </Text>
            </View>
            <View style={styles.ImageContainer}>
              <Image
                source={item.productImage2}
                style={styles.ImageContainer}></Image>
              <Text style={styles.itemNameStyle}>{item.ItemName2}</Text>
              <Text style={styles.itemPriceStyle}>
                {'\u20B9'}
                {item.ItemPrice2}
              </Text>
            </View>
            <View style={styles.ImageContainer}>
              <Image
                source={item.productImage3}
                style={styles.ImageContainer}></Image>
              <Text style={styles.itemNameStyle}>{item.ItemName3}</Text>
              <Text style={styles.itemPriceStyle}>
                {'\u20B9'}
                {item.ItemPrice3}
              </Text>
            </View>
            <View style={styles.ImageContainer}>
              <Image
                source={item.productImage4}
                style={styles.ImageContainer}></Image>
              <Text style={styles.itemNameStyle}>{item.ItemName4}</Text>
              <Text style={styles.itemPriceStyle}>
                {'\u20B9'}
                {item.ItemPrice4}
              </Text>
            </View>
          </View>
  
  
        </ScrollView>
        <View style={styles.ItemCountContainer}>
          <View style={styles.CartValueContainer}>
            <View style={styles.CartItemContainer}>
              <Text style={styles.CartItemTextStyle}>{item.Cart_itemName}</Text>
              <Text style={styles.CartValueTextStyle}>{item.Cart_ItemValue}</Text>
            </View>
            <View style={styles.CartItemContainer}>
              <Text style={styles.CartItemTextStyle}>{item.Cart_itemName2}</Text>
              <Text style={styles.CartValueTextStyle}>{item.Cart_ItemValue2}</Text>
            </View>
          </View>
        
        </View>
  
  
        <View style={styles.hairline} />
      </View>
    )
  }

class FliterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <View style={styles.BackButtonContainer}>

                    </View>
                    <View style={styles.TitleContainer}>
                        {/* <Image
                            source={require('../images/logo_cart_paddle.png')}
                            style={styles.LogoIconStyle}
                        /> */}
                        <TouchableOpacity
                            style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.TitleStyle}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.CrossContainer}
                    onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../images/cross_iocn.png')}
                            style={styles.CrossIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.hairline} />
                <View style={styles.SearchContainer}>
                    <View style={styles.CalendarContainer}>
                        <View style={styles.StartDateContainer}>
                            <Text style={styles.StartDateTextStyle}>Start Date</Text>
                            <Image
                                source={require('../images/calendar_icon.png')}
                                style={styles.CalnderIconStyle}
                            />
                        </View>
                        <View style={styles.EndDateContainer}>
                            <Text style={styles.StartDateTextStyle}>End Date</Text>
                            <Image
                                source={require('../images/calendar_icon.png')}
                                style={styles.CalnderIconStyle}
                            />
                        </View>

                    </View>
                    <Text style={styles.OrTextStyle} >Or</Text>

                    <View
                        style={styles.inputViewStyle}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}></View>


                        <TextInput
                            placeholder="Enter your order id"
                            placeholderTextColor="#BEBEBE"
                            underlineColorAndroid="transparent"
                            style={styles.input}


                        />
                    </View>
                    <TouchableOpacity
                        style={styles.loginButtonStyle}
                        activeOpacity={0.2}
                        onPress={() => {
                           

                        }}>
                        <Text style={styles.buttonWhiteTextStyle}>SEARCH</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hairline} />

                <View style={styles.MainContentBox}>
                <FlatList
            style={{ flex: .85 }}
            data={this.state.data}
           // renderItem={({ item }) => <ParsonProfile item={item} />}
            keyExtractor={item => item.personName}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => this.GotoNextScreen(item)}>
                <View>
                  <ParsonProfile item={item} />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
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

    },
    BackButtonContainer: {
        flex: 0.2,
        marginLeft: 10,
        backgroundColor: 'white',
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
    CrossContainer: {
        flex: 0.2,
        backgroundColor: '#fff',
    },
    CrossIconStyle: {
        margin: 5,
        marginRight: 20,
        height: 25,
        width: 25,
        alignSelf: 'flex-end',
    },
    hairline: {
        backgroundColor: '#C8C7CC80',
        height: 5,
        width: '100%',
    },
    SearchContainer: {
        flex: 0.3,
        flexDirection: 'column',

    },
    CalendarContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: resp(20),
        marginLeft: resp(-18),
        height: resp(40),
    },
    StartDateContainer: {
        flexDirection: 'row',
        width: resp(140),
        marginHorizontal: resp(60),
        backgroundColor: '#00000008',
    },
    EndDateContainer: {
        flexDirection: 'row',
        width: resp(140),
        backgroundColor: '#00000008',
    },
    StartDateTextStyle: {
        marginTop: resp(8),
        fontSize: resp(13),
        width: resp(70),
        marginLeft: resp(15),
        color: '#7F7F7F'
    },
    CalnderIconStyle: {
        marginLeft: 25,
        marginBottom: 10,
        height: 20,
        width: 23,
        alignSelf: 'flex-end',
    },
    OrTextStyle: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: resp(16),
        marginTop: resp(5),
        color: '#2B2B2B',
    },
    inputViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000008',
        width: '85%',
        marginTop: resp(5),
       alignContent:'center',
       alignSelf:'center',
       

    },
    input: {
        color: '#BEBEBE',
        width: resp(339),
        height: 40,
        
        fontSize:resp(14),
      alignSelf:'flex-start'

    },
    loginButtonStyle: {
        marginTop: resp(20),
        width: resp(339),
        height: resp(42),
        padding: 10,
        backgroundColor: '#F01738',
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      },
      buttonWhiteTextStyle: {
        textAlign: 'center',
        fontSize: resp(14),
        color: 'white',
        alignContent: 'center',
      },
      MainContentBox: {
        flex: 0.6,
       
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
      ProfileImageContainer: {
        margin: resp(10),
        flexDirection: 'column',
        flex: 0.2,
        width: resp(70),
        height: resp(70),
      },
      ProfileImageViewStyle: {
        margin: resp(10),
        width: resp(50),
        height: resp(50),
        borderRadius: resp(8),
      },
      ProfileInfoContainer: {
        margin: resp(),
        marginTop: resp(15),
        flexDirection: 'column',
        flex: 0.6,
        width: resp(70),
        height: resp(70),
      },
      PersonNameStyle: {
        marginTop: resp(10),
        width: resp(80),
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
      ListMenuContainer: {
        marginTop: resp(20),
        flexDirection: 'row',
        flex: 0.5,
        width: resp(0),
        height: resp(70),
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
      viewButtonStyle: {
        color: '#000',
        marginRight: -20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: resp(4),
      },
      columnView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      ImageContainer: {
        marginTop: resp(-8),
        flexDirection: 'column',
        width: resp(90),
        height: resp(133),
        marginLeft: resp(10),
        borderRadius: resp(5),
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
      CartItemContainer: {
        flex: 0.5,
        height: resp(22),
        width: resp(130),
        margin: resp(5),
        flexDirection: 'row',
    
      },
      CartItemTextStyle: {
        width: resp(80),
        height: resp(18),
        fontSize: 15,
        color: "#2B2B2B"
      },
      CartValueTextStyle: {
        marginLeft: resp(20),
        width: resp(20),
        height: resp(18),
        fontWeight: 'bold',
        fontSize: 15,
        color: "#2B2B2B",
    
      },
})
export default FliterScreen;