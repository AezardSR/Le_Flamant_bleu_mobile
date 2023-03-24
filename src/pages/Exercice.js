import {React, useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity,ScrollView, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';


function Exercice() {

  const [loading, setLoading] = useState(true);
  const [exercices, setExercices] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [filterExercices, setfilterExercices] = useState([]);
  const [filterLessons, setfilterLessons] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const idPart = parseInt(route.params.id);

  const getExercices = () => {
    fetch("http://192.168.1.123:8000/api/exercices")
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
    fetch("http://192.168.1.123:8000/api/lessons")
      .then(response => response.json())
      .then(json =>{
        setLessons(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur lesson" + error)
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
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des exercices</Text>
        <Text>Pas d'exercice</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des exercices</Text>
        <Text>Pas de leçons</Text>
      </View>
    </View>
  }

  return(
    <ScrollView>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des leçons</Text>
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
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des exercices</Text>
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
export default Exercice;