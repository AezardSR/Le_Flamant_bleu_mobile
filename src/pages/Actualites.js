import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext';

function Actualite(){

  const {requestAPi} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [actualites, setActualites] = useState([]);
  const navigation = useNavigation();


  const getActualites = () => {
    requestAPi('/actualites', 'GET', null)
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

  const goToShowActualites = (actualites) =>{
    navigation.navigate('Actualité', {actualites});
  };
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
            <TouchableOpacity onPress={() => goToShowActualites(item)} style={stylesCard.card}>
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