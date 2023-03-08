import {View, Text, StyleSheet, Image, useWindowDimensions,ScrollView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/loremLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  
  const onSignUpPress = () => {
    console.warn('Sign Up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign in" onPress={onSignInPressed}  type ="PRIMARY"/>

      <CustomButton
        text="Forgot password"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
    
      <SocialSignInButtons/>

      <CustomButton
        text="Do not have any account? Create one "
        onPress={onSignUpPress}
        type="TERTIARY"
      />

    </View> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 60,
    marginHorizontal: 30,
  },
  logo: {
    width: '100%',
    maxWidth: 160,
    maxHeight: 160,
    borderRadius: 100,
    marginBottom:25,

  },
});

export default SignInScreen;
