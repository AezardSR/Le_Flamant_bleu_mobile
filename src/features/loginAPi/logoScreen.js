import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button, StyleSheet, onChangeText} from 'react-native';
import { ApiContext } from './ApiContext';


function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}

export default function LogoScreen({setToken}) {
  const {user}= useContext(ApiContext);
  const navigation = useNavigation();
  const logged = async () => {
    await delay(3);
    if( 1+2 == 2) {
      console.log("redirect to home...")
      navigation.navigate("Home");   
    } else {
      console.log("redirect to Login...")
      navigation.navigate("Login");
         
    }
  }
  


  return (
    <View style={styles.container}>
      <Image style={styles.image} onLoad={logged} source={require('../../assets/images/logo_la_manu.png')} />
    </View>
  )
};
 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     image :{
      marginBottom: 40,
      width: 300,
      height: 300,
    }
})