import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, StackActions} from 'react-navigation'
import LoginScreen from './Component/Screens/LoginScreen'
import SplashScreen from './Component/Screens/SplashScreen'
import SignUPScreen from './Component/Screens/SignUPScreen'
import ForgotPasswordScreen from './Component/Screens/ForgotPasswordScreen'
import ResetPasswordScreen from './Component/Screens/ResetPasswordScreen'
import SignUPWithOtpScreen from './Component/Screens/SignUPWithOtpScreen'
import PhoneScreen from './Component/Screens/PhoneScreen'
import DashBoardScreen from './Component/Screens/DashBoardScreen'
import OpenForPublicScreen from './Component/Screens/OpenForPublicScreen'
import CartScreen from './Component/Screens/CartScreen'
import ChatScreen from './Component/Screens/ChatScreen'
import SettingScreen from './Component/Screens/SettingScreen'
import ProfileScreen from './Component/Screens/ProfileScreen'
import UploadCoverPhotoScreen from './Component/Screens/UploadCoverPhotoScreen'
import StoryViewScreen from './Component/Screens/StoryViewScreen'
import ForgetOtpScreen from './Component/Screens/ForgetOtpScreen'
import AddProductScreen from './Component/Screens/AddProductScreen'
import HomeScreen from './Component/Screens/HomeScreen';
import EditProductScreen from './Component/Screens/EditProductScreen'
import ProductDetailScreen from './Component/Screens/ProductDetailScreen'
import CartPlaceScreen from './Component/Screens/CartPlaceScreen'
import OderPlacedScreen from './Component/Screens/OderPlacedScreen'
import OderReceivedScreen from './Component/Screens/OderReceivedScreen'
import ShareWithScreen from './Component/Screens/ShareWithScreen'
import CartViewScreen from './Component/Screens/CartViewScreen'
import OderPlacedViewScreen from './Component/Screens/OderPlacedViewScreen'
import AccountScreen from './Component/Screens/AccountScreen'
import BackUpChats from './Component/Screens/BackUpChats'
import HelpScreen from './Component/Screens/HelpScreen'
import NotificationsScreen from './Component/Screens/NotificationsScreen'
import PrivacyScreen from './Component/Screens/PrivacyScreen'
import OpenForProfileScreen from './Component/Screens/OpenForProfileScreen'
import GeneralTab from './Component/Screens/GeneralTab'
import FavouriteTab from './Component/Screens/FavouriteTab' 
import OpenForPublicDetail from './Component/Screens/OpenForPublicDetail'
import FliterScreen from './Component/Screens/FliterScreen'
import SearchBarScreen from './Component/Screens/SearchBarScreen'
import EditProductHarshit from './Component/Screens/EditProductHarshit'
const NavStack = createStackNavigator(
  {
    // eslint-disable-next-line no-trailing-spaces

    LoginScreen: {screen: LoginScreen},
    SplashScreen: {screen:SplashScreen},
    SignUPScreen:{screen:SignUPScreen},
    ForgotPasswordScreen:{screen:ForgotPasswordScreen},
    ResetPasswordScreen: {screen:ResetPasswordScreen},
    SignUPWithOtpScreen :{screen:SignUPWithOtpScreen},
    PhoneScreen :{screen:PhoneScreen},
    DashBoardScreen:{screen:DashBoardScreen},
    OpenForPublicScreen:{screen:OpenForPublicScreen},
    CartScreen :{screen:CartScreen},
    ChatScreen:{screen:ChatScreen},
    SettingScreen:{screen:SettingScreen},
    ProfileScreen:{screen:ProfileScreen},
    UploadCoverPhotoScreen:{screen:UploadCoverPhotoScreen},
    StoryViewScreen :{screen:StoryViewScreen},
    ForgetOtpScreen:{screen:ForgetOtpScreen},
    AddProductScreen:{screen:AddProductScreen},
    AccountScreen: {screen:AccountScreen},
    BackUpChats: {screen:BackUpChats},
    HelpScreen:{screen:HelpScreen},
    NotificationsScreen:{screen:NotificationsScreen},
    PrivacyScreen:{screen:PrivacyScreen},
    OpenForProfileScreen:{screen:OpenForProfileScreen},
    GeneralTab :{screen:GeneralTab},
    FavouriteTab: {screen:FavouriteTab},
    OpenForPublicDetail:{screen:OpenForPublicDetail},
    FliterScreen :{screen:FliterScreen},
    SearchBarScreen:{screen:SearchBarScreen},
    EditProductHarshit:{screen:EditProductHarshit},
    
    //Screen by Afsar
    HomeScreen : {screen : HomeScreen},
    EditProductScreen :  {screen : EditProductScreen},
    ProductDetailScreen : {screen : ProductDetailScreen},

    CartPlaceScreen :{screen:CartPlaceScreen},
    OderPlacedScreen:{screen:OderPlacedScreen},
    OderReceivedScreen:{screen:OderReceivedScreen},

    CartViewScreen :{screen:CartViewScreen},
    OderPlacedViewScreen:{screen:OderPlacedViewScreen},
    ShareWithScreen : {screen :ShareWithScreen},     

    // eslint-disable-next-line no-trailing-spaces
  },
 
  
  {
    
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      animationEnabled: false,
    })

     
  },
 
 
);
 


const Apps = createAppContainer(NavStack)

export default class App extends React.Component {
  render () {
    return <Apps />
  }
}
