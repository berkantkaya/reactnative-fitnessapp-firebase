import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import idmandata from '../idmandata';

// const red=Math.floor(Math.random()*256)
// const green=Math.floor(Math.random()*256)
// const blue=Math.floor(Math.random()*256)


const AntBasla = ({navigation,route}) => {
    const [arka,setArka]=useState(60)
    const [set,setSet]=useState(1)
    const [i,setI]=useState(1)
     //console.log(route.params.ant)

   const [hareketbir,setHareketbir]=useState(route.params.savedAnt.namebir)    
   const [hareketiki,setHareketiki]=useState(route.params.savedAnt.nameiki)  
   const [hareketuc,setHareketuc]=useState(route.params.savedAnt.nameuc)  
   const [hareketdort,setHareketdort]=useState(route.params.savedAnt.namedort)  
   const [hareketbes,setHareketbes]=useState(route.params.savedAnt.namebes)  

 const yorumbir=idmandata.antrenmanlar.find(x=>x.namebir===hareketbir)
 const yorumiki=idmandata.antrenmanlar.find(x=>x.nameiki===hareketiki)
 const yorumuc=idmandata.antrenmanlar.find(x=>x.nameuc===hareketuc)
 const yorumdort=idmandata.antrenmanlar.find(x=>x.namedort===hareketdort)
 const yorumbes=idmandata.antrenmanlar.find(x=>x.namebes===hareketbes)
//console.log(yorumbir.yapilisbir)



const [dinlenme,setDinlenme]=useState('')

       setTimeout(()=>{
            //  setI(i)
           // setDinlenme(false)
            if(arka > 0){
               setArka(arka - 1)
            }
            // if(arka === 0){
            //     setDinlenme('Dinlenme Vakti')
            // }
            setTimeout(()=>{
                if(arka === 0){
                    setArka(60)
                    setSet(set + 1)  

                    if(set===4){
                        setI(i + 1 )
                        setSet(1)
                    } 
                  }
                 
            },70000)
             
        },1000)
       
    
     
    

    return (
        <SafeAreaView style={styles.container}>
             <Text style={{color:'white',fontSize:26,textTransform:'uppercase',textAlign:'center',marginVertical:25,borderWidth:1,borderColor:'gray',paddingVertical:10,letterSpacing:1}}><FontAwesome name="user-o" size={28} color="white" /> {auth.currentUser.displayName}</Text>

            <View style={{justifyContent:'space-around',alignItems:'center',position:'relative'}}>
           <TouchableOpacity style={{borderWidth:1,width:155,borderColor:'gray',borderRadius:70,padding:20,backgroundColor:'black'}}>
               <Text style={{fontSize:80,color:'white',textAlign:'center'}}>
                   {arka=== 0 ? <Fontisto name="holiday-village" size={64} color="white" /> : arka}
               </Text>
           </TouchableOpacity>
           <TouchableOpacity style={{borderWidth:1,borderColor:'transparent',borderRadius:40,padding:2,backgroundColor:'black',position:'absolute',transform: [{ translateX: 50 },{translateY: -10}],backgroundColor:'white'}}>
           <Text style={{color:'black',fontWeight:'bold',fontSize:15,padding:5,}}>
               {set} SET
           </Text>
           </TouchableOpacity>
          
           <TouchableOpacity  style={{padding:10,paddingHorizontal:15,marginVertical:10}}>
               <Text style={{fontSize:23,color:'white'}}>
                  {dinlenme}
               </Text>
           </TouchableOpacity>
            </View>

            <View style={{borderWidth:1,borderColor:'gray',margin:10,marginHorizontal:20,paddingVertical:18}}>
                <Text style={{color:'gray',textAlign:'center',fontSize:18,marginBottom:10}}>Hareket {i}</Text>
                <Text style={{color:'white',textAlign:'center',textTransform:'uppercase',fontSize:25}}>{i===1 ? hareketbir : i===2 ? hareketiki : i===3 ? hareketuc : i===4 ? hareketdort : i===5 ? hareketbes : 'Antrenman Bitti...'}</Text>
            </View>
            <TouchableOpacity  style={{padding:10,paddingHorizontal:15,margin:10,borderWidth:1,borderColor:'gray',opacity:0.7}}>
               <Text style={{fontSize:19,color:'white',textAlign:'left'}}>
                {hareketbir ? yorumbir.yapilisbir : hareketiki ? yorumiki.yapilisiki : hareketuc ? yorumuc.yapilisuc : hareketdort ? yorumdort.yapilisdort : hareketbes ? yorumbes.yapilisbes : null}
               </Text>
           </TouchableOpacity>
           <View style={{height:50}}/>
        </SafeAreaView>
    )
}

export default AntBasla

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        color:'gray',
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
        backgroundColor:'black'
    }
})
