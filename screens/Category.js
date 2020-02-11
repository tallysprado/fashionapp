import React, {useState} from 'react'
import {View, FlatList, ImageBackground, Text } from 'react-native'

import {BlurView} from 'expo-blur'

//doesnt work
//import {data} from '../constants/'

import {data} from '../constants/mocks'

const Category = () => {
    const [dataState, setData] = useState(data)
    
    renderItem = ({ item }) => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1,
            }}>
                <ImageBackground style={{
                    resizeMode: "center",
                    width: "100%",
                    height: 230,
                    }} 
                    source={item.img}>

                    <BlurView 
                        style={{
                            width: '100%',
                            height: 15,
                            position: 'absolute',
                            bottom: 0,
                        }}
                        tint='light'
                        intensity={50}

                        
                    >
                        <Text> TESTE </Text>
                    </BlurView>
                    
                </ImageBackground>
            </View>
        );
    };

    return(
        <View>
            <FlatList 
                data={dataState}
                
                style={{
                    marginLeft: -5,
                    marginRight: -5,
                    marginTop: -5,
                }}

                renderItem={renderItem}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
            />
            </View>
    )
}


export default Category