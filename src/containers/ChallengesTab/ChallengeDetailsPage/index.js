import ChallengeDetails from './ChallengeDetails.page'
import { connect } from 'react-redux'
import React from 'react'

import StaticHeader, { ImageHeader, ImageHeaderMinHeight, ImageHeaderMaxHeight } from 'components/Header'
import { withCollapsibleHeader } from 'decorators'

function mapStateToProps(state) {
	return {
		hasBack: true,
	}
}

function mapDispatchToPress(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToPress)(
	withCollapsibleHeader(
		ChallengeDetails,
		(props) => <ImageHeader source={{ uri: props.navigation.getParam('challenge').imageUrl }}/>,
		StaticHeader,
		ImageHeaderMinHeight,
		ImageHeaderMaxHeight,
	),
)
