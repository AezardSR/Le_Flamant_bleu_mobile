import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useToken from "../../features/loginAPi/useToken.js";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const hote = "http://192.168.1.105:8000/";
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();
        
    useEffect(() => {
        fetchUser()
    },[token])

    const  login =  (credentials) => {
        return fetch(hote+'api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then( (data)  => {
            if(data.message === "connected"){
                console.log(data.access_token)
                    AsyncStorage.setItem("token", JSON.stringify(data.access_token));
                setToken(data.access_token)
            } else {
                console.log(data)
            }
                
        })
        .catch((error) => { 
            alert("result:"+error);
            console.log('error: ' + error.message); })
    }

    //const navigation = useNavigation();
    const fetchUser = () => {
        console.log(token, "fetchToken")
            fetch(hote+'api/user-profile', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
            }
            }).then((res) => (
                res.json()
            )).then((data) => {
                if(data.message == "succes"){
                    console.log(data.firstname, "data.firstname");
                    setUser(data);
                    //navigation.navigate('Home');
                } 
            })
                
    };

    return (
        <ApiContext.Provider value={{login, user}}>
            {children}
        </ApiContext.Provider>
    )
}