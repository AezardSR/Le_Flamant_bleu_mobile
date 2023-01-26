import React, {Component, useContext } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import TableauBord from './src/component/pages/TableauBord.js';
import Lesson from './src/component/pages/Lesson.js';
import Exercice from './src/component/pages/Exercice.js';
import LoginScreen from './src/component/features/loginAPi/LoginScreen.js';
import { ApiContext, ApiProvider } from './src/component/features/loginAPi/ApiContext.js';

const App = () => {

 /* const objContext = useContext(ApiContext);
  const logged = (comp) => {
    if( !objContext.user.firstname && document.readyState === 'complete'){
      return <Navigate to="/login" replace={true} />
    } else {
      return comp
    }
  }*/
  // const Menu = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
    <ApiProvider>
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
              <Tab.Screen name="login" component={LoginScreen} />
            </Tab.Navigator>
          </NavigationContainer>
      </ApiProvider>
  );
}

export default App;
