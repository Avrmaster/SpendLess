import React from 'react'

import {
	View,
} from 'react-native'

import ReduxNavigation from 'navigation/NavigationStructureWithRedux'

export default class RootContainer extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				{/* popup here */}
				<ReduxNavigation/>
			</View>
		)
	}
}
