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

const ResetPasswordScreen = () => {
  const {code, setCode} = useState('');
  const {newPassword, setNewPassword} = useState('')

  const onSubmitPressed = () => {
    console.warn('onSubmitPressed');
  };

  const onSigninPress = () => {
    console.warn('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password.</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />
   
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry={false}   
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} type="PRIMARY" />

        <CustomButton
          text="Back to sign in."
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
