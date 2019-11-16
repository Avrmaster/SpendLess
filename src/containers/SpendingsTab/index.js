import Spendings from './Spendings.tab'
import { connect } from 'react-redux'
import EarnActions from 'reducers/EarnReducer'

function mapStateToProps(state) {

	return {
		user: state.earn.user,
		spendings: state.earn.spendings,
		spendingsFetching: state.earn.spendingsFetching,
		spendingsError: state.earn.spendingsError,
		subcategories: state.earn.subcategories,
	}
}

function mapDispatchToPress(dispatch) {
	return {
		getSpendings: (...args) => dispatch(EarnActions.spendingsRequest(...args)),
		createSpendingItem: (...args) => dispatch(EarnActions.spendingItemCreate(...args)),
	}
}

export default connect(mapStateToProps, mapDispatchToPress)(Spendings)
