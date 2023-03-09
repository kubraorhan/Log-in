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
  

  const ForgotPasswordScreen = () => {
    const {username, setUsername} = useState('');
    const navigation = useNavigation();

  
    const onSendPressed = () => {    
      navigation.navigate('ResetPasswordScreen')
    };
  
    const onSigninPress = () => {
      console.warn('Sign in');
      navigation.navigate('SignInScreen')

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
    
          <CustomButton
            text="Send"
            onPress={onSendPressed}
            type="PRIMARY"   
          />

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
      marginBottom: 20
    },
    text: {
      color: 'Gray',
      marginVertical: 10,
    },
    link: {
      color: '#FDB075',
    },
  });
  
  export default ForgotPasswordScreen;
  