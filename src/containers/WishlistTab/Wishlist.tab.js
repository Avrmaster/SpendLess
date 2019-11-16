import React from 'react'

import { RefreshControl, ScrollView } from 'react-native'
import { Text, WishlistItem } from 'components'

import { ButtonAdd, Container, Title, TopWrapper } from './Wishlist.styles'
import { WishlistNewModal } from './WishlistNewModal'
import LineError from 'components/LineError'

let items = [
  {
    title: 'IPhone',
    price: 1100,
    progress: 0.67,
    image: require('../../../assets/images/iphone.jpg'),
  },
  {
    title: 'T-Shit',
    price: 50,
    progress: 1,
    image: require('../../../assets/images/t-shit.png'),
  },
  {
    title: 'Iqos',
    price: 100,
    progress: 1,
    image: require('../../../assets/images/iqos.png'),
  },
  {
    title: 'T-Shit',
    price: 50,
    progress: 1,
    image: require('../../../assets/images/t-shit.png'),
  },
]

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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={wishListFetching}
            onRefresh={this.getWishList}
          />
        }>
        <Container>
          <TopWrapper>
            <Title>Wish list</Title>
            <ButtonAdd title={'Add new'} onPress={() => this.setModalVisible(true)} />
          </TopWrapper>
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
    )
  }
}
