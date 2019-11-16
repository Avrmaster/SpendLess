import React from 'react'
import * as PropTypes from 'prop-types'

import { Modal, View, Button } from 'react-native'
import { TopWrapper } from '../Wishlist.styles'
import { InputText, InputWrapper, ModalTextInput, ModalWrapper } from './WishlistNewModal.styles'

export default function WishlistNewModal(props) {
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [imageLink, setImageLink] = React.useState('')
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}>
        <ModalWrapper>
          <TopWrapper style={{marginBottom: 15}}>
            <Button title={'Close'} onPress={() => props.hideModal()} />
            <Button title={'Submit'} onPress={() => props.onSubmit(name, price, imageLink)} />
          </TopWrapper>

          <InputWrapper>
            <InputText>Name</InputText>
            <ModalTextInput value={name} onChangeText={setName} editable />
          </InputWrapper>

          <InputWrapper>
            <InputText>Price (in $)</InputText>
            <ModalTextInput value={price.toString()} onChangeText={setPrice} editable keyboardType={'numeric'} />
          </InputWrapper>

          <InputWrapper>
            <InputText>Image link</InputText>
            <ModalTextInput value={imageLink} onChangeText={setImageLink} editable />
          </InputWrapper>
        </ModalWrapper>
      </Modal>
    </View>
  )
}

WishlistNewModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
}
