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

const SignUpScreen = () => {
  const {control, handleSubmit} = useForm();

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
         // rules={{required:'Username is required'}}
          placeholder="Username"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          control={control}
          secureTextEntry={false}
        />

        <CustomInput
          placeholder="Password"
          control={control}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"       
          control={control}
          secureTextEntry={true}
        />

        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          type="PRIMARY"
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress = {onTermsOfUsePressed} >Terms of Use </Text> and{' '}
          <Text style={styles.link} onPress = {onPrivacyPolicyPressed} >Privacy Policy</Text>.
        </Text>

        <SocialSignInButtons/>

        <CustomButton
        text="Have an account? Sign in."
        onPress={onSigninPress}
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
    color: 'Gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
