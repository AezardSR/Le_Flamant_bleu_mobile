import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';


function Module(){
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [modules, setModules] = useState([]); // on stock les données du fetch, de base, tableau vide
  const navigation = useNavigation(); // permet d'utiliser l'envoie de données

// Fetch via la fonction requestAPI pour la recuperation des données
  const getModules = () => {
    requestAPI('/modules', 'GET', null)
      .then(response => response.json())
      .then(json =>{
        setModules(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur Module " + error)
      })
  }

  // a chaque changement d'etat ( rendu du composant) , le fetch s'execute
  useEffect(()=>{
    getModules();
  }, [])

 // fonction qui permet de se rentre dans le composant Categorie, il envoie l'ID selectionné
//  l'ID permet d'effectuer un filtrage dans le prochain composant
  const goToCategories = (id) =>{
    navigation.navigate('Librairies/Framework', {id});
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
        modules.length > 0 ? (
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={stylesCard.cardContainer}>
            <TouchableOpacity onPress={() => goToCategories(item.id)} style={stylesCard.card}>
              <Text style={stylesCard.cardtitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      ) : (
      <Text style={stylesCard.listTitle}>Pas de module disponible</Text>
      )
      )}
    </View>
  );
}
export default Module;