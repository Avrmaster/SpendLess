import { ScrollView, Dimensions } from 'react-native'
import React from 'react'
import moment from 'moment'
import Color from 'color'

import { createBackNavigation } from 'navigation/NavigationStructure'
import * as PropTypes from 'prop-types'
import { Container, Name, Row, TextBold, TextDefault } from './SpendingDetails.styles'

import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart,
} from 'react-native-chart-kit'

export default class SpendingDetailsPage extends React.Component {
	goBack = createBackNavigation(this)
	state = {
		item: this.props.navigation.getParam('spendingItem'),
	}

	componentDidMount(): void {
		this.props.updateSpendings(this.props.user.id)
	}

	render() {
		const barData = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [
				{
					data: [20, 45, 28, 80, 99, 43],
					strokeWidth: 2, // optional
				},
			],
		}

		const primaryColor = this.state.item.sub_category.category.color
		const colorBg = Color(primaryColor).darken(0.5).string()

		const chartConfig = {
			backgroundColor: colorBg,
			backgroundGradientFrom: colorBg,
			backgroundGradientTo: colorBg,
			decimalPlaces: 0, // optional, defaults to 2dp
			color: (opacity = 1) => Color(primaryColor).lighten(opacity * 1.5).string(),
		}

		const graphStyle = {
			marginVertical: 15,
		}

		const graphWidth = Dimensions.get('window').width
		const height = 220

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
						<TextDefault>{moment(this.state.item.date).format('MMMM D YYYY')}</TextDefault>
					</Row>
					<Row>
						<TextBold>Price: </TextBold>
						<TextDefault>${this.state.item.price}</TextDefault>
					</Row>
				</Container>
				<BarChart
					style={graphStyle}
					data={barData}
					width={graphWidth}
					height={height}
					yAxisLabel={'$'}
					chartConfig={chartConfig}
				/>

				<LineChart
					data={barData}
					width={graphWidth}
					height={height}
					yAxisLabel={'$'}
					chartConfig={chartConfig}
					bezier
					style={graphStyle}
				/>
			</ScrollView>
		)
	}
}

SpendingDetailsPage.propTypes = {
	user: PropTypes.object.isRequired,
	spendings: PropTypes.array.isRequired,
	updateSpendings: PropTypes.func.isRequired,
}
