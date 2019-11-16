import { ScrollView } from 'react-native'
import React from 'react'
import moment from 'moment'

import { createBackNavigation } from 'navigation/NavigationStructure'
import * as PropTypes from 'prop-types'
import { Container, Name, Row, TextBold, TextDefault } from './SpendingDetails.styles'

export default class SpendingDetailsPage extends React.Component {
	goBack = createBackNavigation(this)
	state = {
		item: this.props.navigation.getParam('spendingItem'),
	}

	componentDidMount(): void {
		this.props.updateSpendings(this.props.user.id)
	}

	render() {
		return (
			<ScrollView
				{...this.props}
			>
				<Container>
					<Name>{this.state.item.name}</Name>
					{this.state.item.description &&
					<Row>
						<TextBold>Description:</TextBold>
						<TextDefault>{this.state.item.description}</TextDefault>
					</Row>}
					<Row>
						<TextBold>Category: </TextBold>
						<TextDefault>{this.state.item.sub_category.category.name}</TextDefault>
					</Row>
					<Row>
						<TextBold>Sub Category: </TextBold>
						<TextDefault>{this.state.item.sub_category.name}</TextDefault>
					</Row>
					<Row>
						<TextBold>Date: </TextBold>
						<TextDefault>{moment(this.state.item.date).format("MMMM D YYYY")}</TextDefault>
					</Row>
					<Row>
						<TextBold>Price: </TextBold>
						<TextDefault>${this.state.item.price}</TextDefault>
					</Row>
				</Container>
			</ScrollView>
		)
	}
}

SpendingDetailsPage.propTypes = {
	user: PropTypes.object.isRequired,
	spendings: PropTypes.array.isRequired,
	updateSpendings: PropTypes.func.isRequired,
}
