import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import EntryScreen from "./screens/EntryScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Home from "./screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Karar from "./screens/Karar";
import FormScreen from "./screens/FormScreen";
import Program from "./screens/Program";
import AntBasla from "./screens/AntBasla";
import Hareketler from "./screens/Hareketler";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={EntryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Karar" component={Karar} options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "gray",
              fontSize: 13,
              textAlign: "right",
            },
            headerTitle: "Karar Sayfası",
          }} />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "gray",
              fontSize: 13,
              textAlign: "right",
            },
            headerTitle: "Form Bilgi Sayfası",
          }}
           
        />
         <Stack.Screen
          name="Program"
          component={Program}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "gray",
              fontSize: 13,
              textAlign: "right",
            },
            headerTitle: "İYİ SPORLAR",
          headerBackTitleStyle:{
            color:'black'
          },
          headerShown:false,
          
          }}
           
        />
        <Stack.Screen
          name="Ant"
          component={AntBasla}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "gray",
              fontSize: 13,
              textAlign: "right",
            },
            headerTitle: "İYİ SPORLAR",
          headerBackTitleStyle:{
            color:'black'
          }
         
          
          }}
           
        />

<Stack.Screen
          name="Hareketler"
          component={Hareketler}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "gray",
              fontSize: 13,
              textAlign: "right",
            },
            headerTitle: "İYİ SPORLAR",
          headerBackTitleStyle:{
            color:'black'
          }
         
          
          }}
           
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
