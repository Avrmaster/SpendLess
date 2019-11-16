import styled from 'styled-components/native'
import Text from 'components/Text'
import Colors from '../../themes/Colors'

export const Container = styled.TouchableOpacity`
	background-color: white;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 10px;
	
	border-bottom-width: 3px;
	border-bottom-color: ${({ underline }) => underline};
	
	shadow-color: #a3a3a3;
	shadow-offset: 0px 5px;
	shadow-opacity: 0.5;
	shadow-radius: 10;
	elevation: 1px;
	
	overflow: visible;
`

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const ChallengeImage = styled.Image`
	width: 200px;
	height: 130px;
`

export const Name = styled(Text)`
	font-size: 22px;
	font-weight: 400;
	text-align: center;
	flex: 1;
	font-style: italic;
`

export const BriefDescription = styled(Text)`
	font-size: 16px;
	padding-vertical: 10px;
	color: #A3A3A3
`

export const Difficulty = styled(Text)`
	font-size: 20px;
`

export const Price = styled(Text)`
	font-size: 30px;
`

export const Category = styled(Text)`
	position: absolute;
	top: 4px;
	right: 4px;
	color: #848484;
	font-size: 12px;
`

export const AppliedStar = styled.Image`
	position: absolute;
	top: -15px;
	left: -15px;
	width: 30px;
	height: 30px;
	z-index: 1000;
	background-color: aliceblue;
	border-radius: 15px;
`

export const AppliedText = styled(Text)`
	position: absolute;
	top: -15px;
	left: -20px;
	padding: 10px;
	z-index: 1000;
	color: chartreuse;
	font-weight: 900;
	font-size: 30px;
	transform: rotate(-10deg);
`
