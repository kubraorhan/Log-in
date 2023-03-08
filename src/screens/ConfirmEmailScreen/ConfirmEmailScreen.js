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
  
  const ConfirmEmailScreen = () => {
    const {code, setCode} = useState('');
  
    const onConfirmPressed = () => {
      console.warn('onConfirmPressed');
    };
  
    const onSigninPress = () => {
      console.warn('Sign in');
    };
    
    const onResendPress = () => {
      console.warn('Sign in');
    };  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>
  
          <CustomInput
            placeholder="Enter your confirm code"
            value={code}
            setValue={setCode}
            secureTextEntry={true}
          />
    
          <CustomButton
            text="Confirm"
            onPress={onConfirmPressed}
            type="PRIMARY"   
          />
  
        <CustomButton
          text="Resend code."
          onPress={onResendPress}
          type="SECONDARY"
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
  
  export default ConfirmEmailScreen;
  