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
import { useForm } from 'react-hook-form';


const ResetPasswordScreen = () => {
  const {control,handleSubmit}= useForm();
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('HomeScreen')
  };

  const onSigninPress = () => {
    navigation.navigate('SignInScreen')
    
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password.</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          control={control}
          secureTextEntry={false}
        />
   
        <CustomInput
          placeholder="Enter your new password"
          control={control}
          secureTextEntry={false}   
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} type="PRIMARY" />

        <CustomButton
          text="Back to sign in."
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
    marginBottom: 20,
  },
  text: {
    color: 'Gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ResetPasswordScreen;
