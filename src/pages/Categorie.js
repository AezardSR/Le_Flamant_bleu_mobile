import {React, useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Text, FlatList, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import stylesCard from '../components/Card';
import {API_PATH} from "@env";

function Categorie(){

  // etat des composants, on initialise les variables dans un tableau vide au depart
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [idCatModul, setIdCatModul] = useState([]); 
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigation = useNavigation();
  const route = useRoute(); // sert a recuprerer l'id du module
  const idModule = parseInt(route.params.id); // recuperation de l'ID du module sur lequelle on a cliqué

  // recuperation des données de la table categorie
  const getCategories = async () => {
    try {
      const response = await fetch(`${API_PATH}/categories`);
      const json = await response.json();
      setCategories(json);
      setLoading(false)
    } catch (error) {
      console.error("erreur categorie   " + error);
    }
  };
  

  // recuperation des données de la table modulescategories
  const getIdCatModul = async () => {
    try {
    const response = await fetch(`${API_PATH}/module-categories`);
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
    navigation.navigate('Intitulé des parties', {id});
  }
  return(
    <View>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#28abe2"/>
        </View>
      ) : (
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={stylesCard.cardContainer}>
          <TouchableOpacity onPress={() => goToPart(item.id)} style={stylesCard.card}>
            <Text style={stylesCard.cardtitle}>{item.categorie}</Text>
          </TouchableOpacity>
          </View>
        )}
      />
      )}
    </View>
  );
}
export default Categorie;