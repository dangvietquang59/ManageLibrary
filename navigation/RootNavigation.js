import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Books from '../src/Books';
import DetailsBook from '../src/Books/details';
import BorrowBook from '../src/BorrowBook';
import Login from '../src/Authencation/login';
import Register from '../src/Authencation/register';
import Profile from '../src/Profile';
import Search from '../src/Search';
import SearchDetail from '../src/Search/searchDetail';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchDetail"
          component={SearchDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Books"
          component={Books}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsBook"
          component={DetailsBook}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BorrowBook"
          component={BorrowBook}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
