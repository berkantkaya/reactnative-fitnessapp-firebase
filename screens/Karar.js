import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
//import { FontAwesome } from '@expo/vector-icons';
import { auth } from "../firebase";
//console.log(auth.currentUser.displayName)

const Karar = ({ navigation, route }) => {
  var target =
    route.params.id === 1
      ? "Kas Kazanımı (Ekipmanlı)"
      : route.params.id === 2
      ? "Kas Kazanımı (Ekipmansız)"
      : route.params.id === 3
      ? "Yağ Yakımı (Ekipmanlı)"
      : route.params.id === 4
      ? "Yağ Yakımı (Ekipmansız)"
      : null;

  // const random=Math.floor(Math.random() * 4)
  // console.log(random)

 

  return (
    < View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          borderBottomWidth: 1,
          borderColor: "gray",
          backgroundColor: "black",
        }}
      >

        <View style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textTransform:'uppercase'
          }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            marginLeft: 3,
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textTransform:'uppercase',
            marginBottom:7  
          }}
        >
          
          {auth.currentUser.displayName} / {target}
        </Text>
        <Text style={{
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 3,
            color: "white",
            justifyContent: "center",
            alignItems: "center"
          }}>
        {auth.currentUser.email}
        </Text>
        </View>
      </View>
      {route.params.id === 1 ? (
        <Image
          source={require("../assets/resimler/iki.png")}
          style={styles.images}
        />
      ) : route.params.id === 2 ? (
        <Image
          source={require("../assets/resimler/dort.png")}
          style={styles.images}
        />
      ) : route.params.id === 3 ? (
        <Image
          source={require("../assets/resimler/uc.png")}
          style={styles.images}
        />
      ) : route.params.id === 4 ? (
        <Image
          source={require("../assets/resimler/bir.png")}
          style={styles.images}
        />
      ) : null}

      <TouchableOpacity
        onPress={() => navigation.navigate("Form", { target })}
        style={{
          backgroundColor: "#0f8200",
          padding: 8,
          width: "80%",
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 8,
          marginVertical: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          Tıklayın ve Formu Doldurun...
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "gray", width: 350}}>
        NOT: Sevgili üyemiz uygulamamızın beklentilerinizi karşılayabilmesi için
        lütfen form sayfasında ki verileri dogru bir sekilde doldurup bize
        iletiniz...
      </Text>
    </View>
  );
};

export default Karar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height:'100%',
    alignItems:"center",
    
  },
  images: {
    maxWidth: '100%',
    height: 350,
    marginTop: 10,
  },
});
