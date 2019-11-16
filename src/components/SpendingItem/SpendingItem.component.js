import React from 'react'
import {
	DateWrapper,
	ContentWrapper,
	PriceWrapper,
	Wrapper,
	DateDay,
	DateMonth,
	Name,
	Description, Category, PriceAmount,
} from './SpendingItem.styles'
import * as PropTypes from 'prop-types'

export default class SpendingItem extends React.Component {
	render() {
		const {
			name,
			description,
			date,
			price,
			sub_category,
		} = this.props.item

		const dateObj = new Date(date)
		const dateDay = dateObj.getDay()
		const dateMonth = dateObj.toLocaleString('default', { month: 'short' });

		return <Wrapper
			activeOpacity={0.8}
			underline={sub_category.category.color}>
			<DateWrapper>
				<DateDay>{dateDay}</DateDay>
				<DateMonth>{dateMonth}</DateMonth>
			</DateWrapper>
			<ContentWrapper>
				<Name>{name}</Name>
				{description && <Description>{description}</Description>}
				<Category>{sub_category.category.name}</Category>
			</ContentWrapper>
			<PriceWrapper>
				<PriceAmount>${price}</PriceAmount>
			</PriceWrapper>
		</Wrapper>
	}
}

SpendingItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		date: PropTypes.string,
		price: PropTypes.number,
		sub_category: PropTypes.shape({
			category: PropTypes.shape({
				color: PropTypes.string,
				description: PropTypes.string,
				name: PropTypes.string,
			}),
		}),
	}).isRequired,
}

