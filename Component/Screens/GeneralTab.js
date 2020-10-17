import React, {Component, } from 'react'
import { withNavigation } from 'react-navigation';

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
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler'
import Toast from 'react-native-simple-toast'
import ReadMore from 'react-native-read-more-text'
import MenuIcon from './MenuIcon'



function ParsonProfile ({item}) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.box}>
        <View style={styles.ProfileImageContainer}>
        
            <Image
              source={require('../images/productImage4.png')}
              style={styles.ProfileImageViewStyle}
            />
         
        </View>
        <View style={styles.ProfileInfoContainer}>
          <Text style={styles.PersonNameStyle}>{item.username}</Text>
          <Text style={styles.card}>
            <ReadMore numberOfLines={1}
            onReady >
                  <Text style={styles.ProfileDescription}>{item.description}</Text>
            </ReadMore>
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
          <TouchableOpacity>
            <View style={styles.ViewButtonContainer}>
              <Text style={styles.viewButtonStyle}>View All</Text>
            </View>
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
              Toast.show('CLicked Block Link', Toast.LONG)
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
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[0].price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[0].price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[1].price}
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../images/ProductImage.png')}
              style={styles.ImageContainer}></Image>
            <Text style={styles.itemNameStyle}>{item.products[0].name}</Text>
            <Text style={styles.itemPriceStyle}>
              {'\u20B9'}
              {item.products[1].price}
            </Text>
          </View>
        </View>

        <View style={styles.hairline} />
      </ScrollView>

      <View style={styles.hairline} />
    </View>
  )
}

class GeneralTab extends Component {
  constructor (props) {
    super(props)
    this.RecentShareCall = this.RecentShareCall.bind(this),
    this.state = {
      RescentProduct:'',
      data: [
        {
          ImagePerson: require('../images/RiyaJainImage.png'),
          personName: 'Rahul Jain',
          Description: ' Description is the pattern of narrative ',
          heart_icon: require('../images/Heart_icon.png'),
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
        // {
        //   ImagePerson: require('../images/productImage4.png'),
        //   personName: 'Gaurav Jain',
        //   Description: ' Description is the pattern of narrative ',
        //   heart_icon: require('../images/Heart_icon.png'),
        //   message_icon: require('../images/message_icon.png'),
        //   View_all: 'View All',
        //   menuButtom: require('../images/more.png'),
        //   productImage: require('../images/productImage4.png'),
        //   ItemName: 'Western Wear',
        //   ItemPrice: '120',
        //   productImage2: require('../images/productImage5.png'),
        //   ItemName2: 'Foot Wear',
        //   ItemPrice2: '216',
        //   productImage3: require('../images/productImage5.png'),
        //   ItemName3: 'Accessories ',
        //   ItemPrice3: '246',
        //   productImage4: require('../images/productImage6.png'),
        //   ItemName4: 'Ethnic Wear ',
        //   ItemPrice4: '296',
        // },
      ],
    }
  }
 
  async componentDidMount() {
    this.RecentShareCall();
  //   AsyncStorage.getItem('@user_id').then((userId) => {
  //     if (userId) {
  //         this.setState( { userId: userId });
  //         console.log("Edit user id Dhasbord ====" + this.state.userId);
  //        // this.RecentShareCall();
  //     }
  // });
  }

  actionOnRow (item) {
    
    this.props.navigation.navigate('OpenForPublicDetail');
    console.log('Selected Item :', item)
  }
  _handleTextReady = () => {
    console.log('ready!');
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

  RecentShareCall() {
    let formData = new FormData()
      
      formData.append('user_id', 10)
      formData.append('type', 0)
      console.log('form data==' + JSON.stringify(formData))

    // var CartList = this.state.baseUrl + 'api-product/cart-list'
      var RecentShare = "https://www.cartpedal.com/frontend/web/api-user/recent-share"
      console.log('Add product Url:' + RecentShare)
      fetch(RecentShare, {
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
            this.setState({RescentProduct:responseData.data})
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



  render () {
    return (
      <SafeAreaView style={styles.container}>
      

          <ScrollView>
            <View style={styles.hairline} />

          
        
            <FlatList
              style={{flex: 1}}
              data={this.state.RescentProduct}
              keyExtractor={item => item.personName}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => this.actionOnRow(item)}>
                  <View>
                    <ParsonProfile item={item} />
                  </View>
                </TouchableWithoutFeedback>
              )}
              ListEmptyComponent={this.ListEmpty}

            />
          </ScrollView>
     
       
        
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
  PersonNameStyle: {
    marginTop: resp(10),
    width: resp(80),
    height: resp(20),
    color: '#000',
    fontWeight: 'bold',
  },
  ProfileDescription: {
    marginLeft: resp(-3),
    width: resp(260),
    height: resp(50),
    color: '#7F7F7F',
    fontSize: resp(12),
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
    height: resp(375),
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
  ProfileImageViewStyle: {
    margin: resp(10),
    width: resp(50),
    height: resp(50),
    borderRadius: resp(8),
  },
  RecentTextStyle: {
    fontSize: resp(14),
    marginTop: resp(30),
    marginLeft: resp(10),
    height: resp(50),
    color: '#8E8E8E',
  },
  hairline: {
    backgroundColor: '#C8C7CC80',
    height: 5,
    width: '100%',
  },
  ImageContainer: {
    marginLeft:resp(10),
    marginTop: resp(-15),
    flexDirection: 'column',
    width: resp(180),
    height: resp(210),
    margin: resp(7),
    borderRadius: resp(5),
  },
 
  card: {
    marginHorizontal: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
  },
  ProfileInfoContainer: {
    margin: resp(),
    marginTop: resp(15),
    flexDirection: 'column',
    flex: 0.6,
    width: resp(70),
    height: resp(70),
  },
  ListMenuContainer: {
    marginTop: resp(20),
    flexDirection: 'row',
    flex: 0.45,
    width: resp(0),
    height: resp(30),
  
  },
 
  viewButtonStyle: {
    color: '#000',
    marginRight: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: resp(4),
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
  ViewButtonContainer: {
    width: resp(60),
    height: resp(24),
    backgroundColor: '#fff',
  },

 

 
  columnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  itemNameStyle: {
    color: '#887F82',
    marginLeft: resp(7),
    fontSize: resp(14),
    marginLeft:resp(10),
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
  itemPriceStyle: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: resp(10),
    fontSize: resp(14),
    
  },
})
export default withNavigation (GeneralTab);