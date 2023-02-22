import * as React from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import Card from '../components/Card.js';

function Part({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch('http://192.168.1.19:8000/api/part')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    console.log(data)
   }, []);
  return (
    <View style={{flex: 1, padding: 24}}>
            {isLoading ? (
             <ActivityIndicator />
           ) : (
             <FlatList
               data={data}
               keyExtractor={({id}) => id}
               renderItem={({item}) => ( 
               <TouchableOpacity onPress={()=> navigation.navigate('Categorie')}>
                 <Card categorie={item.name} />
                 </TouchableOpacity>
               )}
             />
           )}
    </View>
  );
}
export default Part;