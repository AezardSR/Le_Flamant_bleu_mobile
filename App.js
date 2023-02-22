import React, {Component, useContext } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChalkboard, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import TableauBord from './src/component/pages/TableauBord.js';
import Lesson from './src/component/pages/Lesson.js';
import Exercice from './src/component/pages/Exercice.js';

import { ApiContext, ApiProvider } from './src/component/features/loginAPi/ApiContext.js';
import Index from './src/Index.js';


const App = () => {
  
  return (
          <ApiProvider>
            <Index/>
          </ApiProvider>
  );
}
export default App;
