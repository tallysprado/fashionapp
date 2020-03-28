import React, {useState} from 'react'
import {View, StyleSheet, Platform, TouchableOpacity, TextInput} from 'react-native'
import { colors } from '../constants/themes'

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import {useDispatch} from 'react-redux'



const Header = ({title}) => {
    
    const dispatch = useDispatch()
    
    return(
        <View style={styles.contentContainer} >

                <View style={styles.searchBar} >
                    
                    <Icon name={Platform.OS==='ios'?'ios-search':'md-search'} style={styles.searchIcon} size={36} />
                    

                    <TextInput
                    style ={styles.textInput}
                    placeholder={'Buscar em Fortaleza'}
                    onChangeText={(text)=>dispatch({type: 'SEARCH', title: text})}
                    
                />

                </View>
               
                <TouchableOpacity style={styles.filtersButton}>
                    <MaterialIcon size={36} name='filter' style={styles.filterIcon} /> 
                </TouchableOpacity>

        </View>

    )

}





export default Header

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {

        fontSize: 20,
        flex: 1,
    },
    filtersButton: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        right: 10,
        borderRadius: 60,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    filterIcon: {
        color: 'white'
    },
    
    searchBar: {
        width: '80%',
        height: 50,
        top: 40,
        left: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,254,248, 1)',
        borderRadius: 40,
        position: 'absolute',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.15,
        
        
    },
    searchIcon: {
        flex: 0.2,
        left: 15,
        top: 7.5,
        color: colors.primary
    },
    text: {
        color: '#000',
        left: 20,
        fontSize: 25,
        
    }
})