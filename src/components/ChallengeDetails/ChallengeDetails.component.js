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
			full_description,
			difficulty,
			earn_amount,
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
					children={full_description}
				/>
				<Row>
					<Price
						children={'+' + formatPrice(earn_amount)}
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
		brief_description: PropTypes.string,
		full_description: PropTypes.string,
		difficulty: PropTypes.string,
		earn_amount: PropTypes.number,
	}).isRequired,
	onApply: PropTypes.func.isRequired,
	onUnapply: PropTypes.func.isRequired,
}
