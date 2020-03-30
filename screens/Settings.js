import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

import {FlatGrid} from 'react-native-super-grid'

import {themes} from '../constants'


export default Settings = ({navigation}) =>{
    let items = []
    const type = navigation.getParam('type');
    if(type==='seller'){
        items = [
            { name: 'INFORMAÇÕES', code: 'Perfil da loja' }, { name: 'Produtos', code: 'Cadastrar e remover itens' },
            { name: 'RELATÓRIOS', code: 'Vendas, curtidas e comentários' }, { name: 'Ajuda', code: 'Guia passo a passo' },
        ];
    }
    else{
        items = [
            { name: 'INFORMAÇÕES', code: 'Perfil do usuário' }, { name: 'MINHAS COMPRAS', code: 'Todas as transações' },
            { name: 'FAVORITOS', code: 'Curtidas e comentários' }, { name: 'Ajuda', code: 'Guia passo a passo' },
        ]; 
    }
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
            <TouchableOpacity onPress={()=>{navigation.navigate(item.name)}}>
                <View style={[styles.itemContainer, { backgroundColor: themes.colors.primary }]}>
                    <Text style={styles.itemName}>{item.name.toUpperCase()}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text>
                </View>
            </TouchableOpacity>
            )}
    />
)

}




const styles = StyleSheet.create({
    gridView: {
        paddingTop: 40,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
})