import {} from 'react-native'
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
			briefDescription,
			difficulty,
			price,
		} = this.props.challenge

		return (
			<Container>
				<Row>
					<ChallengeImage
						source={{ uri: imageUrl }}
					/>
					<Name
						children={name}
					/>
				</Row>
				<BriefDescription
					children={briefDescription}
				/>
				<Row>
					<Difficulty
						children={difficulty}
					/>
					<Price
						children={formatPrice(price)}
					/>
				</Row>
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
}
