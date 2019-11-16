import styled from 'styled-components/native'
import Text from 'components/Text'
import Colors from '../../themes/Colors'

export const Container = styled.View`
	background-color: white;
	flex-direction: column;
	justify-content: space-between;
	padding: 30px;
	border-radius: 5px;
	
	shadow-color: #a3a3a3;
	shadow-offset: 0px 5px;
	shadow-opacity: 0.5;
	shadow-radius: 10;
	elevation: 1px;
	
	border-bottom-color: ${({ underline }) => underline};
	border-bottom-width: 4px;
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
	font-style: italic;
`

export const Description = styled(Text)`
	font-size: 16px;
	padding-vertical: 50px;
	color: #A3A3A3;
`

export const Difficulty = styled(Text)`
	font-size: 18px;
	margin-top: 10px;
	font-style: italic;
	text-align: center;
`

export const Price = styled(Text)`
	font-size: 40px;
	text-align: center;
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
