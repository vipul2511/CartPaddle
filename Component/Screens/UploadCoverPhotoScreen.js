import React, { Component } from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native'
import resp from 'rn-responsive-font'
import { ScrollView } from 'react-native-gesture-handler'
import AppHeader from '../Component/AppHeader';
import AppImageSlider from '../Component/AppImageSlider';
import { backIcon, logo, closeIcon, tickIcon, addIcon, editIcon, submitIcon, addIconPink, imagePlaceholder } from '../Component/Images';
import ImageSelectDialog from '../Component/ImageSelectDialog';

const MAX_IMAGE_SIZE = 5;
const screenWidth = Dimensions.get('screen').width;





class UploadCoverPhotoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {


      imageList: [],
      showImageSelectDialog: false,
      selectedImageIndex: -1,
      isInnerImageSelect: false,
      isProductEdit: false
    }
  }


  onImagePick(response) {
    const source = { uri: response.uri };

    if (!this.state.isInnerImageSelect) {
      let newImageArray = [];
      newImageArray.push(source);
      this.state.imageList.push(newImageArray)

      if (this.state.imageList.length == 0) {
        this.setState({ selectedImageIndex: 0 })
      }
      else {
        this.setState({ selectedImageIndex: this.state.selectedImageIndex + 1 })
      }
    }
    else {
      this.state.imageList[this.state.selectedImageIndex].push(source);
    }
    this.setState({ isInnerImageSelect: false, showImageSelectDialog: false })
  }


  openImagePickerOption() {
    this.setState({ showImageSelectDialog: !this.state.showImageSelectDialog, isInnerImageSelect: false })
    this.imageSelectDialog.openGallery()

  }
  openCamara() {
    this.setState({ showImageSelectDialog: !this.state.showImageSelectDialog, isInnerImageSelect: false })
    this.imageSelectDialog.openCamera()

  }
  onImageSelect(index) {
    this.setState({ selectedImageIndex: index })
  }
  onInnerImageSelect() {
    this.setState({ showImageSelectDialog: !this.state.showImageSelectDialog, isInnerImageSelect: true })
    this.innerImageSelectDialog.showMenu()
  }
  removeInnerImage(index) {
    if (this.state.imageList[this.state.selectedImageIndex].length == 1) {
      this.removeImageFromList(this.state.selectedImageIndex)
    }
    else {
      this.state.imageList[this.state.selectedImageIndex].splice(index, 1);
    }
    this.setState({ imageList: this.state.imageList });
  }
  removeImageFromList(index) {
    this.state.imageList.splice(index, 1)
    this.setState({ selectedImageIndex: this.state.selectedImageIndex - 1 })
  }
  renderImageList(item, index, separators) {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.onImageSelect(index)} style={[styles.imageListContainView, index == MAX_IMAGE_SIZE - 1 && { marginEnd: 10 }]}>
        <Image style={styles.imageView} source={this.state.imageList[index][0]} />
        <TouchableOpacity
          onPress={() => { this.removeImageFromList(index) }}
          style={[styles.imageOptionIcon, { position: 'absolute', top: 5, end: 5 }]}
        >
          <Image style={styles.imageOptionIcon} source={closeIcon} />
        </TouchableOpacity>

      

      </TouchableOpacity>
    )
  }
 
  rendorImageSlider(item, index) {
    return (
      <View style={styles.imageSliderBig}>
        <View style={{ flex: 1 }}>
          <Image style={{ flex: 1 }} source={this.state.imageList[this.state.selectedImageIndex][index]} />
        </View>
      </View>
    )
  }
  onEditProduct() {
    this.props.navigation.navigate('EditProductScreen', { images: this.state.imageList[this.state.selectedImageIndex] })
  }
  render() {
    console.log("render() --------------->")
    console.log("this.state.imageList.length" + this.state.imageList.length)
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <AppHeader



        />



        <View style={[styles.container]}>
          <View style={{ flex: 1 }}>
            {(this.state.selectedImageIndex >= 0) ?
              <AppImageSlider
                sliderImages={this.state.imageList[this.state.selectedImageIndex]}
                rendorImages={(item, index) => this.rendorImageSlider(item, index)}
              /> :
              <View style={{ flex: 1 }}>
                <Image source={imagePlaceholder} style={[styles.imagePlaceholder]} />
              </View>}
          </View>

        
          <View style={[styles.imageSliderSmall]}>
            <ScrollView
              horizontal={true}
            >
             <FlatList
              horizontal={true}
              data={this.state.imageList}
              numColumns={1}
              renderItem={({ item, index, separators }) => (
                this.renderImageList(item, index, separators)
              )}
            />
              <ImageSelectDialog
                ref={(ref) => this.innerImageSelectDialog = ref}
                style={{ position: 'absolute', end: 10 }}
                onImagePick={(response) => { this.onImagePick(response) }}
              />


            </ScrollView>
          </View>
          <View style={styles.TabBox}>
            <View style={styles.tabStyle}>
              <TouchableOpacity
                style={styles.tabButtonStyle}
                onPress={() => this.openImagePickerOption()}
                >
                   <ImageSelectDialog
                  ref={(ref) => this.imageSelectDialog = ref}
                  style={{ position: 'absolute', end: 10 }}
                  onImagePick={(response) => { this.onImagePick(response) }}
                />
                <View style={styles.uploadContainer}>
                  <Image
                    source={require('../images/Image_icon.png')}
                    style={styles.StyleSettingTab}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.tabButtonStyle}
               onPress={() => this.openCamara()}
                >
                   <ImageSelectDialog
                  ref={(ref) => this.imageSelectDialog = ref}
                  style={{ position: 'absolute', end: 10 }}
                  onImagePick={(response) => { this.onImagePick(response) }}
                />
                <View style={styles.uploadContainer}>
                  <Image
                    source={require('../images/camara_icon.png')}
                    style={styles.StyleSettingTab}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.tabButtonStyle}
                onPress={() => {
                  this.props.navigation.navigate('')
                }}>
                {/* <View style={styles.uploadContainer}> */}
                <Image
                  source={require('../images/upload_icon.png')}
                  style={styles.styleChartTab}
                />
                {/* </View> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
  },
  centerRow: {
    flexDirection: 'row', flex: 1, justifyContent: 'center'
  },
  header: {
    width: '100%',
    height: 50,
    padding: 10,
    flexDirection: 'row'
  },
  headerLogo: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  headerTitle: {
    fontSize: 20
  },
  backIcon: {
    height: 35,
    width: 35,
    resizeMode: 'contain'
  },
  imageSliderBig: {
    marginTop:resp(150),
    flex: 0.5,
    backgroundColor: '#e3e3e3'
  },
  imageSliderSmall: {
    justifyContent: 'center',
    marginTop: -50,
    minHeight: (screenWidth / 4)
  },
  imagePlaceholder: {
    
    width: screenWidth,
    height: 500,
    backgroundColor: 'red',
    resizeMode: 'cover'
  },
  addImageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 4) - 10,
    height: (screenWidth / 4) - 10,
    backgroundColor: 'pink',
    marginStart: 5,
    alignSelf: 'center',
    borderRadius: 5
  },
  addImageButtonText: {
    width: ((screenWidth / 4) - 10) / 3,
    height: ((screenWidth / 4) - 10) / 3,
    textAlign: 'center'
  },
  imageListContainView: {
    borderRadius: 5, marginStart: 10,
    marginTop:30,
  },
  imageView: {
    borderRadius: 5,
    width: resp(130),
    height: resp(70),
    backgroundColor: 'red'
  },
  tabButtonStyle: {
    flex: 0.33,
    width: resp(30),
    height: resp(50),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  uploadContainer: {
    width: resp(50),
    height: resp(50),
    borderRadius: resp(40),
    backgroundColor: '#e9e9e9',
  },
  StyleSettingTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    color: '#000',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleChartTab: {
    marginTop: 9,
    width: 50,
    height: 50,
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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


  UploadImagesContainer: {
    // flexDirection:'row',
    flex: 0.25,
    position: 'absolute',
    bottom: 100,
  },
  storyItemBox: {
    marginBottom: -12,
    height: resp(90),
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,

    elevation: 2,
  },
  columnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageViewStyle: {
    margin: resp(2),
    width: resp(130),
    height: resp(90),
    borderWidth: 2,
  },
  CloseIconStyle: {
    marginTop: resp(10),
    marginRight: resp(15),
    position: 'absolute',
    top: 0,
    right: -5,
    width: 16,
    height: 16,
    borderRadius: resp(20),
    backgroundColor: '#9da1a3',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
  placeholder: {
    borderWidth: 1,

    backgroundColor: '#fff',
    width: '95%',
    height: 250,
  },
  button: {
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  innerImageView:
  {
    borderRadius: 5,
    width: (screenWidth / 4),
    height: (screenWidth / 4),
    backgroundColor: 'red'
  },
  imageOptionIcon: {
    height: 20, width: 20,
    resizeMode: 'contain'
  },
  editIcon: {
    height: 60, width: 60, resizeMode: 'contain'
  },
  submitIcon: {
    height: 55, width: 55, resizeMode: 'contain'
  },
  TabBox: {
    flex: 0.1,
  },
  tabStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    shadowColor: '#fff',
    elevation: 20,
    shadowColor: 'grey',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
});

export default UploadCoverPhotoScreen
