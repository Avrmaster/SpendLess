import React from 'react';

import { ScrollView } from 'react-native';
import { Text, WishlistItem } from 'components';

import { ButtonAdd, Container, Title, TopWrapper } from './Wishlist.styles';
import { WishlistNewModal } from './WishlistNewModal';

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
];

export default class Tab1 extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <TopWrapper>
            <Title>Wish list</Title>
            <ButtonAdd title={'Add new'} onPress={() => this.setModalVisible(true)} />
          </TopWrapper>

          {
            items.map((item, i) =>
              <WishlistItem
                key={i}
                title={item.title}
                price={item.price}
                progress={item.progress}
                image={item.image} />)
          }
        </Container>
        <WishlistNewModal modalVisible={this.state.modalVisible} hideModal={() => this.setModalVisible(false)} />
      </ScrollView>
    );
  }
}
