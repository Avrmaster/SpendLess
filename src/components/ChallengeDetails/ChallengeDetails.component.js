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
	WishPicker,
	EarningText,
} from './ChallengeDetails.styles'
import {
	formatPrice,
} from 'helpers'

export default class ChallengeBrief extends React.Component {

	state = {
		selectedWishItem: null,
	}

	render() {
		const {
			applied,
			name,
			full_description,
			difficulty,
			earn_amount,
			sub_category,
		} = this.props.challenge
		const {
			wishlist,
		} = this.props

		return (
			<Container
				underline={sub_category.category.color}
			>
				<Name key={Math.random()}>
					{name}
				</Name>
				<Difficulty
					children={difficulty}
				/>
				<Description
					children={full_description}
				/>
				<Price
					style={{
						fontSize: 20,
						marginBottom: 0,
					}}
					children={'Potential earn:'}
				/>
				<Price
					style={{
						marginTop: 0,
					}}
					children={formatPrice(earn_amount)}
				/>
				<Row>
					<EarningText>
						{
							this.state.selectedWishItem
								? (Math.min(
								100 * earn_amount / this.state.selectedWishItem?.price || 0, 100,
								)).toFixed(1)
								: '-- '
						}%
					</EarningText>
					<WishPicker
						selectedValue={this.state.selectedWishItem?.id}
						onValueChange={(selectedWishItem, selectedIndex) => {
							this.setState({ selectedWishItem: wishlist[selectedIndex - 1] })
						}}
					>
						<WishPicker.Item
							label={`Nothing`}
							value={0}
						/>
						{
							wishlist
								.map(
									wishItem => (
										<WishPicker.Item
											key={wishItem.id}
											label={`${wishItem.name}`}
											value={wishItem.id}
										/>
									),
								)
						}
					</WishPicker>
				</Row>
				<ApplyButton onPress={() => {
					if (applied) {
						this.props.onUnapply()
					} else {
						this.props.onApply(this.state.selectedWishItem?.id)
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
	wishlist: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	})).isRequired,
	onApply: PropTypes.func.isRequired,
	onUnapply: PropTypes.func.isRequired,
}
