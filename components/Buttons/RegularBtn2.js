import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import {  StatusBarHeight } from '../Shared'
import { colors } from '../colors'
import SmallText from '../Texts/SmallText'

const {primary,secondary,platinum,white} = colors

const ButtonView2 = styled.TouchableOpacity`
    padding: 15px;
    ${StatusBarHeight && `padding-top:${StatusBarHeight + 30}px`};
    background-color: ${white};
    width: 300px;
    justify-content: center;]
    align-items: center;
    border-radius: 10px;
    margin-left: 30px;
    height: 50px;
    

`



const RegularBtn2 = (props) => {
  return (
  <ButtonView2 onPress={props.onPress} {...props}>
      <SmallText style={{color: secondary}}>
      {props.children}
      </SmallText>
       
  </ButtonView2>
  )
}

export default RegularBtn2