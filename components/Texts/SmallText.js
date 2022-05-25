import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../colors'

const {primary,secondary,platinum, darkGrey,lightGrey} = colors

const StyledText = styled.Text`
    font-size: 13px;
    color: ${platinum};
    text-align: center;

`



const SmallText = (props) => {
  return (
  <StyledText {...props}>
        {props.children}
  </StyledText>
  )
}

export default SmallText