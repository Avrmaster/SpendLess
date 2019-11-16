import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { Dimensions } from 'react-native'

import Text from 'components/Text'

const { width } = Dimensions.get('window')

export const LottieHeader = styled(LottieView)`
	width: ${width}px;
	height: ${300}px;
	margin-top: -20px;
	margin-bottom: -100px;
`

export const LottieCard = styled(LottieView)`
	width: ${width}px;
	height: ${100}px;
	margin-bottom: 30px;
`

export const LottieProfile = styled(LottieView)`
	width: ${200}px;
	height: ${200}px;
`

export const FeaturedText = styled(Text)`
	font-size: 20px;
	text-align: center;
	margin: 80px 0 30px;
	font-style: italic;
`

export const FeaturedTextHeader = styled(Text)`
	font-size: 20px;
	text-align: center;
	font-style: italic;
	margin-top: 20px;
`

export const Row = styled.View`
	flex-direction: row;
	padding: 20px;
`
