import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image ,ScrollView} from 'react-native'
import { useEffect } from 'react'

const Hedef = ({navigation}) => {


    return (
        <ScrollView style={styles.container}>
               <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'gray',fontSize:26,textAlign:'center',marginVertical:10,letterSpacing:1}}>HEDEFİNİ SEÇELİM</Text>
             <Image source={require('../assets/resimler/Fitness-tracker-pana.png')} style={{width:'100%',height:350,alignItems:'center',marginVertical:15}}/>
             </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Karar',{id:1})
            }} style={{width:'80%',borderWidth:1,paddingVertical:20,borderColor:'gray',marginTop:10,borderRadius:20,backgroundColor:'#0088b2'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:19,textTransform:'capitalize',letterSpacing:1}}>Kas Kazanımı (Ekipmanlı)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Karar',{id:2})}} style={{width:'80%',borderWidth:1,paddingVertical:20,borderColor:'gray',marginTop:20,borderRadius:20,backgroundColor:'#9c00d1'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:19,textTransform:'capitalize',letterSpacing:1}}> Kas Kazanımı (Ekipmansız)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Karar',{id:3})}} style={{width:'80%',borderWidth:1,paddingVertical:20,borderColor:'gray',marginTop:20,borderRadius:20,backgroundColor:'#0f8200'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:19,textTransform:'capitalize',letterSpacing:1}}> Yağ Yakımı (Ekipmanlı)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Karar',{id:4})}} style={{width:'80%',borderWidth:1,paddingVertical:20,borderColor:'gray',marginTop:20,borderRadius:20,backgroundColor:'#bc5100'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:19,textTransform:'capitalize',letterSpacing:1}}>Yağ Yakımı  (Ekipmansız)</Text>
            </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

export default Hedef

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:'100%'
    }
    
})
