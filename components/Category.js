import React, {useState} from 'react'
import {View, FlatList, Image, } from 'react-native'

import {data} from '../constants/'

renderItem = ({ item }) => {
    return (
        <View style={{
            width: "50%",
            height: 240,
            padding: 5,
        }}>
            <ImageBackground style={{
                resizeMode: "center",
                width: "100%",
                height: 230,
                }} 
                source={item.img}>
                
                <View style={{  
                    flexWrap: 'wrap',            
                    alignContent: 'space-between',
                    //position: 'absolute', 
                    //bottom: 0,
                    height: 50,
                    width: '100%',
                    backgroundColor: 'rgba(222,222,54,0.3)'

                }}>

                    <Text>Moda Praia</Text>
                    
                </View>

                
            </ImageBackground>
        </View>
    );
};

function Category () {
    
    const [dataState, setData] = useState(data)
    
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