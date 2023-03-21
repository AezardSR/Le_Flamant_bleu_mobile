import {React, useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, FlatList, TouchableOpacity, SafeAreaView,StyleSheet} from 'react-native';

function Categorie(){

  // etat des composants, on initialise les variables dans un tableau vide au depart
  const [categories, setCategories] = useState([]);
  const [idCatModul, setIdCatModul] = useState([]); 
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigation = useNavigation();
  const route = useRoute(); // sert a recuprerer l'id du module
  const idModule = parseInt(route.params.id); // recuperation de l'ID du module sur lequelle on a cliqué

  // recuperation des données de la table categorie
  const getCategories = async () => {
    try {
      const response = await fetch("http://192.168.1.30:8000/api/categories");
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.error("erreur categorie   " + error);
    }
  };
  

  // recuperation des données de la table modulescategories
  const getIdCatModul = async () => {
    try {
    const response = await fetch("http://192.168.1.30:8000/api/module-categories");
    const json = await response.json();
    setIdCatModul(json);
    } catch(error){
      console.error("erreur idcat   " + error);
    }
  };

  useEffect(() => {
    getCategories();
    getIdCatModul();
  }, []);

  // fait le filtre des categories en fonction de l'id du module
  useEffect(() => {
    // filtre les categories qui possede le meme modules_id que l'id Module selectionné dans la page d'avant
    const filtered = idCatModul.filter((item) => item.modules_id === idModule);
    // recupere que les ID des categories avec l'ID Module selectionné
    const categoryIds = filtered.map((item) => item.categories_id);
    // montre la liste des categories qu'il reste avec l' ID Module selectionné
    const filteredCategories = categories.filter((category) => categoryIds.includes(category.id));
    setFilteredCategories(filteredCategories);
  }, [idCatModul, idModule, categories]);

  const goToPart =(id) => {
    navigation.navigate('Part', {id});
  }
  return(
    <FlatList
      data={filteredCategories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => goToPart(item.id)} style={stylesCard.cardContent}>
          <Text style={stylesCard.cardtitle}>{item.categorie}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={stylesCard.cardContent}>
//       <Text style={stylesCard.cardtitle}>{item.categorie}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView>
//       <FlatList
//         data={filteredCategories}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

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