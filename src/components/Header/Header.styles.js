import styled from 'styled-components/native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { ifIphoneX } from 'react-native-iphone-x-helper'

export const Container = styled.View`
	padding-top: ${ifIphoneX() ? 10 : 30}px;
	justify-content: flex-end;
`

export const LeftButtonHolder = styled.TouchableOpacity`
	padding: 10px;
`

export const LeftIcon = styled(AwesomeIcon)`
	padding: 10px
`

export const ImageHeaderMinHeight = ifIphoneX(100, 70)
export const ImageHeaderMaxHeight = 230

export const ImageHeader = styled.Image`
	width: 100%;
	height: ${ImageHeaderMaxHeight}px;
`
