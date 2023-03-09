import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/index';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen/index';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignInScreen" component ={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component ={SignUpScreen} />
        <Stack.Screen name="ConfirmEmailScreen" component ={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component ={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPasswordScreen" component ={ResetPasswordScreen} />
        <Stack.Screen name="HomeScreen" component ={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation