import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from "../CustomButton/index";
import {useForm} from 'react-hook-form'

const SocialSignInButtons = () => {

  const {handleSubmit} = useForm();
    const onSignInFacebook =() => {
        console.warn('onSignInFacebook');
      }
      const onSignInGoogle =() => {
        console.warn('onSignInGoogle');
      }
    
      const onSignInApple =() => {
        console.warn('onSignInApple');
      }
  return (
    <>
        <CustomButton
        text= "Sign in with Facebook"
        onPress={handleSubmit(onSignInFacebook)}
        bgColor = "#E7EAF4"
        fgColor= "#4765A9"
      />

      <CustomButton
        text= "Sign in with Google"
        onPress={handleSubmit(onSignInGoogle)}
        bgColor = "#FAE9EA"
        fgColor= "#DD4D44"
      />

      <CustomButton
        text= "Sign in with Apple"
        onPress={handleSubmit(onSignInApple)}
        bgColor = "#e3e3e3"
        fgColor= "#363636"
      />

    </>
  )
}

export default SocialSignInButtons