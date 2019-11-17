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
	AppliedText,
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
						applied && <AppliedText
							children={'Applied'}
						/>
					}
					<ChallengeImage
						source={{
							uri:
								photo_url
								||
								'https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png',
						}}
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
