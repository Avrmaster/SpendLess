import * as PropTypes from 'prop-types'
import React from 'react'

import {
	Container,
	Row,
	ChallengeImage,
	Name,
	BriefDescription,
	Difficulty,
	Price,
} from './ChallengeBrief.styles'
import {
	formatPrice,
} from 'helpers'

export default class ChallengeBrief extends React.Component {
	render() {
		const {
			name,
			imageUrl,
			brief_description,
			difficulty,
			earn_amount,
		} = this.props.challenge

		return (
			<Container
				onPress={this.props.onPress}
				activeOpacity={0.8}
			>
				<Row>
					<ChallengeImage
						source={{ uri: imageUrl }}
					/>
					<Name
						children={name}
					/>
				</Row>
				<BriefDescription
					children={brief_description}
				/>
				<Row>
					<Difficulty
						children={difficulty}
					/>
					<Price
						children={formatPrice(earn_amount)}
					/>
				</Row>
			</Container>
		)
	}
}

ChallengeBrief.propTypes = {
	onPress: PropTypes.func.isRequired,
	challenge: PropTypes.shape({
		name: PropTypes.string,
		imageUrl: PropTypes.string,
		brief_description: PropTypes.string,
		full_description: PropTypes.string,
		difficulty: PropTypes.string,
		earn_amount: PropTypes.number,
	}).isRequired,
}
