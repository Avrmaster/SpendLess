import styled from 'styled-components/native'
import { Picker } from 'react-native'

import Text from 'components/Text'
import Colors from '../../themes/Colors'

export const Container = styled.KeyboardAvoidingView`
	width: 100%;
	padding: 20px 40px;
	background-color: white;
	border-radius: 6px;
`

export const KeyboardContainer = styled.KeyboardAvoidingView`
`

export const Input = styled.TextInput`
	font-family: Roboto;
	padding: 10px;
	margin: 10px;
	font-size: 30px;
`

export const DescriptionInput = styled(Input)`
	height: 100px;
`

export const CategoryPicker = styled(Picker)`
	
`

export const CreateButton = styled.TouchableOpacity`
	background-color: ${Colors.main};
	padding: 20px;
	align-items: center;
	margin-bottom: 20px;
`

export const CreateText = styled(Text)`
	color: white;
	font-weight: bold;
	font-size: 20px;
`
