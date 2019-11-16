import React from 'react'

import { RefreshControl, ScrollView, View } from 'react-native'
import { Text } from 'components'
import Colors from '../../themes/Colors'
import Header from '../../components/Header'
import LineError from '../../components/LineError/LineError.component'
import SpendingItem from '../../components/SpendingItem/SpendingItem.component'
import EmptyList from '../../components/EmptyList/EmptyList'
import { AddButton, AddButtonText } from './Spendings.styles'

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
				<EmptyList
					show={!spendingsFetching && !spendings.length && !spendingsError}
					text={'Looks like you have not\n added any spendings yet :)\n Click button below to add one'}
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
								<SpendingItem key={item.id} item={item}/>
							))
					}
					{
						[...spendings]
							.sort((a, b) => b.id - a.id)
							.map(item => (
								<SpendingItem key={item.id} item={item}/>
							))
					}
					{
						[...spendings]
							.sort((a, b) => b.id - a.id)
							.map(item => (
								<SpendingItem key={item.id} item={item}/>
							))
					}
				</ScrollView>
				<AddButton
					activeOpacity={0.8}
					onPress={() => {
				}}>
					<AddButtonText>Add new</AddButtonText>
				</AddButton>
			</View>
		)
	}
}
