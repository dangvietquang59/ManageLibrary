import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import {Provider} from 'react-native-paper';
function App() {
  return (
    <Provider>
      <RootNavigation />
      {/* <Login /> */}
    </Provider>
  );
}

export default App;
