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
import { initializeApp } from "firebase/app";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const firebaseConfig = {
  apiKey: "AIzaSyDJmFyZMk0asG-_NRfwq9oBdl_wOL0v7wM",
  authDomain: "fir-35fe0.firebaseapp.com",
  projectId: "fir-35fe0",
  storageBucket: "fir-35fe0.appspot.com",
  messagingSenderId: "899575168906",
  appId: "1:899575168906:web:34f5a14ba647b05cdb9273"
};

const app = initializeApp(firebaseConfig);

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
