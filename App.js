import React, {Component, useContext } from 'react';
import 'react-native-gesture-handler';
import { ApiContext, ApiProvider } from './src/features/loginAPi/ApiContext.js';
import Index from './src/Index.js';
import {registerRootComponent} from 'expo';
import { APP_NAME, API_PATH } from '@env';

console.log(APP_NAME); // affiche "Le Flamant Bleu Mobile"
console.log(API_PATH); // affiche "http://192.168.1.23:8000/"


const App = () => {
  
  return (
          <ApiProvider>
            <Index/>
          </ApiProvider>
  );
}
export default App;
