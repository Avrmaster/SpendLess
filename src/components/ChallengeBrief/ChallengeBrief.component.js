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
	Category,
	AppliedStar,
} from './ChallengeBrief.styles'
import {
	formatPrice,
} from 'helpers'

export default class ChallengeBrief extends React.Component {
	render() {
		const {
			applied,
			name,
			photo_url,
			brief_description,
			difficulty,
			earn_amount,
			sub_category,
		} = this.props.challenge

		return (
			<Container
				onPress={this.props.onPress}
				activeOpacity={0.8}
				underline={sub_category.category.color}
			>
				<Row>
					{
						applied && <AppliedStar
							source={require('../../images/Star.png')}
						/>
					}
					<ChallengeImage
						source={{ uri: photo_url }}
					/>
					<Name
						children={name}
					/>
					<Category
						children={sub_category.category.name}
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
		applied: PropTypes.bool,
		name: PropTypes.string,
		photo_url: PropTypes.string,
		brief_description: PropTypes.string,
		full_description: PropTypes.string,
		difficulty: PropTypes.string,
		earn_amount: PropTypes.number,
		sub_category: PropTypes.shape({
			category: PropTypes.shape({
				color: PropTypes.string,
				description: PropTypes.string,
				name: PropTypes.string,
			}),
		}),
	}).isRequired,
}
