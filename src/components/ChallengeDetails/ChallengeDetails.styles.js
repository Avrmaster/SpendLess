import styled from 'styled-components/native'
import Text from 'components/Text'
import Colors from '../../themes/Colors'
import { Picker } from 'react-native'

export const Container = styled.View`
	background-color: white;
	flex-direction: column;
	justify-content: space-between;
	margin: 15px;
	border-radius: 5px;
`

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Name = styled(Text)`
	font-size: 45px;
	font-weight: 400;
	text-align: center;
	flex: 1;
`

export const Description = styled(Text)`
	font-size: 16px;
	margin-vertical: 30px;
	color: #A3A3A3;
`

export const Col = styled.View`
	
`

export const Difficulty = styled(Text)`
	font-size: 18px;
	margin-top: 10px;
	margin-bottom: 15px;
	font-style: italic;
	text-align: center;
`

export const Price = styled(Text)`
	flex: 1;
	font-size: 40px;
	text-align: center;
	color: ${Colors.beautifulGreen};
`

export const WishPicker = styled(Picker)`
	flex: 1;
`

export const ApplyButton = styled.TouchableOpacity`
	margin-top: 50px;
	padding: 10px;
	align-items: center;
`

export const ApplyText = styled(Text)`
	color: ${Colors.beautifulGreen}
	font-weight: 800;
	font-size: 26px;
`

export const HorizontalSeparator = styled.View`
	background-color: ${({color}) => color};
	height: 2px;
	width: 100%;
`

export const EarningText = styled(Text)`
	flex: 1;
	text-align: center;
	font-size: 45px;
`

export const ProgressHolder = styled.View`
	flex-direction: row;
	justify-content: space-between;
`

export const ProgressText = styled(Text)`
	font-size: 20px;
`

export const CategoryText = styled(Text)`
	width: 100%;
	font-size: 30px;
	text-align: center;
	margin: 20px 0;
`
