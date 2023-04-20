import {React, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';
import {API_PATH} from "@env";


function Part(){

  const [loading, setLoading] = useState(true);
  const [parts, setParts] = useState([]);
  const [filtered, setFilter] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const idCategorie = parseInt(route.params.id)

  const getParts = () => {
    return fetch(`${API_PATH}/parts`,{
     method: 'GET',
           headers: {
               'content-type': 'application/json',
               'Authorization' : 'bearer ' + token
           }
    })
     .then(response => response.json())
     .then(json =>{
       setParts(json)
       setLoading(false)
     })
     .catch(error => {
       console.error("Erreur Parts " + error)
     })
 }
  useEffect(() => {
    getParts();
  },[])

  useEffect(() => {
    const filtered = parts.filter((item) => item.categories_id === idCategorie);
    setFilter(filtered)
  }, [parts, idCategorie]);

  const goToExercices = (id) => {
    navigation.navigate('Exercice', {id} )
  }
return(
  <View>
    {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
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
    )}
  </View>
);
}
export default Part;