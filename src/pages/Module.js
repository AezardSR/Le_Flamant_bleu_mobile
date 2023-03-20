import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity,StyleSheet} from 'react-native';
import { useState, useEffect } from 'react';
import Lesson from './Lesson';
import { useNavigation } from '@react-navigation/native';



function Module(){
  const [modules, setModules] = useState([]);
  const navigation = useNavigation();

  const getModules = async () => {
      const response = await fetch("http://192.168.1.123:8000/api/modules")
      const json = await response.json();
      setModules(json)
  };

  useEffect(()=>{
    getModules();
  }, [])

  const goToCategories = (id) =>{
    navigation.navigate('Categorie', {id});
  };
  return(
    <FlatList
      data={modules}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => goToCategories(item.id)} style={stylesCard.cardContent}>
          <Text style={stylesCard.cardtitle}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
const stylesCard = StyleSheet.create({
  cardContent: {
       flex: 1,
       // padding: 24,
       backgroundColor: '#eaeaea',
       marginHorizontal : 18,
       marginVertical : 10,
       marginBottom : 50,
   },
   cardtitle : {
       // marginTop: 16,
   paddingVertical: 8,
   borderWidth: 4,
   borderColor: '#20232a',
   borderRadius: 6,
   backgroundColor: '#61dafb',
   color: '#20232a',
   textAlign: 'center',
   fontSize: 30,
   fontWeight: 'bold',
   },
})
export default Module;