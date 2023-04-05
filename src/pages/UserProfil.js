import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, Image, TextInput, StyleSheet } from 'react-native';
import IMGUser from '../assets/user.jpg'
import { ScrollView } from 'react-native-gesture-handler';

const imgUser = Image.resolveAssetSource(IMGUser).uri;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    tinyLogo: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
      },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }, 

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });

function UserProfil() {
    const navigation = useNavigation();

    const handleLogout = async () => {//s'active lors du clic sur le bouton
      if(await AsyncStorage.getItem('token') !== null) {
        await AsyncStorage.removeItem('token'); //supprime le token de l'AsyncStorage
      }
      navigation.navigate('Login'); //redirige vers la page de connexion
    }

    return (
      <ScrollView>

        <Image source={{uri: imgUser}} style={styles.tinyLogo} />

        <TextInput style={styles.input} placeholder='Prénom' />
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <TextInput style={styles.input} placeholder='Téléphone'></TextInput>
        <TextInput style={styles.input} placeholder='Ville'></TextInput>
        <TextInput style={styles.input} placeholder='Adresse'></TextInput>
        <TextInput style={styles.input} placeholder='Code Postal'></TextInput>
        <TextInput style={styles.input} placeholder='Mot de passe'></TextInput>
        <TextInput style={styles.input} placeholder='Confirmation du mot de passe'></TextInput>

        <View style={styles.fixToText}>
            <Button title="Modifier" />
            <Button disabled title="Valider" />
        </View>

        <View style={styles.separator} />

        <Button onPress={handleLogout} color='#d10000' title="Déconnexion" />

      </ScrollView>
    )
  }

export default UserProfil;