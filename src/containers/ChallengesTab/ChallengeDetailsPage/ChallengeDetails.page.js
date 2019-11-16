import { ScrollView } from 'react-native'
import React from 'react'

import { createBackNavigation } from 'navigation/NavigationStructure'
import { ChallengeDetails } from 'components'
import * as PropTypes from 'prop-types'

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
					onApply={() => {
						this.props.applyForChallenge()
						this.goBack()
					}}
					onUnapply={() => {
						this.props.unApplyForChallenge()
						this.goBack()
					}}
					challenge={this.state.challenge}
				/>
			</ScrollView>
		)
	}
}

ChallengeDetailsPage.propTypes = {
	applyForChallenge: PropTypes.func.isRequired,
	unApplyForChallenge: PropTypes.func.isRequired,
}
