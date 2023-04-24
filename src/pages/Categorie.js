import * as React from 'react';
import { useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, FlatList, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';


function Categorie(){

  // etat des composants, on initialise les variables dans un tableau vide au depart
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [idCatModul, setIdCatModul] = useState([]); 
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigation = useNavigation();
  const route = useRoute(); // sert a recuprerer l'id du module
  const idModule = parseInt(route.params.id); // recuperation de l'ID du module sur lequelle on a cliqué

  // recuperation des données de la table categorie via la fonction requestAPI
  const getCategories = () => {
    requestAPI('/categories', 'GET', null)
     .then(response => response.json())
     .then(json =>{
       setCategories(json)
       setLoading(false)
     })
     .catch(error => {
       console.error("Erreur Categories " + error)
     })
 }

  // recuperation des données de la table modulescategories
  const getIdCatModul = () => {
    requestAPI('/module-categories', 'GET', null)
     .then(response => response.json())
     .then(json =>{
       setIdCatModul(json)
       setLoading(false)
     })
     .catch(error => {
       console.error("Erreur modulecat" + error)
     })
 }

  // a chaque changement d'etat ( rendu du composant) , les fetchs s'execute
  useEffect(() => {
    getCategories();
    getIdCatModul();
  }, []);

  // fait le filtre des categories en fonction de l'id du module
  useEffect(() => {
    // filtre les categories qui possede le meme modules_id que l'id Module selectionné dans la page d'avant
    const filtered = idCatModul.filter((item) => item.modules_id === idModule);
    // recupere que les ID des categories avec l'ID Module selectionné
    const categoryIds = filtered.map((item) => item.categories_id);
    // montre la liste des categories qu'il reste avec l' ID Module selectionné
    const filteredCategories = categories.filter((category) => categoryIds.includes(category.id));
    setFilteredCategories(filteredCategories);
  }, [idCatModul, idModule, categories]);

 // fonction qui permet de se rentre dans le composant Parts, il envoie l'ID selectionné
//  l'ID permet d'effectuer un filtrage dans le prochain composant
  const goToPart =(id) => {
    navigation.navigate('Intitulé des parties', {id});
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
        categories.length > 0 ? (
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={stylesCard.cardContainer}>
          <TouchableOpacity onPress={() => goToPart(item.id)} style={stylesCard.card}>
            <Text style={stylesCard.cardtitle}>{item.categorie}</Text>
          </TouchableOpacity>
          </View>
        )}
      />
        ) : (
        <Text style={stylesCard.listTitle}>Pas de categorie disponible</Text>
        )
      )}
    </View>
  );
}
export default Categorie;