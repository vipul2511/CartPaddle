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
import Modal from 'react-native-modal';
import MenuIcon from './MenuIcon'


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

                <View style={styles.itemPriceContainer}>
                    <Text style={styles.itemPriceStyle}>
                        {'\u20B9'} {item.price}
                    </Text>

                </View>
                <View style={styles.DeleteButtonContainer}>
                    <Image source={item.delete_icon} style={styles.deleteButtonStyle}></Image>


                </View>

                <View style={styles.ListMenuContainer2}>
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

class CartViewScreen extends Component {
    constructor(props) {
        super(props)
        this.removeProductCall = this.removeProductCall.bind(this);

        this.state = {
            isModalVisible: false,
            grid_data: [
                {
                    MultipleIcon: require('../images/multipleImageIcon.png'),
                    ProdcutName: 'Kurti Patiyala',
                    price: '246',
                    photo: require('../images/itemImages.png'),
                    delete_icon: require('../images/delete_icon.png'),
                    total_view: '20',
                },
                {
                    MultipleIcon: require('../images/multipleImageIcon.png'),
                    price: '246',
                    ProdcutName: 'Beats by Dre Headset',
                    photo: require('../images/itemImages2.png'),
                    delete_icon: require('../images/delete_icon.png'),
                    total_view: '20',
                },
                {
                    MultipleIcon: require('../images/multipleImageIcon.png'),
                    price: '246',
                    ProdcutName: 'kurti patiyala',
                    photo: require('../images/ItemImage3.png'),
                    delete_icon: require('../images/delete_icon.png'),
                    total_view: '20',
                },
                {
                    MultipleIcon: require('../images/multipleImageIcon.png'),
                    price: '246',
                    ProdcutName: 'Beats by Dre Headset',
                    photo: require('../images/itemImage4.png'),
                    delete_icon: require('../images/delete_icon.png'),
                    total_view: '20',
                },
                {
                    MultipleIcon: require('../images/multipleImageIcon.png'),
                    price: '246',
                    ProdcutName: 'kurti patiyala',
                    photo: require('../images/ItemImage3.png'),
                    delete_icon: require('../images/delete_icon.png'),
                    total_view: '20',
                },
                {
                    MultipleIcon: require('../images/multipleImageIcon.png'),
                    price: '246',
                    ProdcutName: 'Beats by Dre Headset',
                    photo: require('../images/itemImage4.png'),
                    delete_icon: require('../images/delete_icon.png'),
                    total_view: '20',
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

    DiloagBOx(item) {
        console.log('Selected Item :', item)
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    actionOnRow(item) {
        console.log('Selected Item :', item)
    }
    removeProductCall() {
        let formData = new FormData()
    
        formData.append('user_id', 10)
    
        formData.append('product_id', 5)
        formData.append('seller_id', 5)
        //console.log('form data==' + formData)
    
        var urlRemove= 'https://www.cartpedal.com/frontend/web/api-product/remove-cart-item'
        console.log('urlRemove :' + urlRemove)
        fetch(urlRemove, {
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
            //    this.LoginOrNot();
             // this.props.navigation.navigate('DashBoardScreen')
             // this.props.navigation.navigate('EditProductScreen')
              Toast.show(responseData.message);
             // this.SaveLoginUserData(responseData);
    
    
            } else {
              // alert(responseData.data);
              alert(responseData.message)
    
            }
    
            console.log('response object:', responseData)
            // console.log('User user ID==' + responseData.data.userid)
            // console.log('access_token ',responseData.data.access_token)
           
          })
          .catch(error => {
            //this.hideLoading();
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
                        <View style={styles.hairline} />
                        <View style={styles.Profile2Container}>
                            <View style={styles.Profile2ImageContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('ProfileScreen')
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







                        <View style={styles.horizontalLine}>
                            <View style={styles.hairline} />
                        </View>

                        <FlatList
                            style={{ flex: 1 }}
                            data={this.state.grid_data}
                            //  renderItem={({ item }) => <Item item={item} />}
                            keyExtractor={item => item.email}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <TouchableWithoutFeedback
                                    onPress={() => this.DiloagBOx(item)}>
                                    <View>
                                        <Item item={item} />
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                        />

                    </ScrollView>
                    <Modal
                        isVisible={this.state.isModalVisible}
                        style={styles.modal}
                        animationType="slide"

                        transparent={true}
                        onBackdropPress={() => this.setState({ isModalVisible: false })}>


                        {/* <Image
                            source={require('../images/modal_close.png')}
                            style={styles.CloseButtonStyle}
                        /> */}
                        <View style={styles.DeleteContainer}>
                           
                            <Text style={styles.DeleteStutsStyle}>Remove  Product</Text>
                        </View>
                        <Text style={styles.DeleteStutsDiscraptionStyle}>Are you sure you want to remove this Cart Product?</Text>

                        <View style={styles.ButtonContainer}>
                            <View style={styles.EmptyButtonCOntainer}></View>
                            <TouchableOpacity style={styles.YesButtonContainer}
                             onPress={() => {
                                this.removeProductCall();
                            }}>
                                <Text style={styles.YesTextStyle}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.NoButtonContainer}
                             isVisible={this.state.isModalVisible}
                            onPressOut={() => this.setState({ isModalVisible: false })}>
                                <Text style={styles.NoTextStyle}>NO</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

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
    RiyaMenuContainer: {
        margin: resp(15),
        marginTop: resp(20),
        flexDirection: 'row',
        flex: 0.3,
        width: resp(80),
        height: resp(70),
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
    DeleteContainer: {
        marginTop: resp(10),
        margin: resp(20),
        flexDirection: 'row',

    },
    Profile2ImageContainer: {
        margin: resp(10),
        flexDirection: 'column',
        flex: 0.2,
        width: resp(110),
        height: resp(110),
    },
    ButtonContainer: {
        height: resp(50),
        marginTop: resp(20),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    NoButtonContainer: {
        flex: 0.4,
        marginRight: resp(20),
        width: resp(95),
        height: resp(40),
        backgroundColor: '#3C404333',
        borderRadius: resp(40)
    },
    NoTextStyle: {
        marginTop: resp(10),
        alignSelf: 'center',
        fontSize: resp(15),
        color: '#7F7F7F'
    },
    modal: {
        backgroundColor: '#fff',
        margin: resp(240), // This is the important style you need to set
    
        alignSelf: 'center',
        width: resp(300),
        height: resp(220),
        borderRadius: resp(30),
    
      },
    DeleteStutsDiscraptionStyle: {
        marginLeft: resp(55),
        marginTop: resp(-20),
        color: '#7F7F7F',
        width: resp(207),
        fontSize: resp(14),
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
    YesTextStyle: {
        marginTop: resp(10),
        alignSelf: 'center',
        fontSize: resp(15),
        color: '#FFFFFF'
    },
    YesButtonContainer: {
        flex: 0.4,
        marginHorizontal: resp(10),
        marginLeft: resp(-10),
        width: resp(95),
        height: resp(40),
        backgroundColor: '#06BE7E',
        borderRadius: resp(40)
    },
    CloseButtonStyle: {
        marginRight: resp(20),
        alignSelf: 'flex-end',
    },
    ProfileDescription: {
        marginRight: resp(-2),
        width: resp(260),
        height: resp(50),
        color: '#7F7F7F',
        fontSize: resp(12),
    },
    Profile2ImageViewStyle: {
        marginTop: resp(10),
        width: resp(90),
        height: resp(90),
        borderRadius: resp(10),
    },
    DeleteStutsStyle: {
        fontWeight: 'bold',
        alignSelf:'center',
        alignContent:'center',
        alignItems:'center',
        fontSize: resp(20),
        marginLeft: resp(35),
        color: '#2B2B2B'
    },
    TitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: resp(20),
        textAlign: 'center',
    },
    ModalDeleteButtonStyle: {
        alignSelf: 'flex-start',
    },
    SearchContainer: {
        flex: 0.2,
        backgroundColor: '#fff',
    },
    EmptyButtonCOntainer: {
        flex: 0.2,

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
    Profile2InfoContainer: {
        color: '#fff',
        margin: resp(10),
        marginTop: resp(20),
        marginLeft: resp(30),
        flexDirection: 'column',
        flex: 0.6,
        width: resp(70),

        height: resp(70),
    },
    SearchIconStyle: {
        margin: 5,
        marginRight: 20,
        height: 25,
        width: 25,
        alignSelf: 'flex-end',
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
        position: 'absolute', //Here is the trick
        bottom: 0,
        right: 20,
    },
    bottomActiveTextStyle: {
        color: '#FB3954',
        fontSize: resp(10),
        marginTop: 5,
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


    RiyaImageContainer: {
        marginBottom: resp(30),
        margin: resp(10),
        flexDirection: 'column',
        flex: 0.2,
        width: resp(80),
        height: resp(80),

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

        marginLeft: resp(70),
        width: resp(30),
        height: resp(30),

        position: 'absolute', //Here is the trick
        bottom: -10,
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
        marginRight: resp(-15),
        position: 'absolute',
        top: 0,
        right: 0,
        width: 28,
        height: 28,
        borderRadius: resp(20),
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
        flexDirection: 'column',
        marginTop: resp(30),
        width: resp(333),
        height: resp(66),
    },
    PersonNameStyle: {
        marginTop: resp(10),
        height: resp(30),
        color: '#000',
        fontWeight: 'bold',
        fontSize: resp(20),
    },
    PersonDescriptionStyle: {
        marginTop: resp(-2),
        marginLeft: resp(20),
        fontSize: resp(12),
        width: resp(334),
        height: resp(44),
        color: '#7F7F7F',
    },
    Profile2Container: {
        backgroundColor: 'white',
        flexDirection: 'row',
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
        width: resp(13.85),
        height: resp(13.85),
        position: 'absolute', //Here is the trick
        bottom: 0,
        bottom: 60,
      
        right: 60,
        backgroundColor: '#fff',
    },
    MultipleIconStyle: {
        marginLeft: 20,
        width: resp(13.85),
        height: resp(13.85),
        position: 'absolute', //Here is the trick
        
      
        right: 0,
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
        marginLeft: resp(16),
        fontSize: resp(13),
    },
    itemPriceContainer: {
        flex: 0.7,
        flexDirection: 'row',

    },
    box: {
        width: resp(200),
        height: resp(25),

        backgroundColor: 'white',
        flexDirection: 'row',

    },
    priceContainer: {
        flex: 0.7,
        marginLeft:resp(-5),
        backgroundColor:'white',
         flexDirection: 'row',
    },
    ListMenuContainer: {
        marginTop: resp(30),
        marginLeft:resp(10),
        flexDirection: 'row',
        flex: 0.3,
        width: resp(0),
        height: resp(70),
    },
    ListMenuContainer2: {
        flexDirection: 'row',
        flex: 0.1,
        backgroundColor: 'white',
        width: resp(0),
    },
    messageButtonContainer: {
        margin: resp(5),
        marginTop: resp(5),
        width: resp(15),
        height: resp(15),
        borderRadius: resp(50),
        backgroundColor: '#ebced7',
    },
    DeleteButtonContainer: {
        flex:0.2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
       marginBottom:resp(2),
        width: resp(20),
        height: resp(20),
        borderRadius: resp(50),
        backgroundColor: 'white',
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
    deleteButtonStyle: {
        marginLeft: resp(1),

        color: '#F01738',
        width: resp(20),
        height: resp(20),
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
export default CartViewScreen
