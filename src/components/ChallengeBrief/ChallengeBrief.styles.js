import styled from 'styled-components/native'
import Text from 'components/Text'

export const Container = styled.View`
	background-color: white;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
	border-radius: 5px;
	
	shadow-color: #a3a3a3;
	shadow-offset: 0px 20px;
	shadow-opacity: 0.5;
	shadow-radius: 10;
	elevation: 1px;
`

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const ChallengeImage = styled.Image`
	width: 230px;
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
