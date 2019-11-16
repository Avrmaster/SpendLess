import * as PropTypes from 'prop-types'
import {
	ScrollView,
} from 'react-native'

import React from 'react'
import {
	CreateButton,
	CreateText,
	Container,
	Input,
	DescriptionInput,
	CategoryPicker,
} from './NewSpending.styles'

export default class NewSpending extends React.Component {
	state = {}

	render() {
		const {
			subcategories,
		} = this.props

		return (
			<Container
				behavior={'padding'}
			>
				<ScrollView>
					<Input
						onChangeText={name => {
							this.setState({ name })
						}}
						placeholder={'Name..'}
					/>
					<Input
						onChangeText={priceText => {
							this.setState({ price: +priceText })
						}}
						placeholder={'Price..'}
					/>
					<CategoryPicker
						selectedValue={this.state.selectedCategory?.id}
						onValueChange={(_, selectedIndex) => {
							this.setState({ selectedCategory: subcategories[selectedIndex] })
						}}
					>
						{
							subcategories
								.map(
									category => (
										<CategoryPicker.Item
											key={category.id}
											label={`${category.name}`}
											value={category.id}
										/>
									),
								)
						}
					</CategoryPicker>
					<DescriptionInput
						multiline
						onChangeText={description => {
							this.setState({ description })
						}}
						placeholder={'Description..'}
					/>
					<CreateButton
						onPress={() => {
							if (
								!this.state.price ||
								!this.state.selectedCategory?.id ||
								!this.state.name
							) {
								alert("Field required fields!")
								return
							}

							this.props.onAdd({
								...this.state,
								amount: 1,
								date: new Date().toISOString(),
								sub_category_fk: this.state.selectedCategory?.id,
								user_fk: this.props.user.id,
							})
						}}
					>
						<CreateText>
							Save
						</CreateText>
					</CreateButton>
				</ScrollView>
			</Container>
		)
	}
}

NewSpending.propTypes = {
	user: PropTypes.object.isRequired,
	subcategories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
		}),
	).isRequired,
	onAdd: PropTypes.func.isRequired,
}
