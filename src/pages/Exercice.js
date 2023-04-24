import * as React from 'react';
import {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity,ScrollView, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';

function Exercice() {

  // etat des composants, on initialise les variables dans un tableau vide au depart
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [exercices, setExercices] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [filterExercices, setfilterExercices] = useState([]);
  const [filterLessons, setfilterLessons] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const idPart = parseInt(route.params.id); // recuperation de l'ID de la parie sur laquelle on a cliqué

  // recuperation des données de la table exercices via la fonction requestAPI
  const getExercices = () => {
    requestAPI('/exercices', 'GET', null)
     .then(response => response.json())
     .then(json =>{
       setExercices(json)
       setLoading(false)
     })
     .catch(error => {
       console.error("Erreur Exercices " + error)
     })
 }

  // recuperation des données de la table classes via la fonction requestAPI
  const getLessons = () => {
    requestAPI('/lessons', 'GET', null)
     .then(response => response.json())
     .then(json =>{
       setLessons(json)
       setLoading(false)
     })
     .catch(error => {
       console.error("Erreur Lessons " + error)
     })
 }
  // a chaque changement d'etat ( rendu du composant) , le fetch s'execute
  useEffect(() =>{
    getExercices();
    getLessons();
  },[]);

// J'effectue un filtrage grace l'ID parts que j'ai pu recuperer
  useEffect(() => {
    const filterExercices = exercices.filter((item) => item.parts_id === idPart);
    setfilterExercices(filterExercices)
  }, [exercices, idPart]);

  useEffect(() => {
    const filterLessons = lessons.filter((item) => item.parts_id === idPart);
    setfilterLessons(filterLessons)
  }, [lessons, idPart])


   // fonction qui permet de se rentre dans le composant ShowLessonExercice, il envoie toutes les données
  const goToLesson = (filterLessons) => {
    navigation.navigate("Cour/Exercice", {filterLessons}
    )
  }
  const goToExercice = (filterExercices) => {
    navigation.navigate("Cour/Exercice", {filterExercices})
  }


// si le fetch des données est trop long, on a un spinner d'attente
// apres resultat du fetch, si on a minimum une entrée dans le tableau, on affiche les données via une flatlist
// si aucune donnée dans le tableau, on affiche un message
// on a ici 2 listes car on affiche les cours et les exercices en meme temps
  return(
    <ScrollView>
      <View>
        <Text style={stylesCard.listTitle}>Liste des leçons</Text>
        {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
        filterLessons.length > 0 ? (
        <View>
        {filterLessons.map((item) => (
          <View key={item.id.toString()} style={stylesCard.cardContainer}>
            <TouchableOpacity style={stylesCard.card} onPress={() => goToLesson(item)}>
            <Text style={stylesCard.cardtitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
        </View>
        ) : (
          <Text style={stylesCard.titleNodata}>Pas de cours disponible</Text>
        )
      )}
      </View>


      <View>
        <Text style={stylesCard.listTitle}>Liste des exercices</Text>
        {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
        filterExercices.length > 0 ? (
        <View>
        {filterExercices.map((item) => (
          <View key={item.id.toString()} style={stylesCard.cardContainer}>
            <TouchableOpacity style={stylesCard.card} onPress={() => goToExercice(item)}>
              <Text style={stylesCard.cardtitle}>{item.name}</Text>
            </TouchableOpacity >
          </View>
        ))}
        </View>
        ) : (
          <Text style={stylesCard.titleNodata}>Pas d'exercice disponible</Text>
        )
      )}
      </View>
    </ScrollView>
  );
}
export default Exercice;