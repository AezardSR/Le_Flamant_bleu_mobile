import * as React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet,TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from '../components/Card.js';

function Categorie({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch('http://192.168.1.30:8000/api/categories')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
   }, []);
   useEffect(() => {
getCategories();
   }, [])
  return (
    <View style={{flex: 1, padding: 24}}>
            {isLoading ? (
             <ActivityIndicator />
           ) : (
             <FlatList
               data={data}
               dataCat={dataCat}
               keyExtractor={({id}) => id}
               renderItem={({item}) => ( 
               <TouchableOpacity>
                 <Card categorie={item.categorie}/>
                </TouchableOpacity>
               )}
             />
           )}
    </View>
  );
}
export default Categorie;