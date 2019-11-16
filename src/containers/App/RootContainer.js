import { View } from 'react-native'
import React from 'react'

import ReduxNavigation from 'navigation/NavigationStructureWithRedux'
import Popup from 'components/Popup'

export const popupRef: { ref: Popup } = {
	ref: null,
}

export default class RootContainer extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ReduxNavigation />
				<Popup
					ref={node => popupRef.ref = node}
				/>
			</View>
		)
	}
}
