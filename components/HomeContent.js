import React, {useState} from 'react'
import {View, StyleSheet, Text, FlatList, ImageBackground, TouchableOpacity} from 'react-native'

import {products} from '../constants/mocks'
import {data} from '../constants/mocks'
import {colors} from '../constants/themes'

import {BlurView} from 'expo-blur'

import PriceMarker from './PriceMarker'



renderItem = ({item}) => {
    return(
        <View style={styles.itemContainer}>
            <TouchableOpacity >
                
                <ImageBackground style={styles.imageItem} source={item.img}>
                    {/*
                    <BlurView style={styles.blurView} tint='default' intensity={80}>
                        
                        <Text style={styles.text}>
                            {item.name}
                        </Text>

                    </BlurView>
                    */}
                    <PriceMarker  offert={item.offert} price={item.price} />
                </ImageBackground>
            
            </TouchableOpacity>
        </View>
    )
}

const Offerts = () => {
    
    const [dataState, setData] = useState(products)
    
    return( 
        <View style={styles.contentContainer} >
            <View style={styles.contentContainer2} >
                <Text style={styles.offersTittle} > Ofertas </Text>

                <FlatList
                    data={dataState}
                    style={styles.flatList}
                    horizontal={true}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator = {false}
                    
                />   
                </View>
            </View>
    )
}

const MostPurchased = () => {

const [dataState, setData] = useState(products)


    return(
        <View style={styles2.contentContainer} >
            <Text style={styles2.tittle}>Mais Comprados</Text>
            <FlatList
                data={dataState}
                style={styles.flatList}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default HomeContent = () => {
    
    return(
        <View style={{backgroundColor: colors.secondary}}>

            <MostPurchased/>
            <Offerts/>
            
        </View>
    )
}

const styles2 = StyleSheet.create({
    contentContainer: {
        height: 280,
    },
    tittle: {
        fontSize: 30,
        fontWeight: '500',
        left: 20,
        color: colors.tertiary,
        fontFamily: 'SourceSansPro-Bold',
    },
})

const styles = StyleSheet.create({
    contentContainer: {
        top: 20,
        backgroundColor: colors.secondary,
        resizeMode: "contain",

    },
    contentContainer2: {
        top: 80,
        backgroundColor: colors.secondary,
        height: '100%'

    },
    offersTittle: {
        fontSize: 30,
        fontWeight: '500',
        left: 20,
        color: colors.tertiary,
        fontFamily: 'SourceSansPro-Bold',
        
    },
    flatList: {
        margin: 1,
        
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 20,
        margin: 5,

    },
    imageItem: {
        resizeMode: "center",
        width: 200, 
        height: 230,
        marginTop: 5,
        marginBottom: 5,
    },
    
    text: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        color: '#fff',
        textShadowRadius: 5,
        textShadowOffset: {height: 1, width: 1},
        fontWeight: '600',
    },
})