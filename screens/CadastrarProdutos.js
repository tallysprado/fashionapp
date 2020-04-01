import React, {useEffect, useState, useRef} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {FlatGrid} from 'react-native-super-grid'
import {themes} from '../constants'

import {Camera} from 'expo-camera'
import { RNCamera } from 'react-native-camera'


export default CadastrarProdutos = () => {
    
    return(
        <CameraApp/>
    )
}

const CameraApp = () => {
    let [flash, setFlash] = useState('off')
    let [zoom, setZoom] = useState(0)
    let [autoFocus, setAutoFocus] = useState('on')
    let [depth, setDepth] = useState(0)
    let [type, setType] = useState(Camera.Constants.Type.back)
    let [permission, setPermission] = useState('undetermined')

    let cameraRef = useRef(null)

    useEffect(
        async() =>{
            const {status} = await Camera.requestPermissionsAsync()
        }
        ,[]

    )   

    if(permission===false){
        return(
            <View>
                <Text>Permissão Negada</Text>
            </View>
        )
    }
    return(
        <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    )

}

const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        flex: 1,
    },
})