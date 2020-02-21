import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { colors } from '../constants/themes'

const Header = ({title}) => {
    return(
        <View style={styles.contentContainer} >
            <Text style={styles.text} >{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    contentContainer: {
        width: '90%',
        height: 60,
        top: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,254,248, 1)',
        borderRadius: 20,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.15,
        
    },
    text: {
        color: '#000',
        left: 20,
        fontSize: 25,
        
    }
})