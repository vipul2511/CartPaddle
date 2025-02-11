import React, {Component} from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import resp from 'rn-responsive-font'
import {SliderBox} from 'react-native-image-slider-box'


class StoryViewScreen extends Component{
    constructor (props) {
        super(props)
        this.state = {
            images: [
                require('../images/Rectangle_image.png'),
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?girl',
                'https://source.unsplash.com/1024x768/?tree', 
              ],
        }
    }
    render () {
        return (
          <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.CloseButtonContainerStyles}
          onPress={() => {
            this.props.navigation.navigate('EditProductHarshit')
          }}>
          <Image
                source={require('../images/red_close_icon.png')}
                style={styles.CloseButtonViewStyles}
              />
          </TouchableOpacity>
            <View style={styles.ImageContainer}>
             <SliderBox
                images={this.state.images}
                style={styles.sliderImageStyle}></SliderBox>
                </View>
          </SafeAreaView>
        )
      }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      CloseButtonContainerStyles: {
          marginTop:resp(30),
          marginRight:resp(50),
        flex: 0.1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        
      },
      CloseButtonViewStyles:{
        marginRight:resp(20),
            width:resp(36.1),
            height:resp(36.1),
      },
      ImageContainer:{
          flex:0.75
      },
      sliderImageStyle: {
          marginTop:resp(100),
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          width:'99%',
          height: resp(500),
      },
})
export default StoryViewScreen