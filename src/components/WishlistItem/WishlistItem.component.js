import React, {PureComponent} from 'react'
import * as PropTypes from 'prop-types'
import {
  ContentWrapper,
  ItemImage,
  ItemName,
  ItemPrice,
  Wrapper,
  ProgressbarStyled,
  OverlapWrapper, ButtonDelete, ButtonDeleteText,
} from './WishlistItem.styles'

export default function WishlistItem(props) {
  const {name, price, photo_url, progress} = props.item
  const [showOverlap, setOverlapShow] = React.useState(false)

  return (
    <Wrapper activeOpacity={0.8} onPress={() => {
      setOverlapShow(!showOverlap)
    }}>
      <ItemImage source={{uri: photo_url}} />
      {/*<ProgressbarStyled progress={progress || 0} />*/}
      <ContentWrapper>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </ContentWrapper>
      {showOverlap && <OverlapWrapper>
        <ButtonDelete
          activeOpacity={0.8}
          onPress={props.onDelete}>
          <ButtonDeleteText>Delete</ButtonDeleteText>
        </ButtonDelete>
      </OverlapWrapper>
      }
    </Wrapper>
  )

}

WishlistItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}
