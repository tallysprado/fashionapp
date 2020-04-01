import React, {useState} from 'react'
import {View ,StyleSheet, Animated, Image,Text, FlatList, ImageBackground, TouchableOpacity, ScrollView, Keyboard} from 'react-native'

import {products} from '../constants/mocks'
import {data, categories} from '../constants/mocks'
import {colors} from '../constants/themes'


import PriceMarker from './PriceMarker'

import {useSelector, useDispatch} from 'react-redux'

import {FlatGrid} from 'react-native-super-grid'


renderItem = ({item}) => {
    return(
        <View style={styles.itemContainer}>
            <TouchableOpacity >
                
                <ImageBackground style={styles.imageItem} source={item.img}>
                    
                    <PriceMarker  offert={item.offert} price={item.price} name={item.name} />

                </ImageBackground>
            
            </TouchableOpacity>
        </View>
    )
}

const Category = () => {
    
    
    return(
        
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={categories}
            renderItem={({item})=>(
                <TouchableOpacity>
                    <Image style={styles.categoryItem} source={item.img} />
                </TouchableOpacity>
            )}
        />
    )
}

const Offerts = () => {
    
    const [dataState, setData] =  useState(products)
    
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

const MostLike = () => {
    
    const [dataState, setData] = useState(products)
    
    return( 
        <View style={styles.contentContainer} >
                <Text style={styles.offersTittle} > Mais Curtidos    </Text>

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



const ResultSearch = (text)=> {
    var string = text.text[0].toUpperCase()
    console.log(string)
    const [dataState, setData] = useState(products)
    const filtered = dataState.filter(item => {
        if(item.name.includes(string)) return item
    })

    return(
        
        <View style={styles2.contentContainer} >
            <Text style={styles2.tittle}>Resultado da Busca</Text>
            <FlatList
                data={filtered}
                style={styles.flatList}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default HomeContent = ({navigation}) => {
    
    const query = useSelector(state => state.query)
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters[0])

    const [fadeAnim] = useState(new Animated.Value(0))
    console.log(filters)
    if(filters===true){
        Animated.spring(
            fadeAnim,
            {
                toValue: 0,
                speed: 100,
            }
        ).start()
    }else{
        Animated.spring(
            fadeAnim,
            {
                toValue: -500,
                speed: 2,
            }
        ).start()
    }
    

    if(query!=''){
        return(
            <View style={{top: 90}}>
                <Animated.View style={[styles2.filtersContainer,{top: fadeAnim}]}>
                    <Filters/>
                </Animated.View>
                <ResultSearch text={query} />
            </View>
        )
    }
    else{
        return(
            <View style={{top:90, backgroundColor: colors.secondary}}>
                <ScrollView 
                    
                    style={{backgroundColor: colors.secondary}}>
                    

                    <Animated.View style={[styles2.filtersContainer,{top: fadeAnim}]}>
                        <Filters/>
                    </Animated.View>
                    <MostPurchased/>
                    <Offerts/>
                    <MostLike/>
                    
                </ScrollView>
                </View>
        )
    }
}

const Filters = () => {
    
    const dispatch = useDispatch()

    

    return(
        <FlatGrid
        itemDimension={50}
        items={categories}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={styles2.itemContainer}>
            <Image style={{height: 48, resizeMode: 'contain'}} source={item.img} />
          </View>
        )}
      />
    )
}


const styles2 = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
      },
    itemContainer: {
        height: 50
    },
    
    filtersContainer: {
        
        zIndex: 1,
        flex: 1,
        width: '100%',
        height: 130,
        backgroundColor: colors.secondary,
        position: 'absolute',
        
    },
    contentContainer: {
        height: 300
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
        backgroundColor: colors.secondary,
        resizeMode: "contain",
    },
    categoryItem: {
        width: 48,
        height: 48,
        margin: 10,
    },
    categoryView: {
        top: 100,
    },
    contentContainer2: {
        top: 0,
        backgroundColor: colors.secondary,
        height: '100%',

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
        flexDirection: 'column',
        margin: 5,
        
    },
    imageItem: {
        resizeMode: 'cover',
        borderRadius:30,
        overflow: 'hidden',
        width: 200, 
        height: 225,
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