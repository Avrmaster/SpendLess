import styled from 'styled-components/native'
import Text from 'components/Text'
import {
	View,
} from 'react-native'
import Colors from '../../themes/Colors'

export const AddButton = styled.TouchableOpacity`
	height: 42px;
	margin: 20px 10px 15px;
	background: ${Colors.beautifulRed};
	align-items: center;
	justify-content: center;
`

export const AddButtonText = styled.Text`
	color: white;
	font-weight: 400;
	font-size: 22px;
`
