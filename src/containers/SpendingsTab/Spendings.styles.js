import styled from 'styled-components/native'
import Colors from '../../themes/Colors'

export const AddButton = styled.TouchableOpacity`
	height: 50px;
	margin: 0 10px 10px;
	background: ${Colors.main};
	align-items: center;
	justify-content: center;
	border-radius: 5px;
`

export const AddButtonText = styled.Text`
	color: white;
	font-weight: 400;
	font-size: 26px;
`
