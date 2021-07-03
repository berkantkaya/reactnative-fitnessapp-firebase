import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity,Button, KeyboardAvoidingView } from 'react-native'
 import { auth } from '../firebase'
 
const RegisterScreen = ({navigation}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser=>{
            authUser.user.updateProfile({
                displayName:name
            
            })
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
           <Image source={require('../assets/logos/register.png')} style={{width:'80%',height:110,marginHorizontal:'auto',marginBottom:20}}/>
           <View>
           <TextInput value={name} onChangeText={text=>setName(text)}  placeholder="Name" style={{color:'white',borderWidth:1,borderColor:'gray',width:300,margin:10,marginBottom:2,padding:5,fontSize:20,borderRadius:10,paddingLeft:10}}  placeholderTextColor={'gray'}/>
               <TextInput value={email} onChangeText={text=>setEmail(text)} placeholder="Email" style={{color:'white',borderWidth:1,borderColor:'gray',width:300,margin:10,marginBottom:2,padding:5,fontSize:20,borderRadius:10,paddingLeft:10}}  placeholderTextColor={'gray'}/>
               <TextInput value={password} onChangeText={text=>setPassword(text)} placeholder="Password" secureTextEntry style={{color:'gray',borderWidth:1,borderColor:'gray',margin:10,marginBottom:30,padding:5,width:300,fontSize:20,borderRadius:10,paddingLeft:10}}  placeholderTextColor={'gray'}  onSubmitEditing={register}/>
               
           </View>
           <TouchableOpacity onPress={register} style={{color:'gray',borderWidth:1,borderColor:'gray',width:300
           
           ,marginHorizontal:'auto',borderRadius:10,backgroundColor:'#1c1c1c'}}>
               <Text style={{color:'gray',fontSize:18,textAlign:'center',padding:10}} >Üyelik Oluşturun...</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
           <Text style={{color:'gray',textAlign:'center',marginTop:20,}}>
                Halihazırda hesabınız Var mı ? Tıklayın
           </Text>
           </TouchableOpacity>
           <View style={{height:50}}></View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
      backgroundColor:'black',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
    },

})
