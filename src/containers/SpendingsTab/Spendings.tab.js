import React from 'react'

import { RefreshControl, ScrollView, View } from 'react-native'
import Colors from '../../themes/Colors'
import Header from '../../components/Header'
import LineError from '../../components/LineError/LineError.component'
import SpendingItem from '../../components/SpendingItem/SpendingItem.component'
import EmptyList from '../../components/EmptyList/EmptyList'
import { AddButton, AddButtonText } from './Spendings.styles'
import { popupRef } from '../App/RootContainer'
import NewSpending from '../../components/NewSpending/NewSpending.component'
import { createNavigation } from '../../navigation/NavigationStructure'

export default class Spendings extends React.Component {
	toDetails = createNavigation(this, 'details')

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
					show={!spendingsFetching && !spendings?.length && !spendingsError}
					text={'Looks like you have not\n added any spendings yet :)\n Click button below to add one'}
				/>
				<ScrollView
					style={{
						flex: 1,
						padding: 10,
					}}
					contentContainerStyle={{
						paddingBottom: 70,
					}}
					refreshControl={
						<RefreshControl
							tintColor={Colors.main}
							refreshing={spendingsFetching}
							onRefresh={this.getSpendings}
						/>
					}
				>
					{
						[...spendings]
							.sort((a, b) => new Date(b.date) - new Date(a.date))
							.map(spendingItem => (
								<SpendingItem
									key={spendingItem.id}
									item={spendingItem}
									onPress={() => this.toDetails({ spendingItem })}/>
							))
					}
				</ScrollView>
				<AddButton
					activeOpacity={0.8}
					onPress={() => {
						const aKey = Math.random()
						popupRef.ref.set(
							<NewSpending
								key={aKey}
								subcategories={this.props.subcategories}
								user={this.props.user}
								onAdd={(spendingItem) => {
									this.props.createSpendingItem(spendingItem)
									popupRef.ref.hide()
								}}
							/>,
						)
					}}
				>
					<AddButtonText>Add new</AddButtonText>
				</AddButton>
			</View>
		)
	}
}
