import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import { createNavigation } from 'navigation/NavigationStructure'
import { Text } from 'components'

export default class Tab1 extends React.Component {
	toDetails = createNavigation(this, 'details')

	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#00BFFF',
				}}
			>
				<TouchableOpacity onPress={this.toDetails}>
					<Text>
						Challenges (press)
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
