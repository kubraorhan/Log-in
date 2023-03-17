/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
  
import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView,StyleSheet,Text} from 'react-native';
import Navigation from './src/navigation/index';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen/> 
       <SignUpScreen/> 
      <ConfirmEmailScreen /> 
      <ForgotPasswordScreen/>
      <ResetPasswordScreen/> */}
      <Navigation/>
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
