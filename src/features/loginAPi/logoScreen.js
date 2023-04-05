import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { ApiContext } from './ApiContext';

// Fonction pour mermettre un délai
function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

export default function LogoScreen({ setToken }) {
  // Récupérer les informations utilisateur depuis le contexte
  const { user, fetchUser } = useContext(ApiContext);
  
  // Permet l'utilisatation de la navigation pour rediger l'utilisateur
  const navigation = useNavigation();

  // Fonction qui attend un délai de 3 secondes, tente de récupérer les informations utilisateur et redirige l'utilisateur en fonction des informations récupérées.
  const logged = async () => {
    await delay(3); // Attente de 3 secondes
    fetchUser(); // utilise la fonction fetchUser du context pour récupérer les informations utilisateur
    // Redirige l'utilisateur en fonction de la réponse de fetchUser
    if (user['message'] === 'succes') {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        onLoad={logged} // Appeler la fonction 'logged' lorsque l'image est chargée
        source={require('../../assets/images/logo_la_manu.png')}
      />
    </View>
  );
}

// Définition du style pour le composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    width: 300,
    height: 300,
  },
});
