import SpendingDetails from './SpendingDetails.page'
import { connect } from 'react-redux'
import React from 'react'

import StaticHeader, { ImageHeader, ImageHeaderMinHeight, ImageHeaderMaxHeight } from 'components/Header'
import { withCollapsibleHeader } from 'decorators'
import EarnActions from 'reducers/EarnReducer'
import { View } from 'react-native'

function mapStateToProps(state) {
	return {
		user: state.earn.user,
		spendings: state.earn.spendings,
		hasBack: true,
	}
}

function mapDispatchToPress(dispatch) {
	return {
		updateSpendings: (...args) => dispatch(EarnActions.spendingsRequest(...args)),
	}
}

export default connect(mapStateToProps, mapDispatchToPress)(
	withCollapsibleHeader(
		SpendingDetails,
		(props) => <View style={{
			backgroundColor: props.navigation.getParam('spendingItem').sub_category.category.color,
			height: '100%',
		}} />,
		StaticHeader,
		ImageHeaderMinHeight,
		100,
	),
)
