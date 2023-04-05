import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

// la fonction useToken permet de récupérer le token de l'utilisateur et de le sauvegarder dans le local storage
export default function useToken() {
      // permet de récupérer le token dans le local storage et de le modifie le state de token
      const getToken = async () => {
          const tokenString = await AsyncStorage.getItem('token')
          const userToken = JSON.parse(tokenString);
            if(userToken != null){
                  setToken(userToken);
            }
          return userToken 
       };
       const [token, setToken] = useState(getToken()); // permet modifier la valeur du token avant de l'envoyer dans le contexte
       // permet de sauvegarder le token dans le local storage et de le modifie le state de token
      const  saveToken = async (userToken) => {
          await AsyncStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
      };
      // retourne les fonctions et la valeur du token pour une utilisation dans le contexte et les différente pages
    return {
        setToken: saveToken,
        getToken,
        token
      }
}