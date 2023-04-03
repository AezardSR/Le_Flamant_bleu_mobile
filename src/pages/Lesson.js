import {React, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import { View,Text, FlatList, TouchableOpacity, SafeAreaView,StyleSheet, TextInput, Button} from 'react-native';

const Lesson = () => {
  
  
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
export default Lesson;
