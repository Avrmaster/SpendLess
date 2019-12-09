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
import { getPieChart } from '../../apiClient/Api'
// import { PieChart } from 'react-native-chart-kit'
import { getChartConfig, mapPieData } from '../../helpers/charts'
import profileAnimation from 'assets/animations/1786-profile.json'

import creditCardAnimation from 'assets/animations/6780-credit-card-reveal.json'

export default class AccountTab extends React.Component {
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
      <React.Fragment>
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
              source={profileAnimation}
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
            source={creditCardAnimation}
            autoPlay
            loop
          />

          {
            (!!(this.state.pieData && this.state.pieData.length)) && <React.Fragment>
              <FeaturedTextHeader>Your Statistics</FeaturedTextHeader>
              {/*<PieChart*/}
              {/*  data={this.state.pieData}*/}
              {/*  width={Dimensions.get('window').width}*/}
              {/*  height={220}*/}
              {/*  chartConfig={getChartConfig(Colors.main)}*/}
              {/*  accessor="pieChartData"*/}
              {/*  backgroundColor="transparent"*/}
							{/*	style={{marginBottom: 20}}*/}
              {/*/>*/}
            </React.Fragment>
          }
        </ScrollView>
      </React.Fragment>
    )
  }
}
