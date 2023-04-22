import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import stylesCard from '../components/Card';
import { ApiContext } from '../features/loginAPi/ApiContext.js';

function JobsOffers(){
  const {requestAPI} = React.useContext(ApiContext); // récupération du token depuis le contexte
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const navigation = useNavigation();

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
  useEffect(() =>{
    getJobs();
  }, [])

  const goToShowJob = (jobs) =>{
    navigation.navigate("Offre d'emploi", {jobs});
  };
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
        <Text style={stylesCard.listTitle}>Il n'y a pas d'offre d'emploie</Text>
      )
    )}
  </View>
  );
}
export default JobsOffers;