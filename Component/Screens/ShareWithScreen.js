import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppConst from '../Component/AppConst';
import AppImageSlider from '../Component/AppImageSlider';
import { moreIcon, searchIcon,contactIcon,tickIcon,untickIcon,submitIcon } from '../Component/Images';
import AppHeader from '../Component/AppHeader';
import Menu, { MenuItem } from 'react-native-material-menu';


const screenWidth = Dimensions.get('screen').width;


export default class ShareWithScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contactList : ['g1','g2','g3'],
            isAllContactSelect: false
        }

        let param = this.props.navigation.state.params;
        if(param && param.images)
        {
            this.state.imageList = param.images;
        }    
      
     }

    rendorContactList(item, index, separators)
    {
     return(
         <View>
        <View style={[styles.upperRowStyle]}>
            <Image source={contactIcon} style={styles.grouptIcon} />
            <TouchableOpacity style={{flex:1}}>
                <Text style={styles.rowTitle}>
                    Group 1
                </Text>
                <Text style={styles.rowDetail}>
                    I just want to be appriciate
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {}}
            >
                {(true)?
                <Image source={untickIcon} style={styles.tickIcon} />
                :<Image source={tickIcon} style={styles.tickIcon} />}
            </TouchableOpacity>
        </View>
            {(index != this.state.contactList.length-1)?
            <View style={{flex:1,height:1,backgroundColor:'#e3e3e3',margin:20}} />:null}
        </View>
         )
    }
 

  render() {
      const rigthMenu =(
      <View style={{marginEnd:10,flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={searchIcon} style={styles.searchMenuIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this._menu.show()}}
          >
              <Image source={moreIcon} style={styles.moreMenuIcon} />
          </TouchableOpacity>
      
        <Menu
            ref={(ref) => this._menu = ref }>
            <Text style={{fontSize:16,fontWeight:'bold', marginStart:10,marginEnd:10,marginTop:20,marginBottom:10}} onPress={() => {}}>{'Create New Group'}</Text>
            <Text  style={{marginStart:10,marginEnd:10,marginBottom:20,fontSize:13}}>{'(for your personol use)'}</Text>
        </Menu>

      </View>
      )
    return (
      <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <View style={[styles.container]}>
        <AppHeader
            headerStyle={{backgroundColor:'white'}}
            rigthMenu={rigthMenu}
        />
        <View style={{backgroundColor:'white',paddingTop:50}}>
        <TouchableOpacity
            style={styles.selectAllBtn}
        >
            <Text style={{textAlign:'center'}}>Select All</Text>
        </TouchableOpacity>

        <View style={styles.upperRowStyle}>
            <Image source={contactIcon} style={styles.contactIcon} />
            <TouchableOpacity style={{flex:1}}>
                <Text style={styles.rowTitle}>
                    All Contacts
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {this.setState({isAllContactSelect : !this.state.isAllContactSelect})}}
            >
                {(this.state.isAllContactSelect)?
                <Image source={untickIcon} style={styles.tickIcon} />
                :<Image source={tickIcon} style={styles.tickIcon} />}
            </TouchableOpacity>
        </View>

        <View style={[styles.upperRowStyle,{marginTop:20,marginBottom:20}]}>
            <Image source={contactIcon} style={styles.contactIcon} />
            <TouchableOpacity style={{flex:1}}>
                <Text style={styles.rowTitle}>
                    Open for public
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {this.setState({isAllPublicGrpSelect : !this.state.isAllPublicGrpSelect})}}
            >
                {(this.state.isAllPublicGrpSelect)?
                <Image source={untickIcon} style={styles.tickIcon} />
                :<Image source={tickIcon} style={styles.tickIcon} />}
            </TouchableOpacity>
        </View>
        </View>

        <View style={{backgroundColor:'white',marginTop:5,flex:1,paddingTop:20,paddingBottom:60}}>
            <FlatList
                data={this.state.contactList}
                keyExtractor={item => item.StoryImage}
                renderItem={({item,index}) => (this.rendorContactList(item,index))}
            />

            <View style={{position:'absolute',height:60,width:'100%', bottom:0,backgroundColor:'#8a1008',justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => {
                            
                        }}
                        style={{alignSelf:'flex-end',marginEnd:20,position:'absolute',end:0,top:-32}}>
                        <Image source={submitIcon} style={styles.submitIcon} />
                    </TouchableOpacity>

                    <Text style={{color:'white',marginStart:20,marginEnd:20}} numberOfLines={1} > {'>'} Chanda, Rahul, Group1, Group4, Radha,Sonu Kumar, Deepak </Text>

            </View>
        </View>
        
        </View>
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
    backgroundColor:'#e3e3e3'
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

   imageView : {
    borderRadius : 5,
    width : screenWidth,
    height : screenWidth,
  },
  inputTextView : {
      fontSize:17,
      borderBottomColor : '#e3e3e3',
      borderBottomWidth : 1,
      marginTop: 10
  },
  searchMenuIcon:{
    height : 30,
    width : 30,
    resizeMode:'contain',
    marginEnd:5
  },
  moreMenuIcon: {
      height : 25,
      width : 30,
      resizeMode:'contain'
  },
  selectAllBtn : {
    backgroundColor:'#e3e3e3',width:100,padding:5,borderRadius:30,alignSelf:'flex-end',marginEnd:20
  },
  contactIcon : {
    height:50,width:50,resizeMode:'contain',borderRadius:5
  },
  grouptIcon :{
    height:65,width:65,resizeMode:'contain',borderRadius:5

  },
  rowTitle :{
      fontSize:18,
      marginStart:10,
  },
  rowDetail :{
    fontSize:14,
    marginStart:10,
    color:'gray'
  },
  tickIcon :{
    height:30,width:30,resizeMode:'contain',borderRadius:5
  },
  upperRowStyle:{
    flexDirection:'row',alignItems:'center',paddingStart:20,paddingEnd:20
  },
  submitIcon: {
    height:55,width:55,resizeMode:'contain',
  }

});
