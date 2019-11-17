import ProgressCircle from 'react-native-progress-circle'
import * as PropTypes from 'prop-types'
import React from 'react'

import {
	Container,
	Row,
	Col,
	ChallengeName,
	Description,
	Difficulty,
	Price,
	ApplyButton,
	ApplyText,
	WishPicker,
	EarningText,
	Block,

	HorizontalSeparator,
	ProgressHolder,
	ProgressText, CategoryText,
} from './ChallengeDetails.styles'
import {
	formatPrice,
} from 'helpers'
import Colors from '../../themes/Colors'

export default class ChallengeBrief extends React.Component {

	state = {
		selectedWishItem: this.props.challenge.wishlist?.[0],
	}

	render() {
		const {
			applied,
			name: challengeName,
			full_description,
			difficulty,
			earn_amount,
			sub_category,
			wishlist: challengeWishlist,
		} = this.props.challenge
		const {
			wishlist,
		} = this.props

		const timeProgress = Math.round(challengeWishlist?.[0]?.challenge_time_progress * 100 || 0)
		const priceProgress = Math.round(challengeWishlist?.[0]?.challenge_price_progress * 100 || 0)
		const subColor = sub_category.category.color

		return (
			<Container
				underline={subColor}
			>
				<Block>
					<ChallengeName key={Math.random()}>
						{challengeName}
					</ChallengeName>
				</Block>
				<Block>
					<Description
						children={full_description}
					/>
					<Row>
						<Difficulty
							children={difficulty}
						/>
						<Price
							style={{
								marginTop: 0,
							}}
							children={formatPrice(earn_amount)}
						/>
					</Row>
				</Block>
				<Block>
					{
						applied
							? (
								<CategoryText>
									{this.state.selectedWishItem?.name}
								</CategoryText>
							)
							: (
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
										enabled={!applied}
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
							)
					}
				</Block>
				{
					applied && (
						<Block>
							<ProgressHolder>
								<ProgressText>
									{`Time`}
								</ProgressText>
								<ProgressCircle
									percent={timeProgress}
									radius={50}
									borderWidth={8}
									color={subColor}
									shadowColor="#999"
									bgColor="#fff"
								>
									<ProgressText>{timeProgress}%</ProgressText>
								</ProgressCircle>
								<ProgressCircle
									percent={priceProgress}
									radius={50}
									borderWidth={8}
									color={subColor}
									shadowColor="#999"
									bgColor="#fff"
								>
									<ProgressText>{priceProgress}%</ProgressText>
								</ProgressCircle>
								<ProgressText>
									{`Price`}
								</ProgressText>
							</ProgressHolder>
						</Block>
					)
				}
				<Block
					style={{
						marginBottom: 20,
					}}
				>
					<ApplyButton onPress={() => {
						if (applied) {
							this.props.onUnapply()
						} else {
							this.props.onApply(this.state.selectedWishItem?.id)
						}
					}}>
						{
							applied
								? (
									<ApplyText
										style={{
											color: Colors.beautifulRed,
										}}
									>
										Unapply
									</ApplyText>
								)
								: (
									<ApplyText>
										Apply
									</ApplyText>
								)
						}
					</ApplyButton>
				</Block>
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
