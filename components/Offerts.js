import React, {useState} from 'react'
import {View, StyleSheet, Text, FlatList, ImageBackground, TouchableOpacity} from 'react-native'

import {products} from '../constants/mocks'
import {data} from '../constants/mocks'
import {colors} from '../constants/themes'

import {BlurView} from 'expo-blur'

import PriceMarker from './PriceMarker'

export default Offerts = () => {
    
    const [dataState, setData] = useState(products)

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

    return(
        <View style={styles.contentContainer} >
            <Text style={styles.offersTittle} > Ofertas </Text>

            <FlatList
                data={dataState}
                style={styles.flatList}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator = {false}
                
            />   

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        top: 20,
    },
    offersTittle: {
        fontSize: 30,
        fontWeight: '500',
        left: 20,
        color: colors.secondary,
        fontFamily: 'SourceSansPro-Bold',
    },
    flatList: {
        margin: 1,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 20,
        overflow: 'hidden',
        margin: 5,
        
    },
    imageItem: {
        resizeMode: "center",
        width: 200, 
        height: 230,
        marginTop: 5,
        marginBottom: 5,
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
})