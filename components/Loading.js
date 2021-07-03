import React from 'react'
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native'

const Loading = () => {
    const sozler=['Pes Etme','Asla Bırakma','Sakın Vazgeçme','İnancını Yitirme','Mücadele Et','Yıkılma Ayağa Kalk']
       
       var random=Math.floor(Math.random() * 6)
    return (
        <View style={{backgroundColor:'black',height:'100%',width:'100%',justifyContent:'center',opacity:0.8}}>
            <ActivityIndicator size="large"/>
            <Text style={{color:'gray',textAlign:'center',fontSize:22,letterSpacing:1,fontWeight:'bold',marginTop:5}}>
             Loading
            </Text>
            <Text style={{color:'#ff4c4c',textAlign:'center',fontSize:11,textTransform:'uppercase',letterSpacing:1,marginTop:13}}>
             {sozler[random]}
            </Text>
            <View style={{height:50}}/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})
