import * as React from 'react';
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

class UserProfil extends React.Component {
    render() {
    // const navigation = useNavigation();

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

        <Button color='#d10000' title="Déconnexion" />

      </ScrollView>
    );
  }
}

export default UserProfil;