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
} from 'react-native-chart-kit'
import { getChartConfig } from '../../../helpers/charts'
import { getCategoryChart } from '../../../api/Api'

const graphStyle = {
  marginVertical: 5,
  borderRadius: 10,
  marginLeft: 'auto',
  marginRight: 'auto',
}
const graphHeight = 230

export default class SpendingDetailsPage extends React.Component {
  goBack = createBackNavigation(this)
  state = {
    item: this.props.navigation.getParam('spendingItem'),
    chartData: null,
  }

  componentDidMount(): void {
    this.props.updateSpendings(this.props.user.id)
    this.updateChart(this.props.user.id)
  }

  updateChart = (userId) => {
    getCategoryChart(userId, this.state.item.sub_category.category.id)
      .then(data => this.setState(state => {
        return {
          chartData: {
            labels: data[0].slice(data[0].length - 6, data[0].length).map(i => i.substring(0, 3)),
            datasets: [{data: data[1].slice(data[1].length - 6, data[1].length)}],
          },
        }
      }))
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
        {this.state.chartData && <>
          <BarChart
            style={graphStyle}
            data={this.state.chartData}
            width={graphWidth}
            height={graphHeight}
            yAxisLabel={'$'}
            chartConfig={chartConfig}
          />

          <LineChart
            style={graphStyle}
            data={this.state.chartData}
            width={graphWidth}
            height={graphHeight}
            yAxisLabel={'$'}
            chartConfig={chartConfig}
            bezier
          />
        </>}
      </ScrollView>
    )
  }
}

SpendingDetailsPage.propTypes = {
  user: PropTypes.object.isRequired,
  spendings: PropTypes.array.isRequired,
  updateSpendings: PropTypes.func.isRequired,
}
