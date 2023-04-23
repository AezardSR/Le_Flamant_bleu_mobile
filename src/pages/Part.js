import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';



function Part(){

  // etat des composants, on initialise les variables dans un tableau vide au depart
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [parts, setParts] = useState([]);
  const [filtered, setFilter] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const idCategorie = parseInt(route.params.id); // recuperation de l'ID de la categorie sur lequelle on a cliqué

  // recuperation des données de la table parts via la fonction requestAPI
  const getParts = () => {
    requestAPI('/parts', 'GET', null)
     .then(response => response.json())
     .then(json =>{
       setParts(json)
       setLoading(false)
     })
     .catch(error => {
       console.error("Erreur Parts " + error)
     })
 }

  // a chaque changement d'etat ( rendu du composant) , le fetch s'execute
  useEffect(() => {
    getParts();
  },[])

// J'effectue un filtrage grace l'ID categorie que j'ai pu recuperer
  useEffect(() => {
    const filtered = parts.filter((item) => item.categories_id === idCategorie);
    setFilter(filtered)
  }, [parts, idCategorie]);

 // fonction qui permet de se rentre dans le composant Exercice, il envoie l'ID selectionné
//  l'ID permet d'effectuer un filtrage dans le prochain composant
  const goToExercices = (id) => {
    navigation.navigate('Exercice', {id} )
  }

// si le fetch des données est trop long, on a un spinner d'attente
// apres resultat du fetch, si on a minimum une entrée dans le tableau, on affiche les données via une flatlist
// si aucune donnée dans le tableau, on affiche un message
return(
  <View>
    {loading ? (
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
      parts.length > 0 ? (
    <FlatList
      data={filtered}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={stylesCard.cardContainer}>
        <TouchableOpacity onPress={() => goToExercices(item.id)} style={stylesCard.card}>
          <Text style={stylesCard.cardtitle}>{item.name}</Text>
        </TouchableOpacity>
        </View>
      )}
    />
      ) : (
        <Text style={stylesCard.listTitle}>Pas de partie disponible</Text>
      )
    )}
  </View>
);
}
export default Part;