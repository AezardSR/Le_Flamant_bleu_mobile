import React, {Component, useContext } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApiContext, ApiProvider } from './component/features/loginAPi/ApiContext.js';
import TableauBord from './component/pages/TableauBord.js';
import Lesson from './component/pages/Lesson.js';
import Exercice from './component/pages/Exercice.js';
import LoginScreen from './component/features/loginAPi/LoginScreen.js';

  
function LogScreen() {
  const Stack = createNativeStackNavigator();
  return(
      <Stack.Navigator>
        <Stack.Screen name="login"component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

const index = () => {

  const user = useContext(ApiContext);
  console.log(user, 'index.js');
  
  const Tab = createBottomTabNavigator();

  return(
  <NavigationContainer>
    <Tab.Navigator>
      { user.firstname ? (
        <Tab.Group>
          <Tab.Screen name="TableauBord" component={TableauBord} />
          <Tab.Screen name="Lesson" component={Lesson} />
          <Tab.Screen name="Exercice" component={Exercice} />
        </Tab.Group>
      ) : (
      <Tab.Group>
        <Tab.Screen name="logscreen" component={LogScreen} options={{ headerShown: false }}/>
      </Tab.Group>
  
      )}
    </Tab.Navigator>
  </NavigationContainer>

  );
}

export default index;