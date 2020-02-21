import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {colors} from '../constants/themes'

export default PriceMarker = ({offert, price}) => {
    return(
        <View style={styles.contentContainer} >
        
            <View style={styles.offertContainer}>
                
                <Icon style={styles.icon} name='local-offer' size={70} color={colors.primary}/>
                <Text style={styles.offertText}>{offert}%</Text>

            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText} >R${price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    offertContainer: {
        backgroundColor: 'transparent',
        top: 0,
        right: 0,
        alignItems: 'center',
        position: 'absolute',
    },  
    priceContainer: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: 190,
        left: 10,
    },
    priceText: {
        fontFamily: 'SourceSansPro-Bold',
        color: colors.primary,
        fontSize: 26,
    },
    offertText: {
        textAlign: 'center',
        position: 'absolute',
        top: 24,
        fontSize: 18,
        fontFamily: 'SourceSansPro-Bold',
        color: 'white',

    },
    icon: {
        top: 2,

    },
})