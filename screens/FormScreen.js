import React from 'react'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View ,Picker,TextInput,TouchableOpacity,Image, KeyboardAvoidingView} from 'react-native'

const FormScreen = ({navigation,route}) => {
    const [cinsiyet,setCinsiyet]=useState('')
    const [yas,setYas]=useState('')
    const [kilo,setKilo]=useState('')
    const [boy,setBoy]=useState('')
    const targett=route.params.target

    

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={require('../assets/resimler/Forms-bro.png')} style={{width:'100%',height:300,marginBottom:20,marginTop:20}}/>
            <TextInput value={cinsiyet}  onChangeText={text=>setCinsiyet(text)}   placeholder="Cinsiyet (kadın/erkek)" style={{color:'white',borderWidth:1,borderColor:'gray',margin:20,marginBottom:2,padding:5,fontSize:14,borderRadius:10,paddingLeft:10,width:300}}  placeholderTextColor={'gray'}/>
      
      <TextInput value={yas}  onChangeText={text=>setYas(text)}   placeholder="Yaş" style={{color:'white',borderWidth:1,borderColor:'gray',margin:20,marginBottom:2,padding:5,fontSize:14,borderRadius:10,paddingLeft:10,width:300}}  placeholderTextColor={'gray'}/>
      <TextInput value={kilo}  onChangeText={text=>setKilo(text)}   placeholder="Kilo" style={{color:'white',borderWidth:1,borderColor:'gray',marginBottom:2,margin:20,padding:5,fontSize:14,borderRadius:10,paddingLeft:10,width:300}}  placeholderTextColor={'gray'}/>
      
     
      <TextInput value={boy}  onChangeText={text=>setBoy(text)}   placeholder="Boy" style={{color:'white',borderWidth:1,borderColor:'gray',marginBottom:2,margin:20,padding:5,fontSize:14,borderRadius:10,paddingLeft:10,width:300}}  placeholderTextColor={'gray'}/>
      
      <Text style={{color:'gray',borderWidth:1,borderColor:'gray',opacity:0.7,margin:20,padding:5,paddingLeft:10,width:300,borderRadius:10}}>
          {targett}
      </Text>
      
      <TouchableOpacity disabled={!cinsiyet || !yas || !kilo || !boy ? true : false } onPress={()=>navigation.navigate('Program',{cinsiyet,yas,kilo,boy,targett})} style={{borderWidth:1,borderColor:'gray',marginTop:20,width:300,marginBottom:20,borderRadius:15,backgroundColor:'#077dc6'}}>
      
                <Text style={{color:'white',padding:10,fontSize:16,letterSpacing:1,textTransform:'uppercase',textAlign:'center'}}>Onayla</Text>
            </TouchableOpacity>

            <Text style={{color:'red',textAlign:'center'}}> ** Lütfen bilgilerinizi eksiksiz giriniz...</Text>
        </KeyboardAvoidingView>
    )
}

export default FormScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:'100%',  
        alignItems:'center'
    }
})
