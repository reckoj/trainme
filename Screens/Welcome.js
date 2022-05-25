import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
//custom component
import MainContainer from '../components/Containers/MainContainer';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import logo from '../components/images/logo-noback.png'
import RegularBtn from '../components/Buttons/RegularBtn';
import RegularBtn2 from '../components/Buttons/RegularBtn2';
import { colors } from '../components/colors'
const {primary,secondary,platinum} = colors

const ImageView = styled.Image`
    width: 350px;
    height: 300px;
    margin: auto;
    margin-top: 70px;
    margin-left: 20px;

`

const Welcome =()=> {
  return (
    <MainContainer>
        <BigText  style={{fontWeight: 'bold', marginTop: 100}}>
            Welcome
        </BigText>
        <SmallText>
            TrainME makes finding a gym partner easy.
        </SmallText>
    <ImageView source={logo} />

    <RegularBtn2 style={{backgroundColor: 'white', marginBottom: 20, color: 'black'}}>
  Sign In
</RegularBtn2>
<RegularBtn style={{ marginBottom: 100,}}>
   Create An Account
</RegularBtn>
    </MainContainer>
  )
}
export default Welcome; 