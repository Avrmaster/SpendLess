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
		(props) => <ImageHeader source={{ uri: props.navigation.getParam('challenge').photo_url || 'https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png' }}/>,
		StaticHeader,
		ImageHeaderMinHeight,
		ImageHeaderMaxHeight,
	),
)
