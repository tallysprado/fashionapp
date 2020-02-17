import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import {SliderBox} from 'react-native-image-slider-box'

import {products} from '../constants/mocks'

const Product = ({navigation}) => {
          
    var name = navigation.state.params.name
    var images = navigation.state.params.images

    return(
        <View>
            <SliderBox images={images} />
            <Text style={styles.h1} >  {name}</Text>
            

        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 34,
        left: 10,
        top: 200, 
        fontWeight: "300",
        color: '#000',
    }
})

export default Product