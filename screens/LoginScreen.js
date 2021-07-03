import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


     useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                navigation.replace('Home')
            }
        }) 
     return unsubscribe
     },[])

    const signIn =()=>{
      auth.signInWithEmailAndPassword(email,password)
      .catch(error=>alert(error))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
           <Image source={require('../assets/logos/login.png')} style={{width:'80%',height:110,marginBottom:20}}/>
           <View>
               <TextInput value={email}  onChangeText={text=>setEmail(text)}   placeholder="Email" style={{color:'white',borderWidth:1,borderColor:'gray',margin:10,width:300,marginBottom:2,padding:5,fontSize:20,borderRadius:10,paddingLeft:10}}  placeholderTextColor={'gray'}/>
               <TextInput value={password} onChangeText={text=>setPassword(text)}  placeholder="Password" secureTextEntry style={{color:'gray',borderWidth:1,width:300,borderColor:'gray',margin:10,marginBottom:40,padding:5,fontSize:20,borderRadius:10,paddingLeft:10}}  placeholderTextColor={'gray'} onSubmitEditing={signIn}/>
               
           </View>
           <TouchableOpacity onPress={signIn} style={{color:'gray',borderWidth:1,borderColor:'gray',width:370,borderRadius:10,backgroundColor:'#1c1c1c',width:300,alignItems:'center'}}>
               <Text style={{color:'gray',fontSize:18,textAlign:'center',padding:10}} >Giriş Yapın...</Text>
           </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
           <Text style={{color:'gray',textAlign:'center',marginTop:20,}}>
               Hala Hesabınız Yok mu ? Tıklayın
           </Text>
           </TouchableOpacity>
           <View style={{height:50}}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      backgroundColor:'black',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
    },

})
