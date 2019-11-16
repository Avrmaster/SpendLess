import React from 'react';

import { ScrollView } from 'react-native';
import { Text, WishlistItem } from 'components';

import { Container, Title } from './Wishlist.styles';

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
  render() {
    return (
      <ScrollView>
        <Container>
          <Title>
            Wish List:
          </Title>
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
      </ScrollView>
    );
  }
}
