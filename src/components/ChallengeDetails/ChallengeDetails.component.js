import {} from 'react-native'
import * as PropTypes from 'prop-types'
import React from 'react'

import {
	Container,
	Row,
	Name,
	Description,
	Difficulty,
	Price,
	ApplyButton,
	ApplyText,
} from './ChallengeDetails.styles'
import {
	formatPrice,
} from 'helpers'

export default class ChallengeBrief extends React.Component {
	render() {
		const {
			name,
			fullDescription,
			difficulty,
			price,
		} = this.props.challenge

		return (
			<Container>
				<Name
					children={name}
				/>
				<Difficulty
					children={difficulty}
				/>
				<Description
					children={fullDescription}
				/>
				<Row>
					<Price
						children={'+' + formatPrice(price)}
					/>
				</Row>
				<ApplyButton onPress={() => {
					this.props.onApply()
				}}>
					<ApplyText>
						Apply
					</ApplyText>
				</ApplyButton>
			</Container>
		)
	}
}

ChallengeBrief.propTypes = {
	challenge: PropTypes.shape({
		name: PropTypes.string,
		imageUrl: PropTypes.string,
		briefDescription: PropTypes.string,
		fullDescription: PropTypes.string,
		difficulty: PropTypes.string,
		price: PropTypes.number,
	}).isRequired,
	onApply: PropTypes.func.isRequired,
	onUnapply: PropTypes.func.isRequired,
}
