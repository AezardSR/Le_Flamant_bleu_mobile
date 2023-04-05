import React  from 'react';
import 'react-native-gesture-handler';
import { ApiProvider } from './src/features/loginAPi/ApiContext.js';
import Index from './src/Index.js';

const App = () => { //composant fuction pour gerer le context sur toute l'app
  /* <ApiProvider> est un composant qui permet de passer le context à tout l'app */
  /* <Index/> est le composant qui contient tout le reste de l'app */
  return (
          <ApiProvider> 
            <Index /> 
          </ApiProvider>
  );
}
export default App;
