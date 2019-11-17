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
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'
import { getChartConfig } from '../../../helpers/charts'

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100],
      strokeWidth: 2, // optional
    },
  ],
}

const graphStyle = {
	marginVertical: 5,
	borderRadius: 10,
	marginLeft: "auto",
	marginRight: "auto",
}
const graphHeight = 230


export default class SpendingDetailsPage extends React.Component {
  goBack = createBackNavigation(this)
  state = {
    item: this.props.navigation.getParam('spendingItem'),
  }

  componentDidMount(): void {
    this.props.updateSpendings(this.props.user.id)
  }

  render() {
    const chartConfig = getChartConfig(this.state.item.sub_category.category.color)
    const graphWidth = Dimensions.get('window').width * 0.95

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
          height={graphHeight}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
        />

        <LineChart
          style={graphStyle}
          data={barData}
          width={graphWidth}
          height={graphHeight}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          bezier
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
