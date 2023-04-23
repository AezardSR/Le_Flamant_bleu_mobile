import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';

function Actualite(){
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true); // 
  const [actualites, setActualites] = useState([]); // on stock les données du fetch, de base, tableau vide
  const navigation = useNavigation(); // permet d'utiliser l'envoie de données 

// Fetch via la fonction requestAPI pour la recuperation des données
  const getActualites = () => {
    requestAPI('/actualites', 'GET', null)
      .then(response => response.json())
      .then(json =>{
        setActualites(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur Actualites " + error)
      })
  }

  // a chaque changement d'etat ( rendu du composant) , le fetch s'execute
  useEffect(() =>{
    getActualites();
  }, [])

  // fonction qui permet d'aller voir l'actualité choisit et qui passe les données en parametres
  const goToShowActualites = (actualites) =>{
    navigation.navigate('Actualité', {actualites});
  };

// si le fetch des données est trop long, on a un spinner d'attente
// apres resultat du fetch, si on a minimum une entrée dans le tableau, on affiche les données via une flatlist
// si aucune donnée dans le tableau, on affiche un message
  return(
    <View>
    {loading ?(
      <View>
        <ActivityIndicator size="large" color="#28abe2"/>
      </View>
    ) : (
      actualites.length > 0 ? (
        <FlatList
          data={actualites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={stylesCard.cardContainer}>
              <TouchableOpacity onPress={() => goToShowActualites(item)} style={stylesCard.card}>
                <Text style={stylesCard.cardtitle}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={stylesCard.listTitle}>Pas d'actualités disponible</Text>
      )
    )}
  </View>
  );
}
export default Actualite;