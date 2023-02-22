import React, {Component, useContext, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApiContext, ApiProvider } from './component/features/loginAPi/ApiContext.js';
import TableauBord from './component/pages/TableauBord.js';
import Lesson from './component/pages/Lesson.js';
import Exercice from './component/pages/Exercice.js';
import LoginScreen from './component/features/loginAPi/LoginScreen.js';
import logoScreen from './component/features/loginAPi/logoScreen.js';

  
function Home() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const user = useContext(ApiContext);
  console.log(user, 'index.js');
  return(
    <Tab.Navigator>
        <Tab.Screen name="TableauBord" component={TableauBord} />
        <Tab.Screen name="Lesson" component={Lesson} />
        <Tab.Screen name="Exercice" component={Exercice} />
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
    </Stack.Navigator>
  </NavigationContainer>

  );
}

export default index;