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

const SignUpScreen = () => {
  const {username, setUsername} = useState('');
  const [email, setEmail] = useState('');
  const {password, setPassword} = useState('');
  const {passwordRepeat, setPasswordRepeat} = useState('');

  const onRegisterPressed = () => {
    console.warn('onRegisterPressed');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed');
  };

  const onSigninPress = () => {
    console.warn('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
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
