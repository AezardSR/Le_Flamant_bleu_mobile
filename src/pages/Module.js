import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';

function Module(){

  const [loading, setLoading] = useState(true);
  const [modules, setModules] = useState([]);
  const navigation = useNavigation();

  const getModules = () => {
    fetch("http://192.168.1.123:8000/api/modules")
      .then(response => response.json())
      .then(json =>{
        setModules(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur Module " + error)
      })
  }
  useEffect(()=>{
    getModules();
  }, [])

  const goToCategories = (id) =>{
    navigation.navigate('Librairies/Framework', {id});
  };
  return(
    <View>
      {loading ?(
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
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
      )}
    </View>
  );
}
export default Module;