import React, {useState} from 'react'
import {View, FlatList, ImageBackground, Text, StyleSheet } from 'react-native'


import {BlurView} from 'expo-blur'

//doesnt work
//import {data} from '../constants/'

import {data} from '../constants/mocks'
import { TouchableOpacity } from 'react-native-gesture-handler'

import HomeContent from '../components/HomeContent'


export default Home = ({navigation}) => {
    return(
        <HomeContent />
    )
}



const styles = StyleSheet.create({
    
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 20,
        overflow: 'hidden',
        margin: 5,
    },
    imageItem: {
        resizeMode: "center",
        width: "100%", 
        height: 230,
    },
    blurView: {
        width: '100%',
        height: 40,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        color: '#fff',
        textShadowRadius: 5,
        textShadowOffset: {height: 1, width: 1},
        fontWeight: '600',
    },
    flatList: {
        marginLeft: 1,
        marginRight: 1,
        marginTop: 1,
        backgroundColor: '#f1f1f1'
    },
})
