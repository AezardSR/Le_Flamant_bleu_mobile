import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function useToken() {
    const getToken = async () => {
      
          const tokenString = await AsyncStorage.getItem('token')
           
          const userToken = JSON.parse(tokenString);
            
          return userToken 
                 
    };
   
    const [token, setToken] = useState(getToken());

    const  saveToken = async (userToken) => {
        
          await AsyncStorage.setItem('token', JSON.stringify(userToken));
        
        setToken(userToken);
    };
    return {
        setToken: saveToken,
        token
      }
}