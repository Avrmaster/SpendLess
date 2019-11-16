import ChallengeDetails from './ChallengeDetails.page'
import { connect } from 'react-redux'
import React from 'react'

import StaticHeader, { ImageHeader, ImageHeaderMinHeight, ImageHeaderMaxHeight } from 'components/Header'
import { withCollapsibleHeader } from 'decorators'
import EarnActions from 'reducers/EarnReducer'

function mapStateToProps(state) {
	return {
		user: state.earn.user,
		wishlist: state.earn.wishList,
		hasBack: true,
	}
}

function mapDispatchToPress(dispatch) {
	return {
		updateWishList: (...args) => dispatch(EarnActions.wishListRequest(...args)),
		applyForChallenge: (...args) => dispatch(EarnActions.challengeApplyRequest(...args)),
		unApplyForChallenge: (...args) => dispatch(EarnActions.challengeUnApplyRequest(...args)),
	}
}

export default connect(mapStateToProps, mapDispatchToPress)(
	withCollapsibleHeader(
		ChallengeDetails,
		(props) => <ImageHeader source={{ uri: props.navigation.getParam('challenge').photo_url }}/>,
		StaticHeader,
		ImageHeaderMinHeight,
		ImageHeaderMaxHeight,
	),
)
