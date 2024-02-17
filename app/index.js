import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// import LottieView from 'lottie-react-native';

function Home() {
  return (
    <View style={style.MainBox}>
      {/* <View style={{borderWidth:1,justifyContent:"center",alignItems:"center",marginTop:20}}> */}
      <Image
        source={require("../Images/MobileLogin.gif")}
        style={{ width: 380, height: 380 }}
      />
      <View
        style={{
          borderWidth: 0,
          justifyContent: "center",
          marginTop: 0,
          alignItems: "center",
          bottom: 35,
        }}
      >
        <View style={{ justifyContent: "center", right: 5 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
            Welcome to Cemento
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Let's Get Started
          </Text>
        </View>
      </View>
      <View style={style.button}>
        <Link href="SignIn">
          <Text style={style.buttontext}>SIGN IN</Text>
        </Link>
      </View>
      <View style={style.SignUpButton}>
       
        <Link href="SignUp">
          <Text style={style.buttontext}>SIGN UP</Text>
        </Link>
      
        
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  MainBox: {
    backgroundColor: "white",
    flex: 1,
    // justifyContent:"center",
  },
  button: {
    marginTop: 30,
    borderWidth: 0,
    height: 75,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: "#178CCB",
    elevation: 3,
  },
  buttontext: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",

  },
  SignUpButton: {
    marginTop: 20,
    borderWidth: 0,
    height: 75,
    width: 170,
    justifyContent: "center",
    alignItems:"center",
    borderBottomLeftRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#178CCB",
    alignSelf: "flex-end",
    elevation: 2,
  },
});
export default Home;
