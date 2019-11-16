import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Text } from 'components'
import { View } from 'react-native'

export const Container = styled(View)`
	padding: 10px;
`

export const Name = styled(Text)`
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 20px;
`

export const TextDefault = styled(Text)`
	font-size: 16px;
	font-weight: 400;
`

export const TextBold = styled(Text)`
	font-size: 18px;
	font-weight: 700;
`

export const Row = styled(View)`
	flex-direction: row;
	align-items: center;
	margin-bottom: 15px;
`
