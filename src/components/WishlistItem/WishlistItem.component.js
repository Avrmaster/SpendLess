import React, { PureComponent } from 'react'
import * as PropTypes from 'prop-types'
import { ContentWrapper, ItemImage, ItemName, ItemPrice, Wrapper, ProgressbarStyled } from './WishlistItem.styles'

export default class WishlistItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  render() {
    const {name, price, photo_url} = this.props.item
    return (
      <Wrapper activeOpacity={0.8}>
        <ItemImage source={{uri: photo_url}} />
        <ProgressbarStyled progress={0} />
        <ContentWrapper>
          <ItemName>{name}</ItemName>
          <ItemPrice>${price}</ItemPrice>
        </ContentWrapper>
      </Wrapper>
    )
  }
}
