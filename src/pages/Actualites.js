import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';
import {API_PATH} from "@env";


function Actualite(){

  const [loading, setLoading] = useState(true);
  const [actualites, setActualites] = useState([]);
  const navigation = useNavigation();

  const getActualites = () => {
     return fetch(`${API_PATH}/modules`,{
      method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + token
            }
     })
      .then(response => response.json())
      .then(json =>{
        setActualites(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur Actualites " + error)
      })
  }
  useEffect(()=>{
    getActualites();
  }, [])

//   const goToCategories = (id) =>{
//     navigation.navigate('Librairies/Framework', {id});
//   };
  return(
    <View>
      {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
      <FlatList
        data={actualites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={stylesCard.cardContainer}>
            {/* <TouchableOpacity onPress={() => goToCategories(item.id)} style={stylesCard.card}> */}
            <TouchableOpacity style={stylesCard.card}>
              <Text style={stylesCard.cardtitle}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      )}
    </View>
  );
}
export default Actualite;