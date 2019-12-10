import styled from 'styled-components/native'
import Text from 'components/Text'

import { Image, View, TouchableOpacity } from 'react-native'

export const ModalWrapper = styled.ScrollView`
  padding: 40px 15px 0;  
`

export const ModalTextInput = styled.TextInput`
  height: 38px;
  border-bottom-color: rgb(177,177,177);
  border-bottom-width: 1px;
  font-size: 18px;
  color: black;
`

export const InputText = styled(Text)`
  font-size: 14px;
  color: #747474;
`

export const InputWrapper = styled(View)`
  margin-bottom: 25px;
`

export const TouchableImageHandler = styled(TouchableOpacity)`
	width: 100%;
	height: 200px;
	justify-content: center;
	align-items: center;
`

export const ImageItself = styled(Image)`
	width: 90%;
	height: 90%;
`
