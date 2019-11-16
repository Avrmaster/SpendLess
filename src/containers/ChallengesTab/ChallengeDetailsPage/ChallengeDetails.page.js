import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import { createBackNavigation } from 'navigation/NavigationStructure'
import { Text } from 'components'

export default class Tab1 extends React.Component {
	goBack = createBackNavigation(this)

	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'yellow',
				}}
			>
				<TouchableOpacity onPress={this.goBack}>
					<Text>
						ChallengeDetails page (x)
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
