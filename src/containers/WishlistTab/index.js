import { connect } from 'react-redux'
import EarnActions from '../../reducers/EarnReducer'
import Wishlist from './Wishlist.tab'

function mapStateToProps(state) {
  return {
    user: state.earn.user,
    wishList: state.earn.wishList,
    wishListFetching: state.earn.wishListFetching,
    wishListError: state.earn.wishListError,
  }
}

function mapDispatchToPress(dispatch) {
  return {
    getWishList: (...args) => dispatch(EarnActions.wishListRequest(...args)),
    createWishItem: (...args) => dispatch(EarnActions.wishItemCreate(...args)),
  }
}

export default connect(mapStateToProps, mapDispatchToPress)(Wishlist)
