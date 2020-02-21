import React from 'react'
import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import { colors } from '../constants/themes'

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({title}) => {
    return(
        <View style={styles.contentContainer} >

                <View style={styles.searchBar} >
                    <Icon name={Platform.OS==='ios'?'ios-search':'md-search'} style={styles.searchIcon} size={36} />
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filtersButton: {
        backgroundColor: colors.quartenary,
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
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.15,
        justifyContent: 'center'
        
    },
    searchIcon: {
        left: 15,
        top: 2.5,
        color: colors.primary
    },
    text: {
        color: '#000',
        left: 20,
        fontSize: 25,
        
    }
})