import { connect } from 'react-redux'

import Account from './Account.tab'
import EarnActions from 'reducers/EarnReducer'

function mapStateToProps(state) {

	return {
		user: state.earn.user,
		subcategories: state.earn.subcategories,
	}
}

function mapDispatchToPress(dispatch) {
	return {
		login: (...args) => dispatch(EarnActions.loginRequest(...args)),
	}
}

export default connect(mapStateToProps, mapDispatchToPress)(Account)
