import  React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import moment from "moment";
import "moment/min/locales";
import ImagePlannig from '../assets/planningbanniere.png';
import { ApiContext } from '../features/loginAPi/ApiContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faNewspaper, faPaste} from '@fortawesome/free-solid-svg-icons';


export default function TableauBord() {
    const {user} = useContext(ApiContext);

    const navigation = useNavigation();
    const imgPlanning = Image.resolveAssetSource(ImagePlannig).uri;

    const [currentDate, setCurrentDate] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');

      useEffect(() => {  
        
        moment.locale('fr');
        var date = moment().utcOffset('+02:00').format('DD');
        var month = moment().utcOffset('+02:00').format('MMMM');

        setCurrentDate(date); 
        setCurrentMonth(month); 
    }, []);

    return (
      <View>
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.navigate('Planning')}>
              <View style={styles.backgroundPlanning}>
                <Text style={styles.textDate}>{currentDate}</Text>
                <Text style={styles.textMonth}>{currentMonth}</Text>
                <Text style={styles.nameBlock}>Planning</Text>
              </View>
            </TouchableOpacity>
        </SafeAreaView>
        
        <TouchableOpacity onPress={() => navigation.navigate("Les offres d'emplois")}>
        <View style={styles.backgroundPlanning}>
          <FontAwesomeIcon icon={faPaste} style={{color:"white"}} size={45} />
          <Text style={styles.nameBlock}>Offre d'emploi</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Les actualités')}>
        <View style={styles.backgroundPlanning}>
          <FontAwesomeIcon icon={faNewspaper} style={{color:"white"}} size={45} />
          <Text style={styles.nameBlock}>Actualités</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  textDate: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  textMonth: {
    fontSize: 25,
    color: '#21A4DC',
  },

  backgroundPlanning: {
    height: 200, 
    position: 'relative', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#1B3F56',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  nameBlock: {
    position: 'absolute',
    color: '#fff',
    bottom: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
