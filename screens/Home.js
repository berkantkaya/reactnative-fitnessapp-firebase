import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BesinAra from "./BesinAra";
import Hedef from "./Hedef";
import BeslenmeScreen from "./BeslenmeScreen";
import { useLayoutEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitle: null,
      headerTitleStyle: {
        color: "gray",
      },
      headerTintStyle: {
        color: "gray",
      },
      headerRight: () => (
        <View
          style={{
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 3,
            justifyContent: "space-between",
            width: 75,
          }}
        >
          <MaterialCommunityIcons
            name="head-question-outline"
            size={30}
            color="gray"
          />
          <MaterialCommunityIcons
            onPress={signOut}
            name="exit-run"
            size={30}
            color="gray"
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Hedef") {
            iconName = focused
              ? "checkmark-circle-outline"
              : "checkmark-circle";
          } else if (route.name === "Programım") {
            iconName = focused ? "md-nutrition-outline" : "md-nutrition-sharp";
          } else if (route.name === "BesinAra") {
            iconName = focused ? "search-circle-outline" : "search-circle";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
        activeBackgroundColor: "black",
        inactiveBackgroundColor: "black",
      }}
    >
      
      <Tab.Screen
        name="Hedef"
        component={Hedef}
        options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "gray",
            fontSize: 13,
            textAlign: "right",
          },
          headerTintStyle: {
            color: "gray",
          },
          headerBackTitle: {
            color: "white",
          },
          headerTitle: "Hedef Onay Sayfası",
        }}
      />
      <Tab.Screen name="Programım" component={BeslenmeScreen} />
      <Tab.Screen name="BesinAra" component={BesinAra} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
