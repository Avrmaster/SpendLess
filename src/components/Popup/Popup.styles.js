import { Animated, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

export const Background = styled(Animated.View)`
	background-color: black;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`

export const ContentContainer = styled(TouchableWithoutFeedback)`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`

export const ContentHolder = styled(Animated.View)`
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`
