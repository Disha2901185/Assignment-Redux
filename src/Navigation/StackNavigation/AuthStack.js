import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup } from '../../components/Signup';
// import Profile from './src/components/Profile';
// import VerticallyPics from './src/components/VerticallyPics';
import { Login } from '../../components/Login';

// import { useMyContext } from './src/Context/UseContextHook';

function AuthStack() {
  const Stack = createNativeStackNavigator();
//   const {user,setUser}=useMyContext()
//   setUser(user)
  return (
    
      
      <Stack.Navigator>
        
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        
        {/* <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='VerticallyPics' component={VerticallyPics} /> */}
        
      </Stack.Navigator>
  
 
  );
}

export default AuthStack;
