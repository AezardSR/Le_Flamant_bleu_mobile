import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button, StyleSheet, onChangeText} from 'react-native';
import { ApiContext } from './ApiContext';



export default function LoginScreen({setToken}) {
  const {login, user} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(mail)
    console.log(password)
    login({
        mail,
        password
    });
  }

  return (
    <View>
      <TextInput style={styles.input} onChangeText={e => setMail(e)} placeholder='Mail'></TextInput>
      <TextInput style={styles.input} onChangeText={e => setPassword(e)} placeholder='Mot de passe'></TextInput>
      <Button onPress={handleSubmit} title='Connexion'/>
    </View>
  )
};
 

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})