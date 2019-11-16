import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { ContentWrapper, ItemImage, ItemName, ItemPrice, Wrapper, ProgressbarStyled } from './WishlistItem.styles';
import { Image as ImageNative } from 'react-native';

class WishlistItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: ImageNative.propTypes.source.isRequired,
    progress: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Wrapper activeOpacity={0.8}>
        <ItemImage source={this.props.image} />
        <ProgressbarStyled progress={this.props.progress} />
        <ContentWrapper>
          <ItemName>{this.props.title}</ItemName>
          <ItemPrice>${this.props.price}</ItemPrice>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default WishlistItem;
