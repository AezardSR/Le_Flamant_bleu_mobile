import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useToken from "../../features/loginAPi/useToken.js";
import {API_PATH} from "@env"; // chemin de l'api récuperer depuis le .env


const ApiContext = createContext(); // création du contexte pour une utilisation globale

export { ApiContext }; // on exporte le contexte pour une utilisation dans les différents composants

export const ApiProvider  = ({children}) => {
    const [user, setUser] = useState({}) // mise en place du state user pour l'utilisation globale
    const {token, setToken} = useToken(); // récupération du token depuis le contexte
    const [passError, setPassError] = useState(false) // mise en place du state passError pour l'utilisation sur la page de connexion
    const [mailError, setMailError] = useState(false) // mise en place du state mailError pour l'utilisation sur la page de connexion
    const [loginError, setLoginError] = useState(false) // mise en place du state loginError pour l'utilisation sur la page de connexion
        
    useEffect(() => {
        fetchUser() // récupération des informations utilisateur quand la valeur de token est mis à jour 
    },[token])

    //utilisée pour envoyer les informations d'authentification à l'API. Vous utilisez fetch pour envoyer une requête POST avec les informations d'identification et stocker le token dans le stockage local en utilisant AsyncStorage
    const login =  (credentials) => {
        return fetch(`${API_PATH}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then( (data)  => {
            if(data.message === "connected"){
                AsyncStorage.setItem("token", JSON.stringify(data.access_token));
                setToken(data.access_token)
            } else {
                console.log(data)
                setMailError(data.mail)
                setPassError(data.password)
                setLoginError(data.message)
            }
                
        })
        .catch((error) => { 
            alert(error.message);})
    }
    // utilisée pour récupérer les informations de l'utilisateur à partir de l'API en utilisant le token stocké dans le contexte. Si les informations sont récupérées avec succès, elles sont stockées dans le state user
    const fetchUser = () => {
        fetch(`${API_PATH}/user-profile`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
            }
            }).then((res) => (
                res.json()
            )).then((data) => {
                if(data.message == "succes"){
                    setUser(data);
                } else {
                    setUser("disconnected")
                }
            })
                
    };

    return (
        <ApiContext.Provider value={{login, fetchUser, user, passError, mailError, loginError}/* on retourne le contexte ApiContext.Provider avec les fonctions login, fetchUser et user pour être utilisé dans les autres composants de l'application. */}> 
            {children}
        </ApiContext.Provider>
    )
}