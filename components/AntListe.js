import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import idmandata from '../idmandata'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AntListe = ({navigation,kisibilgi}) => {
    console.log('kisibilgi',kisibilgi)
   const {targett,cinsiyet,kilo} =kisibilgi
   console.log(targett,cinsiyet,kilo)
  console.log(navigation)

  

    return (
        <View style={styles.container}>

<Text style={{color:'white',borderWidth:1,borderColor:'gray',textTransform:'uppercase',textAlign:'center',fontSize:23,letterSpacing:1,padding:10,marginTop:20}}>Antrenman Programınız</Text>
   

              {
                  idmandata.antrenmanlar.filter(id=>(id.hedef === targett && id.cinsiyet === cinsiyet && (kilo>=70 ? id.kilo > 70 : id.kilo < 70) )).map(li=>(
                      <View key={li._id}>
                    <ImageBackground  source={require('../assets/logos/Logic.png')} style={{width:'100%',height:370,marginBottom:25,marginTop:20}}>
                    <View style={{width:330,height:300,borderColor:'gray',padding:5,margin:13,alignItems:'flex-start',justifyContent:'space-evenly'}}>
                    <Text style={{color:'#0a9900',fontSize:16,padding:5,letterSpacing:1,borderWidth:1,borderColor:'#0a9900',borderRadius:10,fontWeight:'bold'}}>
                         {li.namebir} / {li.setbir} * {li.tekrarbir}
                    </Text>
                    <Text style={{color:'#3d9eff',textAlign:'center',fontSize:16,padding:5,letterSpacing:1,borderWidth:1,borderColor:'#3d9eff',borderRadius:10,fontWeight:'bold'}}>
                    {li.nameiki} / {li.setiki} * {li.tekrariki}
                    </Text>
                    <Text style={{color:'#d800d8',borderRadius:10,fontSize:16,padding:5,letterSpacing:1,borderWidth:1,borderColor:'#d800d8',fontWeight:'bold'}}>
                    {li.nameuc} / {li.setuc} * {li.tekraruc}
                    </Text>
                    <Text style={{color:'#9191ff',textAlign:'center',fontSize:16,padding:5,letterSpacing:1,borderWidth:1,borderColor:'#9191ff',borderRadius:10,fontWeight:'bold'}}>
                    {li.namedort} / {li.setdort} * {li.tekrardort}
                    </Text>
                    <Text style={{color:'#ff7d05',textAlign:'center',fontSize:16,padding:5,letterSpacing:1,borderWidth:1,borderColor:'#ff7d05',borderRadius:10,fontWeight:'bold'}}>
                    {li.namebes} / {li.setbes} * {li.tekrarbes}
                    </Text>
                    </View>
        
                    </ImageBackground>
                
           

           
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{backgroundColor:'#0a9900',width:160,height:70,borderWidth:1,borderRadius:5,justifyContent:'center',alignItems:'center'}} onPress={() => {
                navigation.navigate('Programım',{li})
            }}>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Antrenmanı </Text>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Kaydet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#3d9eff',width:160,height:70,borderWidth:1,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Antrenmanı </Text>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Başlat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#d800d8',width:160,height:70,borderWidth:1,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Hareketleri</Text>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Öğren</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#9191ff',width:160,height:70,borderWidth:1,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Aklına Takılanı </Text>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Sor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#ff7d05',width:160,height:70,borderWidth:1,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Anasayfaya </Text>
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Dön</Text>
            </TouchableOpacity>
            </ScrollView>
            </View>
  ))
}
        

            <Text style={{color:'gray',width:350,marginTop:25,textTransform:'uppercase'}}>NOT: Antrenman Programınızı bir gün yapıp bir gün ara verecek şekilde (1 AY) boyunca uygulayınız.Başarılar</Text>
        </View>
    )
}

export default AntListe

const styles = StyleSheet.create({
    container:{
       alignItems:'center'
    }
})
