import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {View, Image, TextInput, Button, StyleSheet, Text} from 'react-native';
import { ApiContext } from './ApiContext';//importation du contexte pour l'utilisation de la fonction login et du state user


export default function LoginScreen({setToken}) {
  const navigation = useNavigation(); // définition de la navigation
  const {login, user, passError, mailError, loginError} = useContext(ApiContext); // importation du contexte pour l'utilisation de la fonction login et du state user
  const [mail, setMail] = useState(); // définition des states pour la récupération des informations de connexion, notament ici des du mail
  const [password, setPassword] = useState(); // définition des states pour la récupération des informations de connexion, notament ici des du mot de passe
  
//redirige vers la page d'accueil si l'utilisateur est connecté, le useEffect est appelé à chaque fois que la valeur de user est mise à jour
  useEffect(() => {
    if(user.message==="success"){// on vérifie que l'utilisateur est bien connecté et que le contenu de user est bien celui d'un utilisateur connecté
      navigation.navigate("Home") // permet la navigation vers la page d'accueil
    }
  }, [user])

//fonction qui permet de récupérer les informations de connexion et de les envoyer à l'api à l'aide de login qui est défini dans le contexte
  const handleSubmit = async e => {
    
    login({
        mail,
        password
    });
  }
//mise en place de la vue avec les différents composants et éléments
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/logo_la_manu.png')} />
      <Text style={styles.TextError}>{mailError}</Text>
      <TextInput style={styles.inputView} onChangeText={e => setMail(e)} placeholder='Mail'></TextInput>
      <Text style={styles.TextError}>{passError}</Text>
      <TextInput secureTextEntry={true} style={styles.inputView} onChangeText={e => setPassword(e)} placeholder='Mot de passe'></TextInput>
      <Text style={styles.TextError}>{loginError}</Text>
      <Button onPress={handleSubmit} title='Connexion'/>
    </View>
  )
};
 
// définition du style de la vue
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#f8f8f8",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 2,
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
    },
  TextError :{
    color: "red",
    fontSize: 12,
    marginTop: 2,
    marginBottom: 4,
  },
})