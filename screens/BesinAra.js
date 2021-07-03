import React from 'react'
import { StyleSheet, Text, View,TextInput,ScrollView ,ImageBackground} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import data from '../data';
import { useState } from 'react';


const BesinAra = () => {
    const [veri,setVeri]=useState('')
    return (
        
        <>

            <ImageBackground style={{width:'100%',height:'100%',alignItems:'center'}} source={require('../assets/logos/meyveler.png')}>

          
             <TextInput value={veri} onChangeText={text=>setVeri(text)} placeholder="Besin Ara" placeholderTextColor="black" style={{borderWidth:2,borderColor:'black',padding:5,textAlign:'center',letterSpacing:1,marginVertical:10,color:'black',backgroundColor:'#f8f8ff',width:300,borderRadius:10,height:35,fontWeight:'bold'}}/>
               
             {
            data.besinler.filter(bs=>{
                if(veri === "") {return null }
                else if(bs.name.toLowerCase().includes(veri.toLowerCase())){
                   return bs
                }
            }).map(bs=>(
               
             <View key={bs._id} style={{borderWidth:1,borderColor:'gray',padding:15,marginTop:20,width:300,backgroundColor:'black',borderRadius:10}}>
             <Text style={{color:'white',textAlign:'center',textTransform:'uppercase',fontSize:20,letterSpacing:1,borderBottomWidth:1,borderColor:'white',padding:10,fontWeight:'bold'}}>
                 {bs.name} / 100 gr 
             </Text>
             <Text style={{color:'white',textAlign:'center',letterSpacing:1,padding:5}}>
                Kalori : {bs.kalori} kcal
             </Text>
             <Text style={{color:'gray',textAlign:'center',letterSpacing:1,padding:5}}>
                Karbonhidrat : {bs.karbonhidrat} gr
             </Text>
             <Text style={{color:'gray',textAlign:'center',letterSpacing:1,padding:5}}>
                 Yağ: {bs.yag} gr
             </Text>
             <Text style={{color:'gray',textAlign:'center',letterSpacing:1,padding:5}}>
                 Protein: {bs.protein} gr
             </Text>
             <Text style={{color:'gray',textAlign:'center',letterSpacing:1,padding:5}}>
                 Tuz: {bs.tuz} gr
             </Text>
             <Text style={{color:bs.saglikdurumu === 'iyi' ? 'green' : 'red'  ,textAlign:'center',letterSpacing:1,padding:5}}>
                 Sağlık Açısından: {bs.saglikdurumu}
             </Text>
         </View>
         
            ))
        }          

            </ImageBackground>
           

            
          
        </>
    )
}

export default BesinAra

const styles = StyleSheet.create({
    container:{
backgroundColor:'black'
    },
    search:{
       
    }
})
