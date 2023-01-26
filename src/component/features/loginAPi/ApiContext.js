import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useToken from "../../features/loginAPi/useToken.js";

const ApiContext = createContext();

export { ApiContext };

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({})
    const {token, setToken} = useToken();
        
    useEffect(() => {
        console.log(token, 'useeffect');
        if(token !== null){
            fetchUser()
        }
    },[])

    const  login =  (credentials) => {
        return fetch('http://192.168.1.122:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then( async (data)  => {
            if(data.message === "connected"){
                console.log(data.access_token, "token from fetch")
                try{
                  await  AsyncStorage.setItem("token", JSON.stringify(data.access_token));
                } catch (e) {}
                setToken(data.access_token)
            } else {
                console.log(data)
            }
                
        })
        .catch((error) => { console.log('error: ' + error.message) })
    }

    
    const fetchUser = () => {
            console.log(token, 'fetchuser')
            fetch('http://192.168.1.122:8000/api/user-profile', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
            }
            }).then((res) => (
                res.json()
            )).then((data) => {
                console.log(data.firstname, "data.firstname")
                setUser(data)
            })
    }

    return (
        <ApiContext.Provider value={{login, user}}>
            {children}
        </ApiContext.Provider>
    )
}