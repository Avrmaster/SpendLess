import React from 'react'

import { View } from 'react-native'
import { Text } from 'components'

export default class Tab1 extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#FFEFD5',
				}}
			>
				<Text>
					Wishlist
				</Text>
			</View>
		)
	}
}
