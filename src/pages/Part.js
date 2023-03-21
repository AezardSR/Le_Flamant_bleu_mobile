import {React, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, SafeAreaView,StyleSheet} from 'react-native';

function Part(){

  const [parts, setParts] = useState([]);
  const [filtered, setFilter] = useState([]);
  const route = useRoute();
  const idCategorie = parseInt(route.params.id)

  const getParts = async () => {
    try{
      const response = await fetch("http://192.168.1.30:8000/api/parts");
      const json = await response.json()
      setParts(json);
    } catch(error){
      console.log("erreur part  " + error)
    }
  };
  useEffect(() => {
    getParts();
  })
  useEffect(() => {
    const filtered = parts.filter((item) => item.categories_id === idCategorie);
    // console.log("filtered   " + JSON.stringify(filtered));
    // const partsIDs = filtered.map((item) => item.id);
    // console.log('partisIDDD   ' + partsIDs);
    setFilter(filtered)
  }, [parts, idCategorie]);
return(
    <FlatList
      data={filtered}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity style={stylesCard.cardContent}>
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
export default Part;