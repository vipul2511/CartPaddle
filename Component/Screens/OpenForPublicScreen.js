import React, { Component } from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native'
import { Container, TabHeading, Tab, Tabs } from 'native-base';
import resp from 'rn-responsive-font'
import GeneralTab from './GeneralTab'
import FavouriteTab from './FavouriteTab'


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



class OpenForPublicScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
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


        <View style={styles.hairline} />
        <View style={styles.MainContentBox}>
          <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ flex: 0.2, flexDirection: 'row' }}
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

          <Container style={{marginTop:resp(-485)}}>

            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#F01738' }} tabBarActiveTextColor={'red'} tabBarInactiveTextColor='#7F7F7F' >
              <Tab heading={<TabHeading style={{ backgroundColor: '#ebced7' }}><Text style={{ fontWeight: 'bold', color: '#F01738' }}>General </Text></TabHeading>}>
                <GeneralTab />
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: '#e6f7f2' }}><Text style={{ fontWeight: 'bold', color: '#06BE7E' }}>favourite</Text></TabHeading>}>
                <FavouriteTab />
              </Tab>
            </Tabs>

          </Container>

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
    backgroundColor: 'yellow',
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
  hairline: {
    backgroundColor: '#F1F0F2',
    height: 5,
    width: '100%',
  },

  MainContentBox: {
    flex: 0.93,
  
    backgroundColor: 'red',

  },
  TabBox: {
    flex: 0.07,
    color: 'black',
  },
  BackButtonContainer: {
    flex: 0.2,
    marginLeft: 10,
    backgroundColor: 'white',
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
})
export default OpenForPublicScreen
