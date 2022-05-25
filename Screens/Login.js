import { View, Text } from 'react-native'
import React from 'react'
import MainContainer from '../components/Containers/MainContainer'
import KeyboardAvoid from '../components/Containers/KeyboardAvoid'
import RegularText from '../components/Texts/RegularText'
import SmallText from '../components/Texts/SmallText'

const Login = () => {
  return (
    <MainContainer>
        <KeyboardAvoid>
            <RegularText>
                Hi There
            </RegularText>
            <SmallText>Sign in to continue </SmallText>
        </KeyboardAvoid>
    </MainContainer>
  )
}

export default Login