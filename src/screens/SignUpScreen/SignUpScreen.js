import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'

const EMAIL_REGEX =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password')
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmailScreen')

  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed');
  };

  const onSigninPress = () => {
    navigation.navigate('SignInScreen')

  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          control={control}
          rules={{if(onRegisterPressed){required:'Username is required'}}}
          placeholder="Username"
          secureTextEntry={false}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{pattern: EMAIL_REGEX}}
          secureTextEntry={false}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          rules={{if(onRegisterPressed){required:'Password is required', 
          {minLength:{
            value:5, 
            message :'Password should be minimum 5 characters long.'}},
          {maxLength:{
            value:20,
            message :'Password should be max 20 characters long.'
          }}
          }}}
          control={control}
          secureTextEntry={true}
        />
        
        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"       
          control={control}
          secureTextEntry={true}
          rules= {{
            validate: value => value === pwd ||'Password do not match.'
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)} 
          type="PRIMARY"
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress = {handleSubmit(onTermsOfUsePressed)} >Terms of Use </Text> and{' '}
          <Text style={styles.link} onPress = {handleSubmit(onPrivacyPolicyPressed)} >Privacy Policy</Text>.
        </Text>

        <SocialSignInButtons/>

        <CustomButton
        text="Have an account? Sign in."
        onPress={handleSubmit(onSigninPress)}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginBottom:20
  },
  text: {
    color: '#808080',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
