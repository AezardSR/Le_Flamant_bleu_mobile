import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import TableauBord from './src/component/pages/TableauBord.js';
import Lesson from './src/component/pages/Lesson.js';
import Exercice from './src/component/pages/Exercice.js';

const App = () => {

  const Stack = createNativeStackNavigator();
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TableauBord" component={TableauBord} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="Exercice" component={Exercice} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
