import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppConst from '../Component/AppConst';
import AppImageSlider from '../Component/AppImageSlider';
import Colors from '../Component/Colors';
import { backIconWhite,lessRoundBlackIcon,addRoundBlackIcon } from '../Component/Images';
import Collapsible from 'react-native-collapsible';
import Toast from 'react-native-simple-toast';

const screenWidth = Dimensions.get('screen').width;


export default class ProductDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.AddCartProductCall = this.AddCartProductCall.bind(this),
      

        this.state = {
          baseUrl: 'https://www.cartpedal.com/frontend/web/',
          showFullImageView : false,
          viewMore : false,
          imageList : [require('../images/productImage5.png'),require('../images/productImage5.png'),],
        }
        this.doubleClick = false;
        this.hidden = false;
    }

    
    onImageClick()
    {
      if (this.doubleClick) 
      {
        
          this.props.navigation.navigate('StoryViewScreen')
      
      //  this.setState({showFullImageView : !this.state.showFullImageView})
      }
      else
      {
          this.doubleClick = true;
          setTimeout(() => {
            this.doubleClick = false;
        }, 800);
      }
    }

    renderInnerImageList(item, index, separators)
    {
     return(
       <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={ () =>this.onImageClick()}>
             <Image style={styles.imageView} source={item}/>
        </TouchableOpacity>
      )
    }
 
    AddToCart(){
      this.AddCartProductCall()
     }
  
    AddCartProductCall() {
      let formData = new FormData()
    
      formData.append('user_id',  +10)
    
      formData.append('product_id', + 50)
      formData.append('quantity', + 2)
      formData.append('price', + 999)
      formData.append('seller_id',+ 7)

      console.log('form data==' + formData)
    
      var AddCartProductUrl ="https://www.cartpedal.com/frontend/web/api-product/add-cart"
    
      console.log('Add Card Url:' + AddCartProductUrl)
      fetch(AddCartProductUrl, {
        method: 'Post',
        headers: {
          'Content-Type': 'multipart/form-data',
          device_id: '1234',
          device_token: '1111',
          device_type: 'android',
          Authorization: 'Bearer xriPJWJGsQT-dUgP4qH11EMM357_kEaan7zJ4Vty'
        },
        body: 
        formData,
        
      })
        .then(response => response.json())
        .then(responseData => {
        
          if (responseData.code == '200') {
           
            Toast.show(responseData.message);
            //this.setState({ProfileData:responseData.data})
        
    
          } else {
           
            alert(responseData.message)
    
          }
    
           console.log('response object:', responseData)
          // console.log('User user ID==' + responseData.data.userid)
          // console.log('access_token ',responseData.data.access_token)
          // console.log('Profile ID===== ',responseData.data.id)
         
        })
        .catch(error => {
        //  this.hideLoading();
          console.error(error)
        })
    
        .done()
    
    
    }
 
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <View style={[styles.container,{backgroundColor:'#e3e3e3'}]}>

        <AppImageSlider
            sliderImages={this.state.imageList}
            rendorImages={(item, index) => this.renderInnerImageList(item, index)}
        />

        </View>
        {(!this.state.showFullImageView)?
        <View style={{backgroundColor:'white',borderTopStartRadius:30,borderTopEndRadius:30,marginTop:-50}}>

          <View style={{height:7,width:50,backgroundColor:'#e3e3e3',alignSelf:'center',marginTop:10,marginBottom:20,borderRadius:4}}/>

          <View style={{flexDirection:'row',marginStart :30}}>
            <Text style={styles.detailTextStyle}>{AppConst.rupeeSym}500,</Text>
            <Text style={styles.detailTextStyle}>Bunch Price 500x6 = {AppConst.rupeeSym}3000,</Text>

          </View>
          <View style={{flexDirection:'row',marginStart :30,marginTop:10,marginBottom:10}}>
            <Text style={styles.detailTextStyle}>Kurti Patiyala</Text>

            <Text style={[styles.detailTextStyle,{marginStart:10}]}>Quantity</Text>
            <TouchableOpacity  >
                <Image style={styles.addLessIcon} source={lessRoundBlackIcon}/>
             </TouchableOpacity>
               <Text style={styles.detailTextStyle}>1</Text>
             <TouchableOpacity >
                <Image style={styles.addLessIcon} source={addRoundBlackIcon} />
             </TouchableOpacity>


            <TouchableOpacity onPress={() => {this.setState({viewMore : !this.state.viewMore})}} >
                <Text style={[styles.detailTextStyle,{color:'#FFDF00',marginStart:10}]}>{this.state.viewMore? 'View less' : 'View more'}</Text>
             </TouchableOpacity>
          </View>


          <Collapsible collapsed={!this.state.viewMore}>
            <View style={{height: 50,backgroundColor:'red'}} />
          </Collapsible>          

          <View style={{flexDirection:'row',}}>
           
             <TouchableOpacity style={[styles.bottomButtonStyle,{backgroundColor:'white'}]}
              onPress={() => {
                this.AddToCart()}}>
                <Text style={styles.bottomButtonTextStyle}>{AppConst.btnTitleAddToCart}</Text>
             </TouchableOpacity>

             <TouchableOpacity style={[styles.bottomButtonStyle,{backgroundColor:Colors.themeRed}]}>
                <Text style={[styles.bottomButtonTextStyle,{color:'white'}]}>{AppConst.btnTitleBuyNow}</Text>
             </TouchableOpacity>

          </View>  
       
        </View>:null}
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{position: 'absolute',start : 20,top: 30,}}>
            <Image  source={backIconWhite} style={styles.backIcon}/>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : '#fff'
  },
  container:{
    flex:1,
  },
  bottomButtonStyle: {
    flex: 1,
    height: 60,
    justifyContent:'center',
    elevation: 20
  },
  bottomButtonTextStyle: {
    fontSize : 15,
    fontWeight :'bold',
    textAlign :'center',
  },
  detailTextStyle : {
    fontSize : 15,
    // fontWeight :'bold',
    textAlign :'center',

  },
  saveCancelButton: {
    fontSize:17,
    borderBottomWidth : 1,    
  },
  backIcon : {
      height : 35,
      width : 35,
      resizeMode:'contain',
   },
   addLessIcon : {
    height : 20,
    width : 20,
    marginStart:5,marginEnd:5,
    resizeMode:'contain',
   },
   imageView : {
    flex:1,
    borderRadius : 5,
    width : screenWidth,
    height : screenWidth,
  },
  inputTextView : {
      fontSize:17,
      borderBottomColor : '#e3e3e3',
      borderBottomWidth : 1,
      marginTop: 10
  }

});
