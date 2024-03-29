import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { UserContext } from "../Hooks/AuthContext";
import { Link } from "expo-router";

function SignIn() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [isFocused6, setIsFocused6] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    setIsFocused2(false);
  };

  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = () => {
    setIsFocused3(false);
  };

  const handleFocus4 = () => {
    setIsFocused4(true);
  };

  const handleBlur4 = () => {
    setIsFocused4(false);
  };

  const handleFocus5 = () => {
    setIsFocused5(true);
  };

  const handleBlur5 = () => {
    setIsFocused5(false);
  };

  const handleFocus6 = () => {
    setIsFocused6(true);
  };

  const handleBlur6 = () => {
    setIsFocused6(false);
  };

  const handleSignIn = async () => {
    console.log("Inside handle sign In");
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }


    // try {
    //   const userData = {
    //     name: name,
    //     email: email,
    //     password: password,
    //     phone: PhoneNo,
    //     address: address,
    //   };
    //   const response = await axios.post(
    //     "http://192.168.18.21:8080/user/signup",
    //     userData
    //   );
    //   console.log(response.data);
    //   // Handle response here
    // } catch (error) {
    //   console.error("Error signing up:", error);
    //   // Handle error here
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.Box1}>
          <Text style={styles.text}>Sign In Here!</Text>

          <Text style={styles.errorB}>Email Already Exist</Text>

          {/* Enter Email */}
          <View style={[styles.Input, isFocused && styles.focusedContainer]}>
            <FontAwesome
              name="envelope-o"
              size={25}
              color="#178CCB"
            ></FontAwesome>
            <TextInput
              placeholder="Enter email"
              style={styles.TextInput}
              onFocus={handleFocus}
             
              onBlur={handleBlur}
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          {emailError ? (
            <Text style={styles.error}>Please enter email</Text>
          ) : null}

          {/* Enter Password */}
          <View style={[styles.Input, isFocused2 && styles.focusedContainer]}>
            <FontAwesome name="lock" size={25} color="#178CCB"></FontAwesome>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              style={styles.TextInput}
              onFocus={handleFocus2}
      
              onBlur={handleBlur2}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          {passwordError ? (
            <Text style={styles.error}>Please enter password</Text>
          ) : null}

          <View style={styles.ButtonSignIn}>
            <TouchableOpacity onPress={handleSignIn} style={styles.signIn}>
              <Text style={styles.textSign}>Sign In </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signUpText}>
            <Text> Don't have a account? </Text>
            <Link href="SignUp">
              <Text
                style={[
                  {
                    color: "black",
                    borderBottomWidth: 1,
                    textDecorationLine: "underline",
                    borderColor: "#9989C7",
                  },
                ]}
              >
                Sign Up here
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1.7,
    borderBottomColor: "#388E8E",
  },
  headerTxt: {
    fontFamily: "Inter",
    fontSize: 22,
    marginRight: 20,
    color: "#40413F",
    fontWeight: "bold",
    borderWidth: 0,
    left: 25,
  },
  Box: {
    flex: 1,
    backgroundColor: "#9989C7",
  },
  Box1: {
    // flex:7,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // borderWidth:1
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5c5c5c",
    fontStyle: "italic",
    marginBottom: 20,
    alignSelf: "center",
  },
  Input: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  focusedContainer: {
    elevation: 3,
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
  },
  TextInput: {
    flex: 1,
    color: "black",
    marginLeft: 10,
  },
  ButtonSignIn: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  signIn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#178CCB",
    shadowColor: "#f5f5f5",
    elevation: 2,
    borderRadius: 50,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  Text: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontSize: 14,
  },
  signUpText: {
    flexDirection: "row",
    paddingRight: 5,
    justifyContent: "center",
  },
  backArrow: {
    // marginTop:10,
    left: 15,
    alignSelf: "flex-start",
    top: 25,
  },
  error: {
    marginTop: 2,
    color: "red",
    fontSize: 14,
    // alignSelf:'center',
    textAlign: "left",
  },

  errorB: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf:'center',
  },


});
export default SignIn;
