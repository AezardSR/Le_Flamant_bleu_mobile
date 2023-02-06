import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import TableauBord from './src/pages/TableauBord.js';
import Lesson from './src/pages/Lesson.js';
import Exercice from './src/pages/Exercice.js';

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
          <Tab.Screen name="TableauBord" component={TableauBord} />
          <Tab.Screen name="Lesson" component={Lesson} />
          <Tab.Screen name="Exercice" component={Exercice} />
        </Tab.Navigator>

      </NavigationContainer>
  );
}

export default App;
