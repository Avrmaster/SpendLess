import ChallengesTab from './Challenges.tab'
import { connect } from 'react-redux'

import EarnActions from 'reducers/EarnReducer'

function mapStateToProps() {
	return {
		challenges: state => state.earn.challenges,
		challengesFetching: (state) => state.earn.challengesFetching,
		challengesError: (state) => state.earn.challengesError,
	}
}

function mapDispatchToPress(dispatch) {
	return {
		getChallenges: (...args) => dispatch(EarnActions.challengesRequest(...args)),
		applyForChallenge: (...args) => dispatch(EarnActions.challengeApplyRequest(...args)),
		unApplyForChallenge: (...args) => dispatch(EarnActions.challengeUnApplyRequest(...args)),
	}
}

export default connect(mapStateToProps, mapDispatchToPress)(ChallengesTab)
