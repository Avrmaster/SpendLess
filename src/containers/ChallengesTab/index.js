import ChallengesTab from './Challenges.tab'
import { connect } from 'react-redux'

import EarnActions from 'reducers/EarnReducer'

function mapStateToProps(state) {

	return {
		user: state.earn.user,
		// challenges: [
		// 	{
		// 		id: 1,
		// 		imageUrl: 'https://cdn-image.foodandwine.com/sites/default/files/1568907144/Coffee-National-Coffee-Day-FT-Blog0919.jpg',
		// 		name: 'Less Coffee',
		// 		briefDescription: 'Drink less coffee this week',
		// 		fullDescription: 'Try to minimize your expenses by drinking one cup less coffee this week',
		// 		difficulty: 'Easy',
		// 		price: 1000,
		// 	},
		// 	{
		// 		id: 2,
		// 		imageUrl: 'https://cdn-image.foodandwine.com/sites/default/files/1568907144/Coffee-National-Coffee-Day-FT-Blog0919.jpg',
		// 		name: 'Less Coffee',
		// 		briefDescription: 'Drink less coffee this week',
		// 		fullDescription: 'Try to minimize your expenses by drinking one cup less coffee this week',
		// 		difficulty: 'Easy',
		// 		price: 1000,
		// 	},
		// ],
		challenges: state.earn.challenges,
		challengesFetching: state.earn.challengesFetching,
		challengesError: state.earn.challengesError,
	}
}

function mapDispatchToPress(dispatch) {
	return {
		getChallenges: (...args) => dispatch(EarnActions.challengesRequest(...args)),
	}
}

export default connect(mapStateToProps, mapDispatchToPress)(ChallengesTab)
