import * as React from 'react';
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


const App = () => {

  // const Menu = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
      <NavigationContainer>

        {/* <Menu.Navigator>
          <Menu.Screen name="Lessons" component={Lesson} />
        </Menu.Navigator> */}

        {/* <Stack.Navigator>
          <Stack.Screen name="TableauBord" component={TableauBord} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="Exercice" component={Exercice} />
        </Stack.Navigator> */}

        <Tab.Navigator>

          <Tab.Screen name="Lesson" component={Lesson} options={{
            title: 'Leçons',
            tabBarLabel: 'Leçons',
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faGraduationCap} />
              ),
            }} />

            <Tab.Screen name="TableauBord" component={TableauBord} options={{
              title: 'Bienvenu "Prénom"',
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
        </Tab.Navigator>

      </NavigationContainer>
  );
}

export default App;
