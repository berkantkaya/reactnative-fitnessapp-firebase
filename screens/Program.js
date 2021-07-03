import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import Loading from '../components/Loading'
import AntListe from '../components/AntListe'
import { useEffect } from 'react'


const Program = ({navigation,route}) => {
     
    

    var kisibilgi=route.params
   // console.log(kisibilgi)
    

      const [load,setLoad]=useState(true)
      const [timer,setTimer]=useState(21)

     const time= setTimeout(()=>{
        if(timer > 0){
            setLoad(true)
             setTimer(timer - 1)  

         }else if(timer <= 0){
             setLoad(false)
             return ()=> clearTimeout(time)
         } 
      },1000)
           
        

    return (
        <SafeAreaView  style={styles.container}>
           
                {load ? <Loading/> : <AntListe kisibilgi={kisibilgi} navigation={navigation}/>}
            
        </SafeAreaView>
    )
}

export default Program

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:'100%',
        width:'100%'
    }
})

