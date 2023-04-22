import * as React from 'react';
import {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity,ScrollView, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';

function Exercice() {

  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [exercices, setExercices] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [filterExercices, setfilterExercices] = useState([]);
  const [filterLessons, setfilterLessons] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const idPart = parseInt(route.params.id);

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

  useEffect(() =>{
    getExercices();
    getLessons();
  },[]);

  useEffect(() => {
    const filterExercices = exercices.filter((item) => item.parts_id === idPart);
    setfilterExercices(filterExercices)
  }, [exercices, idPart]);

  useEffect(() => {
    const filterLessons = lessons.filter((item) => item.parts_id === idPart);
    setfilterLessons(filterLessons)
  }, [lessons, idPart])

  const goToLesson = (filterLessons) => {
    navigation.navigate("Cour/Exercice", {filterLessons}
    )
  }
  const goToExercice = (filterExercices) => {
    navigation.navigate("Cour/Exercice", {filterExercices})
  }

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
          <Text style={stylesCard.listTitle}>Pas de cours disponible</Text>
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
          <Text style={stylesCard.listTitle}>Pas d'exercice disponible</Text>
        )
      )}
      </View>
    </ScrollView>
  );
}
export default Exercice;