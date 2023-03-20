import {React, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, FlatList, TouchableOpacity, SafeAreaView,StyleSheet} from 'react-native';

function Categorie(){

  const [categories, setCategories] = useState([]);
  const [idCatModul, setIdCatModul] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const route = useRoute();
  const idModule = parseInt(route.params.id);

  const getCategories = async () => {
    const response = await fetch("http://192.168.1.123:8000/api/categories");
    const json = await response.json();
    setCategories(json);
  };

  const getIdCatModul = async () => {
    const response = await fetch("http://192.168.1.123:8000/api/modulescategories");
    const json = await response.json();
    setIdCatModul(json);
  };

  useEffect(() => {
    getCategories();
    getIdCatModul();
  }, []);

  useEffect(() => {
    const filtered = idCatModul.filter((item) => item.modules_id === idModule);
    const categoryIds = filtered.map((item) => item.categories_id);
    const filteredCategories = categories.filter((category) => categoryIds.includes(category.id));
    setFilteredCategories(filteredCategories);
  }, [idCatModul, idModule, categories]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={stylesCard.cardContent}>
      <Text style={stylesCard.cardtitle}>{item.categorie}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

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
export default Categorie;