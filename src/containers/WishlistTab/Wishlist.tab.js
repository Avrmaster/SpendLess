import React from 'react'

import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import { Text, WishlistItem } from 'components'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { ButtonAdd, Container, Title, TopWrapper } from './Wishlist.styles'
import { WishlistNewModal } from './WishlistNewModal'
import LineError from 'components/LineError'
import Colors from '../../themes/Colors'
import Header from '../../components/Header'
import { View } from 'react-native'


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

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }

  addNewWishItem = (name, price, imageLink) => {
    console.log(name)
    console.log(price)
    console.log(imageLink)
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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={wishListFetching}
              onRefresh={this.getWishList}
            />
          }>
          <Container>
            <LineError
              error={wishListError}
            />
            {
              wishList && wishList.map((item, i) =>
                <WishlistItem
                  key={i}
                  item={item} />,
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
