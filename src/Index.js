import React, {Component, useContext, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChalkboard, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import { ApiContext, ApiProvider } from './component/features/loginAPi/ApiContext.js';
import TableauBord from './component/pages/TableauBord.js';
import Lesson from './component/pages/Lesson.js';
import Exercice from './component/pages/Exercice.js';
import LoginScreen from './component/features/loginAPi/LoginScreen.js';
import logoScreen from './component/features/loginAPi/logoScreen.js';
import Plannig from './component/pages/Planning.js'
import AddAppointments from './component/features/AddAppointments.js'
import UserProfil from './component/pages/UserProfil.js'
import Module from './src/pages/Module.js';
import Categorie from './src/pages/Categorie.js';
import Part from './src/pages/Part.js';

function Home() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const {user} = useContext(ApiContext);
  console.log(user, 'index.js');
  console.log(user[0].firstname, 'index.js');

  return(
  <Tab.Navigator initialRouteName='TableauBord'>
    <Tab.Screen name="Lesson" component={Lesson} options={{
      title: 'Leçons',
      tabBarLabel: 'Leçons',
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faGraduationCap} />
        ),
      }} />

      <Tab.Screen name="TableauBord" component={TableauBord} options={{
        title: 'Bienvenu '+user[0].firstname,
        tabBarLabel: 'Tableau de bord',
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faHouse} />
        ),
      }} />
      
    <Tab.Screen name="Exercice" component={Exercice} options={{
      title: 'Exercices',
      tabBarLabel: 'Exercices',
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faChalkboard} />
      ),
    }} />
    <Tab.Screen name="UserProfil" component={UserProfil} options={{
          title: 'Profil de '+user[0].firstname,
          tabBarLabel: 'Profil',
          // tabBarIcon: () => (
          //   // <FontAwesomeIcon icon={/*faGear*/} />
          // ),
        }} />
  </Tab.Navigator>
  )
}

const index = () => {

  const user = useContext(ApiContext);
  console.log(user, 'index.js');
  const Stack = createNativeStackNavigator();
  
  const Tab = createBottomTabNavigator();

  return(
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="logo" component={logoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Stack.Screen name="Footer" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Planning" component={Plannig} />
        <Stack.Screen name="AddAppointments" component={AddAppointments} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

export default index;