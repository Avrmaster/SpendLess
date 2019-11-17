import React from 'react'

import { ScrollView, Picker, Dimensions } from 'react-native'

import {
  FeaturedTextHeader,
  LottieHeader,
  LottieCard,
  LottieProfile,
  FeaturedText,
  Row,
} from './Account.styles'
import Header from '../../components/Header'
import Colors from '../../themes/Colors'
import { getPieChart } from '../../api/Api'
import { PieChart } from 'react-native-chart-kit'
import { getChartConfig, mapPieData } from '../../helpers/charts'

export default class Tab1 extends React.Component {
  state = {
    pieData: null,
  }

  componentDidMount(): void {
    this.updateForUser(this.props.user.id)
  }

  updateForUser = (userId) => {
    getPieChart(userId)
      .then(pieData => this.setState(state => {
        return {pieData: mapPieData(pieData, this.props.subcategories)}
      }))
  }

  render() {
    return (
      <>
        <Header
          title={'Account Information'}
          style={{
            backgroundColor: Colors.main,
          }}
        />
        <ScrollView
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            alignItems: 'center',
          }}
        >
          <FeaturedTextHeader>
            {`Sign in section 🤪`}
          </FeaturedTextHeader>
          <Row>
            <LottieProfile
              source={require('../../../assets/animations/1786-profile')}
              autoPlay
              loop
            />
            <Picker
              selectedValue={this.props.user.id}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue) => {
                this.props.login(itemValue)
                this.updateForUser(itemValue)
              }}
            >
              {[1, 2, 3, 4, 5]
                .map((id) => (<Picker.Item key={id} label={`User ${id}`} value={id} />))}
            </Picker>
          </Row>
          <FeaturedText>
            {`And here you will be able to\nconnect your bank account`}
          </FeaturedText>
          <LottieCard
            source={require('../../../assets/animations/6780-credit-card-reveal')}
            autoPlay
            loop
          />

          {
            (!!this.state.pieData?.length) && <>
              <FeaturedTextHeader>Your Statistics</FeaturedTextHeader>
              <PieChart
                data={this.state.pieData}
                width={Dimensions.get('window').width}
                height={200}
                chartConfig={getChartConfig(Colors.main)}
                accessor="pieChartData"
                backgroundColor="transparent"
                paddingLeft="5"
								style={{marginBottom: 20}}
                absolute
              />
            </>
          }
        </ScrollView>
      </>
    )
  }
}
