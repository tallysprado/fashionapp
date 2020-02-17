import React, {useEffect} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import {SliderBox} from 'react-native-image-slider-box'

import {products} from '../constants/mocks'

const Product = ({navigation}) => {
          
    
    var name = navigation.state.params.name
    var images = navigation.state.params.images
    var bio = navigation.state.params.bio

    return(
        <View>
            <SliderBox images={images} />
            <Text style={styles.h1} >  {name}</Text>
            <Text style = {styles.h2}> {bio} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: 'Raleway-Bold',
        fontSize: 34,
        left: 10,
        top: 25, 
        
    },
    h2: {
        fontFamily: 'SourceSansPro-Light',
        fontSize: 26,
        left: 5,
        top: 35,

    }
})

export default Product