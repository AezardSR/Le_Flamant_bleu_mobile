import React, {Component, useContext, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChalkboard, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import { ApiContext, ApiProvider } from './features/loginAPi/ApiContext.js';
import TableauBord from './pages/TableauBord.js';
import Lesson from './pages/Lesson.js';
import Exercice from './pages/Exercice.js';
import LoginScreen from './features/loginAPi/LoginScreen.js';
import logoScreen from './features/loginAPi/logoScreen.js';
import Plannig from './pages/Planning.js'
import AddAppointments from './features/AddAppointments.js'
import UserProfil from './pages/UserProfil.js'
import Module from './pages/Module.js';
import Categorie from './pages/Categorie.js';
import Part from './pages/Part.js';

function Home() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const {user} = useContext(ApiContext);
  const userInfo = user["user"];

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
        title: 'Bienvenu '+userInfo.firstname,
        tabBarLabel: 'Tableau de bord',
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faHouse} />
        ),
      }} />
      
    <Tab.Screen name="Exercice" component={Module} options={{
      title: 'Exercices',
      tabBarLabel: 'Exercices',
      tabBarIcon: () => (
        <FontAwesomeIcon icon={faChalkboard} />
      ),
    }} />
    <Tab.Screen name="UserProfil" component={UserProfil} options={{
          title: 'Profil de '+userInfo.firstname,
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
  const Stack = createNativeStackNavigator();
  
  const Tab = createBottomTabNavigator();

  return(
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="logo" component={logoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Stack.Screen name="Footer" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Planning" component={Plannig} />
        <Stack.Screen name="AddAppointments" component={AddAppointments} />
        <Stack.Screen name="Module" component={Module} />
        <Stack.Screen name="Categorie" component={Categorie} />
        <Stack.Screen name="Part" component={Part} />



    </Stack.Navigator>
  </NavigationContainer>

  );
}

export default index;