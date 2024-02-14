import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup } from '../../components/Signup';
import Profile from '../../components/Profile';
import VerticallyPics from '../../components/VerticallyPics';
import { Login } from '../../components/Login';
// import { MyContextProvider } from './src/Context/AuthContext';
// import { useMyContext } from './src/Context/UseContextHook';

function ProfileStack() {
  const Stack = createNativeStackNavigator();
  return (
   
  
      <Stack.Navigator>
        
        {/* <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} /> */}
        
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='VerticallyPics' component={VerticallyPics} />
        
      </Stack.Navigator>

  );
}

export default ProfileStack;
