import React from 'react'

import { RefreshControl, ScrollView, View } from 'react-native'
import { Text } from 'components'
import Colors from '../../themes/Colors'
import Header from '../../components/Header'
import LineError from '../../components/LineError/LineError.component'

export default class Spendings extends React.Component {
	componentDidMount(): void {
		this.getSpendings()
	}

	getSpendings = () => {
		this.props.getSpendings(this.props.user.id)
	}

	render() {
		const {
			spendings,
			spendingsFetching,
			spendingsError,
		} = this.props

		return (
			<View style={{ flex: 1, backgroundColor: Colors.background }}>
				<Header
					title={'Spendings'}
					style={{
						backgroundColor: Colors.main,
					}}
				/>
				<LineError
					error={spendingsError}
				/>

				<ScrollView
					style={{
						flex: 1,
						padding: 10,
					}}
					refreshControl={
						<RefreshControl
							refreshing={spendingsFetching}
							onRefresh={this.getSpendings}
						/>
					}
				>
					{
						[...spendings]
							.sort((a, b) => b.id - a.id)
							.map(item => (
								<Text>{item.id}</Text>
							))
					}
				</ScrollView>
			</View>
		)
	}
}
