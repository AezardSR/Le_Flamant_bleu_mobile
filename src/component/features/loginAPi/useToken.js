import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function useToken() {
    const getToken = async () => {
      
           const tokenString = await AsyncStorage.getItem('token')
           
            const userToken = JSON.parse(tokenString);
            
            return userToken 
                 
    };
   
    const [token, setToken] = useState(getToken());
    console.log(token, "token")

    const  saveToken = async (userToken) => {
        try{
          await AsyncStorage.setItem('token', JSON.stringify(userToken));
        } catch (e) {}
        setToken(userToken);
    };
    return {
        setToken: saveToken,
        token
      }
}