import {React, useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity,ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import useToken from "../features/loginAPi/useToken.js";
import stylesCard from '../components/Card';
import {API_PATH} from "@env";



function Exercice() {

  const {token, setToken} = useToken(); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [exercices, setExercices] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [filterExercices, setfilterExercices] = useState([]);
  const [filterLessons, setfilterLessons] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const idPart = parseInt(route.params.id);

  const getExercices = () => {
    fetch(`${API_PATH}/exercices`,{
     method: 'GET',
           headers: {
               'content-type': 'application/json',
               'Authorization' : 'bearer ' + token
           }
    })
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
    return fetch(`${API_PATH}/lessons`,{
     method: 'GET',
           headers: {
               'content-type': 'application/json',
               'Authorization' : 'bearer ' + token
           }
    })
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
  if(filterExercices.length === 0 && filterLessons.length === 0){
    <View>
      <View>
        <Text>Liste des exercices</Text>
        <Text>Pas d'exercice</Text>
      </View>
      <View>
        <Text>Liste des exercices</Text>
        <Text>Pas de leçons</Text>
      </View>
    </View>
  }

  return(
    <ScrollView>
      <View>
        <Text style={ListExerciceLesson.styleText}>Liste des leçons</Text>
        {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
        <View>
        {filterLessons.map((item) => (
          <View key={item.id.toString()} style={stylesCard.cardContainer}>
            <TouchableOpacity style={stylesCard.card} onPress={() => goToLesson(item)}>
            <Text style={stylesCard.cardtitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
        </View>
      )}
      </View>
      <View>
        <Text style={ListExerciceLesson.styleText}>Liste des exercices</Text>
        {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
        <View>
        {filterExercices.map((item) => (
          <View key={item.id.toString()} style={stylesCard.cardContainer}>
            <TouchableOpacity style={stylesCard.card} onPress={() => goToExercice(item)}>
              <Text style={stylesCard.cardtitle}>{item.name}</Text>
            </TouchableOpacity >
          </View>
        ))}
        </View>
      )}
      </View>
    </ScrollView>
  );
}

const ListExerciceLesson = StyleSheet.create({
  styleText : {
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 25,
    marginTop : 20,
  }
})
export default Exercice;