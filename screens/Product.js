import React, {useEffect} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native'

import {SliderBox} from 'react-native-image-slider-box'

import Icon from 'react-native-vector-icons/Ionicons'

import {products} from '../constants/mocks'
import {colors} from '../constants/themes'

const Product = ({navigation}) => {
          
    
    var name = navigation.state.params.name
    var images = navigation.state.params.images
    var bio = navigation.state.params.bio
    

    return(
        <View style={styles.contentContainer}>

            <SliderBox images={images} />
            
            <Text style={styles.h1} >  {name}</Text>
            <Text style = {styles.h2}> {bio} </Text>   
            
            <TouchableOpacity style={styles.cartButton}>
                <Icon color={colors.category} name={Platform.OS==='ios'?'ios-cart':'md-cart'} size={46} />
                <Text style={styles.actionButtonsText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
                <Icon color={colors.category} name={Platform.OS==='ios'?'ios-cash':'md-cash'} size={46} />
                <Text style={styles.actionButtonsText}>Comprar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,

    },
    actionButtonsText: {
        textAlign: 'center',
        color: colors.category,
    },
    cartButton: {
        position: 'absolute',
        left: 20,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
        bottom: 20,
        alignItems: 'center',
        width: 100,
    },
    buyButton: {
        position: 'absolute',
        right: 20,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
        bottom: 20,
        alignItems: 'center',
        width: 100,
    },  
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