
import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Menu, { MenuItem } from 'react-native-material-menu';

export default class ImageSelectDialog extends Component {
  constructor(props) {
      super(props);
      this.state = {
        
        
      };

      
}
 
showMenu = () => {
  this._menu.show();
};
hideMenu = () => {
  this._menu.hide();
};



componentWillUnmount()
{

}

openCamera()
{
  this.hideMenu()
  const options={}
  ImagePicker.launchCamera(options, (response) => 
  {
    this.onImagePick(response)
  });
}

openGallery()
{
  this.hideMenu()
  const options={}
  ImagePicker.launchImageLibrary(options, (response) => {
    this.onImagePick(response)
  });
}

onImagePick(response)
{
  // console.log('Response = ', response);
 
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };
 
    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    this.props.onImagePick(response)
    this.setState({
      avatarSource: source,
    });
  }
}

render() {
  const textStyle ={fontSize:17,borderBottomColor:"#e3e3e3",borderBottomWidth:1,paddingBottom:3}
    return(
      <Menu
        ref={(ref) => this._menu = ref }>
        <MenuItem onPress={() => {this.openCamera()}}>{'Camera'}</MenuItem>
        <MenuItem onPress={() => {this.openGallery()}}>{'Gallery'}</MenuItem>
        <MenuItem onPress={() => {}}>{'Product Master'}</MenuItem>
      </Menu>
    );
 }

}
