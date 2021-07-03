import React from 'react'
import { StyleSheet, Text,Image, View, ImageBackground,SafeAreaView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 

const EntryScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'black'}}>
            <ImageBackground source={require('../assets/resimler/Fitness-tracker-bro.png')} style={{width:'100%',height:'100%',justifyContent:'space-between'}}>
                <View style={styles.logo}> 
                <Image  source={require('../assets/logos/FİT_UP.png')} style={{width:95,height:50,borderRadius:30}}/>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{borderWidth:1,borderColor:'white',marginTop:10,margin:5,borderRadius:15}}>
                <Text style={{color:'white',padding:18,fontSize:18,textTransform:'uppercase',textAlign:'center',opacity:0.5}}>Hazırsan Başlayalım...</Text>
            </TouchableOpacity>
            </ImageBackground>
           
            
        </SafeAreaView>
    )
}

export default EntryScreen

const styles = StyleSheet.create({
    logo:{
       marginTop:50,
       marginLeft:40
    }
})
