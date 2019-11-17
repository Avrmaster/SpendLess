import React from 'react'

import {RefreshControl, ScrollView, TouchableOpacity} from 'react-native'
import {WishlistItem} from 'components'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

import {Container} from './Wishlist.styles'
import {WishlistNewModal} from './WishlistNewModal'
import LineError from 'components/LineError'
import Colors from '../../themes/Colors'
import Header from '../../components/Header'
import {View} from 'react-native'
import EmptyList from '../../components/EmptyList/EmptyList'
import {deleteWishListItem} from '../../api/Api'


export default class Wishlist extends React.Component {
  state = {
    modalVisible: false,
  }

  componentDidMount(): void {
    this.getWishList()
  }

  getWishList = () => {
    this.props.getWishList(this.props.user.id)
  }

  removeItem = (id) => {
    deleteWishListItem(id)
      .then(() => {
        this.getWishList()
      })
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }

  addNewWishItem = (name, price, photo_url) => {
    this.props.createWishItem(this.props.user.id, name, price, photo_url)
    this.setModalVisible(false)
  }

  render() {
    const {
      wishList,
      wishListFetching,
      wishListError,
    } = this.props

    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <Header
          title={'Wish list'}
          style={{
            backgroundColor: Colors.main,
          }}
          rightComponent={<TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <AwesomeIcon
              color={'white'}
              size={25}
              name={'plus'}
            />
          </TouchableOpacity>}
        />
        <EmptyList
          show={!wishListFetching && !wishList?.length && !wishListError}
          text={'There is nothing in your Wish list yet. \nClick "+" icon to create new'}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor={Colors.main}
              refreshing={wishListFetching}
              onRefresh={this.getWishList}
            />
          }>
          <Container>
            <LineError
              error={wishListError}
            />
            {
              wishList && [...wishList]
                .sort((a, b) => b.id - a.id)
                .map((item) =>
                  <WishlistItem
                    key={item.id}
                    item={item}
                    onDelete={() => this.removeItem(item.id)}
                  />,
                )
            }
          </Container>
          <WishlistNewModal
            modalVisible={this.state.modalVisible}
            hideModal={() => this.setModalVisible(false)}
            onSubmit={this.addNewWishItem}
          />
        </ScrollView>
      </View>
    )
  }
}
