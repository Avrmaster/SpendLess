import styled from 'styled-components/native'
import Text from 'components/Text'

export const Wrapper = styled.TouchableOpacity`
	background: white;
	border-radius: 5px;
	margin-bottom: 10px;
	border-bottom-width: 3px;
	border-bottom-color: ${({ underline }) => underline};
	shadow-color: #a3a3a3;
	shadow-offset: 0px 5px;
	shadow-opacity: 0.5;
	shadow-radius: 10;
	elevation: 1px;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`

export const DateWrapper = styled.View`
	align-items: center;
	justify-content: center;
	width: 15%;
`

export const ContentWrapper = styled.View`
	align-items: flex-start;
	padding: 0 10px;
	margin: 10px 0;
	border-color: #808080;
	border-left-width: 1px;
	border-right-width: 1px;
	flex: 1;
`

export const PriceWrapper = styled.View`
	align-items: center;
	justify-content: center;
	min-width: 15%;
	padding: 5px;
`

export const DateDay = styled.Text`
	font-weight: 700;
	font-size: 25px;
`

export const DateMonth = styled.Text`
	font-weight: 300;
	font-size: 16px;
`

export const Name = styled.Text`
	font-size: 20px;
	font-weight: 600;
`

export const Description = styled.Text`
	font-size: 12px;
	font-weight: 300;
	margin-top: 5px;
`

export const Category = styled.Text`
	margin-top: 20px;
	font-size: 14px;
`

export const PriceAmount = styled.Text`
	font-size: 18px;
	font-weight: 700;
`
