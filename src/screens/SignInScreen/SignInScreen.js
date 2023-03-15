import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/loremLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    navigation.navigate('HomeScreen');
  };  
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          control={control}
          rules={{if(onSignInPressed) {{{required: 'Username is required'}}}}}
          placeholder="Username"
          secureTextEntry={false}
        />
        <CustomInput
          name="Password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{if(onSignInPressed) {
            {required: 'Password is required',
            {minLength: { value: 5 ,message: 'Password should be minimum 5 characters long.'}}
          }}}}
        />

        <CustomButton
          text="Sign in"
          onPress={handleSubmit(onSignInPressed)}
          type="PRIMARY"
        />

        <CustomButton
          text="Forgot password"
          onPress={handleSubmit(onForgotPasswordPressed)}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Do not have any account? Create one "
          onPress={handleSubmit(onSignUpPressed)}
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
    marginBottom: 25,
  },
});

export default SignInScreen;
