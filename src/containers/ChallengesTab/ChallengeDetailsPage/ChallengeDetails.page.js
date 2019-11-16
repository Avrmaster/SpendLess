import { ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import { createBackNavigation } from 'navigation/NavigationStructure'
import { Text, ChallengeDetails } from 'components'

export default class ChallengeDetailsPage extends React.Component {
	goBack = createBackNavigation(this)
	state = {
		challenge: this.props.navigation.getParam('challenge'),
	}

	render() {
		return (
			<ScrollView
				{...this.props}
			>
				<ChallengeDetails
					challenge={this.state.challenge}
				/>
			</ScrollView>
		)
	}
}
