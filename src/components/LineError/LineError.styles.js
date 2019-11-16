import styled from 'styled-components/native'

import Text from 'components/Text'
import Colors from '../../themes/Colors'

export const ErrorText = styled(Text)`
	color: ${Colors.beautifulRed};
	font-style: italic;
	margin: 16px;
	font-size: 20px;
`
