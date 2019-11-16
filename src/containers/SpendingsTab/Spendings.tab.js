import React from 'react'

import { View, TouchableOpacity } from 'react-native'
import { Text } from 'components'
import { popupRef } from '../App/RootContainer'

export default class Tab1 extends React.Component {
	render() {

		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#FFEFD5',
				}}
			>
				<TouchableOpacity
					style={{
						width: 100,
						height: 100,
						backgroundColor: 'red',
					}}
					onPress={() => {
						popupRef.ref.set((
							<Text>
								Hello there
							</Text>
						))
					}}
				/>
			</View>
		)
	}
}
