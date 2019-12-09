import styled from 'styled-components/native'
import Colors from '../../themes/Colors'

import Text from 'components/Text'

import { TouchableOpacity, Image, View } from 'react-native'

export const AddButton = styled(TouchableOpacity)`
	height: 50px;
	margin: 0 10px 10px;
	background: ${Colors.main};
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`

export const AddButtonText = styled(Text)`
	color: white;
	font-weight: 400;
	font-size: 26px;
`
