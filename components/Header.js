import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Header = ({title}) => {
    return(
        <View style={styles.mainContent} >
            <Text style={styles.text} >{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContent: {
        width: '100%',
        height: 100,
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        left: 20,
        fontSize: 25,
        
    }
})