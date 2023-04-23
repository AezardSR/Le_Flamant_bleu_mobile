import * as React from 'react';
import {Calendar, Agenda, LocaleConfig} from 'react-native-calendars';
import { Text, View, Button, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import moment from "moment";
import {useNavigation} from '@react-navigation/native';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

const today = moment().format('YYYY-MM-DD');

const Plannig = (props) => {
    // const navigation = useNavigation();
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
          <Agenda
              items={{
                '2023-01-26': [{name: "J'en peux"}, {name: "plus de"}, {name: "ce module"}],
                '2023-01-25': [{name: 'Mission'}]
              }}

              renderItem={(item, isFirst) => (
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
          />

          {/* <Button title="Ajout" onPress={() => navigation.navigate('AddAppointments')}/> */}
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});

export default Plannig;