import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button, StyleSheet, onChangeText} from 'react-native';
import { ApiContext } from './ApiContext';




export default function LoginScreen({setToken}) {
  const navigation = useNavigation();
  const {login, user} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  
  useEffect(() => {
    if(user["message"]==="succes"){
      navigation.navigate("Home")
    }
  }, [user])


  const handleSubmit = async e => {
    e.preventDefault();
    login({
        mail,
        password
    });
    
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/logo_la_manu.png')} />
      <TextInput style={styles.inputView} onChangeText={e => setMail(e)} placeholder='Mail'></TextInput>
      <TextInput secureTextEntry={true} style={styles.inputView} onChangeText={e => setPassword(e)} placeholder='Mot de passe'></TextInput>
      <Button onPress={handleSubmit} title='Connexion'/>
      {/* <Button onPress={() => navigation.navigate('Home', { screen: 'Profile' })} title='Connexion'/> */}
      
    </View>
  )
};
 

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#f8f8f8",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     image :{
      marginBottom: 40,
      width: 250,
      height: 250,
    }
})