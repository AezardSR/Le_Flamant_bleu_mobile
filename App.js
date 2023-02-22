import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import TableauBord from './src/pages/TableauBord.js';
import Lesson from './src/pages/Lesson.js';
import Exercice from './src/pages/Exercice.js';
import Module from './src/pages/Module.js';
import Categorie from './src/pages/Categorie.js';
import Part from './src/pages/Part.js';

const App = () => {

  // const Menu = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
      <NavigationContainer>

        {/* <Menu.Navigator>
          <Menu.Screen name="Lessons" component={Lesson} />
        </Menu.Navigator> */}

        <Stack.Navigator>
          <Stack.Screen name="TableauBord" component={TableauBord} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="Exercice" component={Categorie} />
          <Stack.Screen name="Categorie" component={Categorie} />
          <Stack.Screen name="Module" component={Module} />
          <Stack.Screen name="Part" component={Part} />




        </Stack.Navigator>

        {/* <Tab.Navigator>
          <Tab.Screen name="TableauBord" component={TableauBord} />
          <Tab.Screen name="Lesson" component={Lesson} />
          <Tab.Screen name="Exercice" component={Categorie} />
          <Tab.Screen name="Module" component={Module} />

        </Tab.Navigator> */}

      </NavigationContainer>
  );
}

export default App;
