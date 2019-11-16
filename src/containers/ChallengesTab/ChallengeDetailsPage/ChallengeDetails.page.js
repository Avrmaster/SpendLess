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
						this.props.applyForChallenge(this.props.user.id, this.state.challenge.id)
						this.goBack()
					}}
					onUnapply={() => {
						this.props.unApplyForChallenge(this.props.user.id, this.state.challenge.id)
						this.goBack()
					}}
					challenge={this.state.challenge}
				/>
			</ScrollView>
		)
	}
}

ChallengeDetailsPage.propTypes = {
	user: PropTypes.object.isRequired,
	applyForChallenge: PropTypes.func.isRequired,
	unApplyForChallenge: PropTypes.func.isRequired,
}
