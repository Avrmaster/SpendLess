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

const barData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			data: [20, 45, 28, 80, 99, 43],
			strokeWidth: 2, // optional
		},
	],
}

const pieData = [
	{
		name: 'Seoul',
		population: 21500000,
		color: 'rgba(131, 167, 234, 1)',
		legendFontColor: '#7F7F7F',
		legendFontSize: 13,
	},
	{
		name: 'Toronto',
		population: 2800000,
		color: '#F00',
		legendFontColor: '#7F7F7F',
		legendFontSize: 13,
	},
	{
		name: 'Beijing',
		population: 527612,
		color: 'red',
		legendFontColor: '#7F7F7F',
		legendFontSize: 13,
	},
	{
		name: 'New York',
		population: 8538000,
		color: '#ffffff',
		legendFontColor: '#7F7F7F',
		legendFontSize: 13,
	},
	{
		name: 'Moscow',
		population: 11920000,
		color: 'rgb(0, 0, 255)',
		legendFontColor: '#7F7F7F',
		legendFontSize: 13,
	},
];

export default class SpendingDetailsPage extends React.Component {
	goBack = createBackNavigation(this)
	state = {
		item: this.props.navigation.getParam('spendingItem'),
	}

	componentDidMount(): void {
		this.props.updateSpendings(this.props.user.id)
	}

	render() {
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
			marginVertical: 10,
		}

		const graphWidth = Dimensions.get('window').width
		const height = 240

		return (
			<ScrollView
				{...this.props}
			>
				<Container>
					<Name>{this.state.item.name}</Name>
					{this.state.item.description &&
					<Row>
						<TextBold>Description: </TextBold>
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
					style={graphStyle}
					data={barData}
					width={graphWidth}
					height={height}
					yAxisLabel={'$'}
					chartConfig={chartConfig}
					bezier
				/>

				<PieChart
					data={pieData}
					width={graphWidth}
					height={height}
					chartConfig={chartConfig}
					accessor="population"
					backgroundColor="transparent"
					paddingLeft="15"
					absolute
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
