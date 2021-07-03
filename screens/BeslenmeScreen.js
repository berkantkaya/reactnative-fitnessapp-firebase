import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

//import AsyncStorage from '@react-native-community/async-storage';

const BeslenmeScreen = ({ navigation, route }) => {
  //console.log(route.params.li)
  const calendar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const [color, setColor] = useState(false);
  const [savedAnt, setSavedAnt] = useState({});
  //console.log(color)
  const ant = route.params?.li;
  console.log(ant)
  console.log('saved',savedAnt)
  //  console.log('jsonValue',jsonValue)
  // const storeData = async (value) => {
  //   console.log("value", value);
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    checkAnt();
  }, []);

  const checkAnt = async () => {
    const jsonValue = await AsyncStorage.getItem("keyy");

    if (jsonValue) {
      setSavedAnt(JSON.parse(jsonValue));
    } else {
      setSavedAnt(ant);
      await AsyncStorage.setItem("keyy", JSON.stringify(value));
      
    }
    
  };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("keyy");
  //     console.log("jsonValue", jsonValue);

  //     //return jsonValue && JSON.parse(jsonValue) ;
  //     //return jsonValue
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };


  return (
    <View style={styles.container}>
      {savedAnt ? (
        <Text style={{ height: 530 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "transparent",
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#1c1c1c",
            }}
          >
            <ScrollView
              style={{ height: 55 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {calendar.map((id) => (
                <TouchableOpacity
                  key={id}
                  value={color}
                  onPress={() => setColor(!color)}
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    height: 66,
                    width: 66,
                    borderRadius: 2,
                    marginRight: 5,
                    justifyContent: "center",
                    backgroundColor: "#363636",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 5,
                      textAlign: "center",
                      fontSize: 32,
                    }}
                  >
                    {color ? id.slice(id, 0) : id}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 20,
                padding: 10,
                letterSpacing: 1,
                color: "white",
                borderWidth:1,
                borderColor:'gray',
                padding:10
              }}
            >
              PROGRAMIM
            </Text>
            <Text
              style={{
                fontSize: 18,
                padding: 3,
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {savedAnt.namebir} {savedAnt.setbir}*{savedAnt.tekrarbir}
            </Text>
            <Text
              style={{
                fontSize: 18,
                textTransform: "uppercase",
                padding: 3,
                color: "white",
              }}
            >
              {savedAnt.nameiki} {savedAnt.setiki}*{savedAnt.tekrariki}
            </Text>
            <Text
              style={{
                fontSize: 18,
                padding: 3,
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {savedAnt.nameuc} {savedAnt.setuc}*{savedAnt.tekraruc}
            </Text>
            <Text
              style={{
                fontSize: 18,
                textTransform: "uppercase",
                padding: 3,
                color: "white",
              }}
            >
              {savedAnt.namedort} {savedAnt.setdort}*{savedAnt.tekrardort}
            </Text>
            <Text
              style={{
                fontSize: 18,
                padding: 3,
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {savedAnt.namebes} {savedAnt.setbes}*{savedAnt.tekrarbes}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Ant", { savedAnt })}
              style={{
                padding: 10,
                margin: 10,
                marginTop: 25,
                paddingHorizontal: 15,
                borderWidth: 1,
                backgroundColor:'green',

                borderColor: "gray",
                opacity: 0.7,
                width: 300,
              }}
            >
              <Text
                style={{ fontSize: 22, color: "white", textAlign: "center" }}
              >
                Antrenmana Başla
              </Text>
            </TouchableOpacity>
           
            
          </View>
        </Text>
      ) : (
        <Text
          style={{ fontSize: 20, color: "gray", textTransform: "uppercase" }}
        >
          Programınız Bulunmamaktadır.
        </Text>
      )}
    </View>
  );
};

export default BeslenmeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
