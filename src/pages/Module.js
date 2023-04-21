import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import useToken from "../features/loginAPi/useToken.js";
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';


function Module(){
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const {token, setToken} = useToken(); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [modules, setModules] = useState([]);
  const navigation = useNavigation();

  const getModules = () => {
    requestAPI('/modules', 'GET', null)
      .then(response => response.json())
      .then(json =>{
        console.log(json)
        setModules(json)
        setLoading(false)
        console.log(modules)
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