import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import { createNavigation } from 'navigation/NavigationStructure'
import ChallengeBrief from 'components/ChallengeBrief'
import { Text } from 'components'

export default class Tab1 extends React.Component {
	toDetails = createNavigation(this, 'details')

	render() {
		const challenges = [
			{
				id: 1,
				imageUrl: 'https://cdn-image.foodandwine.com/sites/default/files/1568907144/Coffee-National-Coffee-Day-FT-Blog0919.jpg',
				name: 'Less Coffee',
				briefDescription: 'Drink less coffee this week',
				fullDescription: 'Try to minimize your expenses by drinking one cup less coffee this week',
				difficulty: 'Easy',
				price: 1000,
			},
		]

		return (
			<View
				style={{
					flex: 1,
					paddingTop: 100,
					justifyContent: 'flex-start',
					backgroundColor: '#EEEEEE',
				}}
			>
				{
					challenges
						.map(challenge => (
							<ChallengeBrief
								key={challenge.id}
								onPress={() => this.toDetails({ challenge })}
								challenge={challenge}
							/>
						))
				}
			</View>
		)
	}
}
