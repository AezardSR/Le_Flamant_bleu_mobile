import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChalkboard, faGraduationCap, faHouse, faGear } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import TableauBord from './src/component/pages/TableauBord.js';
import Lesson from './src/component/pages/Lesson.js';
import Exercice from './src/component/pages/Exercice.js';
import UserProfil from './src/component/pages/UserProfil.js';
import Plannig from './src/component/pages/Planning.js';

function MenuFooter() {

  const Tab = createBottomTabNavigator();

  return(

    <Tab.Navigator>

        <Tab.Screen name="TableauBord" component={TableauBord} options={{
          title: 'Bienvenu "Prénom"',
          tabBarLabel: 'Tableau de bord',
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faHouse} />
          ),
        }} />

        <Tab.Screen name="Lesson" component={Lesson} options={{
          title: 'Leçons',
          tabBarLabel: 'Leçons',
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faGraduationCap} />
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
          title: 'Profil de "Prénom"',
          tabBarLabel: 'Profil',
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faGear} />
          ),
        }} />

    </Tab.Navigator>

  );
}

function App() {

  // const Menu = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  
  return (
      <NavigationContainer>

        {/* <Menu.Navigator>
          <Menu.Screen name="Lessons" component={Lesson} />
        </Menu.Navigator> */}

        <Stack.Navigator>
          <Stack.Screen name="Footer" component={MenuFooter} options={{ headerShown: false }} />
          <Stack.Screen name="Planning" component={Plannig} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}

export default App;
