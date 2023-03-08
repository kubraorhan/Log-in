/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView,StyleSheet,Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/index';
import SignUpScreen from './src/screens/SignUpScreen/index';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen/> 
       <SignUpScreen/> 
      <ConfirmEmailScreen /> 
      <ForgotPasswordScreen/>*/}
      <ResetPasswordScreen/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    backgroundColor:'#F9FBFC',
    flex:1
  }
});

export default App;
