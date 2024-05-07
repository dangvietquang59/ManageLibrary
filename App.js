import React from 'react';
import Home from './src/home';
import Books from './src/Books';
import Details from './src/Books/details';
import BorrowBook from './src/BorrowBook';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './src/Authencation/login';
function App() {
  return (
    <>
      <RootNavigation />
      {/* <Login /> */}
    </>
  );
}

export default App;
