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

	componentDidMount(): void {
		this.props.updateWishList(this.props.user.id)
	}

	render() {
		return (
			<ScrollView
				{...this.props}
			>
				<ChallengeDetails
					onApply={(wishId) => {
						this.props.applyForChallenge(this.props.user.id, this.state.challenge.id, wishId)
						this.goBack()
					}}
					onUnapply={() => {
						this.props.unApplyForChallenge(this.props.user.id, this.state.challenge.id)
						this.goBack()
					}}
					challenge={this.state.challenge}
					wishlist={[...this.props.wishlist]}
				/>
			</ScrollView>
		)
	}
}

ChallengeDetailsPage.propTypes = {
	user: PropTypes.object.isRequired,
	wishlist: PropTypes.array.isRequired,
	updateWishList: PropTypes.func.isRequired,
	applyForChallenge: PropTypes.func.isRequired,
	unApplyForChallenge: PropTypes.func.isRequired,
}
