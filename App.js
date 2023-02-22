import React from 'react';
import 'react-native-gesture-handler';
import { ApiContext, ApiProvider } from './src/component/features/loginAPi/ApiContext.js';
import Index from './src/Index.js';


const App = () => {
  
  return (
          <ApiProvider>
            <Index/>
          </ApiProvider>
  );
}
export default App;
