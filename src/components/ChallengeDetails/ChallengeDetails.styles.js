import styled from 'styled-components/native'
import Text from 'components/Text'
import Colors from '../../themes/Colors'
import { Picker } from 'react-native'

import { View, TouchableOpacity } from 'react-native'

export const Container = styled(View)`
	background-color: ${Colors.background};
	flex-direction: column;
	justify-content: space-between;
	border-radius: 5px;
`

export const Block = styled(View)`
	margin-horizontal: 20px;
	margin-top: 20px;
	border-radius: 10px;
	background-color: white;
	
	shadow-color: #a3a3a3;
	shadow-offset: 0px 5px;
	shadow-opacity: 0.2;
	shadow-radius: 2;
	elevation: 1px;
`

export const Row = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const ChallengeName = styled(Text)`
	font-size: 45px;
	font-weight: 400;
	margin-vertical: 20px;
	text-align: center;
	flex: 1;
`

export const Description = styled(Text)`
	font-size: 16px;
	margin: 30px;
	color: #A3A3A3;
`

export const Col = styled(View)`
	
`

export const Difficulty = styled(Text)`
	font-size: 18px;
	margin: 15px;
	font-style: italic;
	text-align: left;
`

export const Price = styled(Text)`
	font-size: 40px;
	margin: 10px;
	text-align: center;
	color: ${Colors.beautifulGreen};
`

export const WishPicker = styled(Picker)`
	flex: 1;
`

export const ApplyButton = styled(TouchableOpacity)`
	margin: 10px;
	padding: 10px;
	align-items: center;
`

export const ApplyText = styled(Text)`
	color: ${Colors.beautifulGreen}
	font-weight: 800;
	font-size: 26px;
`

export const HorizontalSeparator = styled(View)`
	background-color: ${({ color }) => color};
	height: 2px;
	width: 100%;
`

export const EarningText = styled(Text)`
	flex: 1;
	text-align: center;
	font-size: 45px;
`

export const ProgressHolder = styled(View)`
	flex-direction: row;
	padding: 10px;
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
