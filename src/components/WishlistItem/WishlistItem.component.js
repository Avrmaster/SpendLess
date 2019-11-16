import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { ItemImage, Wrapper } from './WishlistItem.styles';
import { Text } from '../index';

class WishlistItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    progress: PropTypes.number,
  };

  render() {
    return (
      <Wrapper>
        <ItemImage source={this.props.image} />
        <Text>
          {this.props.title}
        </Text>
      </Wrapper>
    );
  }
}

export default WishlistItem;
