import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';

function JobsOffers(){
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]); // on stock les données du fetch, de base, tableau vide
  const navigation = useNavigation(); // permet d'utiliser l'envoie de données 

// Fetch via la fonction requestAPI pour la recuperation des données
  const getJobs = () => {
    requestAPI('/job-offers', 'GET', null)
      .then(response => response.json())
      .then(json =>{
        setJobs(json)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur Jobs " + error)
      })
  }

  // a chaque changement d'etat ( rendu du composant) , le fetch s'execute
  useEffect(() =>{
    getJobs();
  }, [])

  // fonction qui permet d'aller voir l'offre choisit et qui passe les données en parametres
  const goToShowJob = (jobs) =>{
    navigation.navigate("Offre d'emploi", {jobs});
  };

// si le fetch des données est trop long, on a un spinner d'attente
// apres resultat du fetch, si on a minimum une entrée dans le tableau, on affiche les données via une flatlist
// si aucune donnée dans le tableau, on affiche un message
  return(
    <View>
    {loading ?(
      <View>
        <ActivityIndicator size="large" color="#28abe2"/>
      </View>
    ) : (
      jobs.length > 0 ? (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={stylesCard.cardContainer}>
              <TouchableOpacity onPress={() => goToShowJob(item)} style={stylesCard.card}>
                <Text style={stylesCard.cardtitle}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={stylesCard.listTitle}>Il n'y a pas d'offre d'emploi</Text>
      )
    )}
  </View>
  );
}
export default JobsOffers;