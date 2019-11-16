import React, { PureComponent } from 'react'
import * as PropTypes from 'prop-types'
import { ContentWrapper, ItemImage, ItemName, ItemPrice, Wrapper, ProgressbarStyled } from './WishlistItem.styles'
import { Image as ImageNative } from 'react-native'

class WishlistItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Wrapper activeOpacity={0.8}>
        <ItemImage source={this.props.item.image} />
        <ProgressbarStyled progress={this.props.item.progress} />
        <ContentWrapper>
          <ItemName>{this.props.item.title}</ItemName>
          <ItemPrice>${this.props.item.price}</ItemPrice>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default WishlistItem
