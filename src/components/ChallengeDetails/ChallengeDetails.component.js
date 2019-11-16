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
			applied,
			name,
			full_description,
			difficulty,
			earn_amount,
			sub_category,
		} = this.props.challenge

		return (
			<Container
				key={Math.random()}
				underline={sub_category.category.color}
			>
				<Name>
					{name}
				</Name>
				<Difficulty
					children={difficulty}
				/>
				<Description
					children={full_description}
				/>
				<Price
					children={'+' + formatPrice(earn_amount)}
				/>
				<ApplyButton onPress={() => {
					if (applied) {
						this.props.onUnapply()
					} else {
						this.props.onApply()
					}
				}}>
					<ApplyText>
						{
							applied
								? 'Unapply'
								: 'Apply'
						}
					</ApplyText>
				</ApplyButton>
			</Container>
		)
	}
}

ChallengeBrief.propTypes = {
	challenge: PropTypes.shape({
		applied: PropTypes.bool,
		name: PropTypes.string,
		imageUrl: PropTypes.string,
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
	onApply: PropTypes.func.isRequired,
	onUnapply: PropTypes.func.isRequired,
}
