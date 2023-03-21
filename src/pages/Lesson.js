import { useEffect, useState, React } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

export default function UseModules(){
const [modules, setModules] = useState(null);

useEffect(()=>{
  fetch(`${API_PATH}/modules`)
  .then(response => response.json())
  .then(json => setModules(json))
}, [])

return modules;
};