import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {FlatGrid} from 'react-native-super-grid'

import {themes} from '../constants'

const Options = ({navigation}) => {
    let items = []
    //const type = navigation.getParam('type');
    items = [
        { name: 'CADASTRAR PRODUTOS', route: 'CadastrarProdutos'}, { name: 'REMOVER PRODUTOS'},
        { name: 'LISTAR PRODUTOS'},
    ];
    return(
        <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => 
            (
            <TouchableOpacity onPress={()=>{navigation.navigate(item.route)}} >
                <View style={[styles.itemContainer, { backgroundColor: themes.colors.primary }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            )}
    />
)
}

export default Produtos = ({navigation}) =>{
    return(
        <View style={styles.contentContainer}>
            <Options navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        top: 20,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
})