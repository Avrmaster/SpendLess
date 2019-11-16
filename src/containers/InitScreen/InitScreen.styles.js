import styled from 'styled-components/native'
import Text from 'components/Text'
import {
	View,
	ImageBackground,
} from 'react-native'

export const Container = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const IntroBackground: ImageBackground = styled(ImageBackground)`
	width: 100%;
	height: 100%;
	position: absolute;
`

export const LogoText: Text = styled(Text)`
  font-size: 60px;
  color: white;
  margin-bottom: 400px;
  text-align: center;
`

LogoText.propTypes = { ...Text.propTypes }
