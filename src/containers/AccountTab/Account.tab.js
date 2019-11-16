import React from 'react'

import { ScrollView, Picker } from 'react-native'

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

export default class Tab1 extends React.Component {

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
							style={{ height: 50, width: 100 }}
							onValueChange={(itemValue) =>
								this.props.login(itemValue)
							}>
							{[1, 2, 3, 4, 5]
								.map((id) => (<Picker.Item label={`User ${id}`} value={id}/>))}
						</Picker>
					</Row>
					<LottieCard
						source={require('../../../assets/animations/6780-credit-card-reveal')}
						autoPlay
						loop
					/>
					<FeaturedText>
						{`Here you will be able to\nconnect your bank account`}
					</FeaturedText>
				</ScrollView>
			</>
		)
	}
}
