import React from 'react'
import * as PropTypes from 'prop-types'

import { Modal, View, Button, RefreshControl } from 'react-native'
import { TopWrapper } from '../Wishlist.styles'
import {
	InputText,
	InputWrapper,
	ModalTextInput,
	ModalWrapper,
	TouchableImageHandler,
	ImageItself,
} from './WishlistNewModal.styles'
import AvatarUtils from '../../../helpers/AvatarUtils'
import Colors from '../../../themes/Colors'

export default function WishlistNewModal(props) {
	const [loading, setLoading] = React.useState(false)
	const [name, setName] = React.useState('')
	const [price, setPrice] = React.useState('')
	const [imageLink, setImageLink] = React.useState('')
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={false}
				visible={props.modalVisible}
			>
				<ModalWrapper
					keyboardShouldPersistTaps={'handled'}
					refreshControl={
						<RefreshControl
							tintColor={Colors.main}
							refreshing={loading}
						/>
					}
				>
					<TopWrapper style={{ marginBottom: 15 }}>
						<Button title={'Close'} onPress={() => props.hideModal()}/>
						<Button title={'Submit'} onPress={() => {
							// if (!name?.length || !price || !imageLink?.length) {
							// 	alert('Fill required fields!')
							// 	return
							// }

							props.onSubmit(name, price, imageLink)
						}}/>
					</TopWrapper>

					<InputWrapper>
						<InputText>Name</InputText>
						<ModalTextInput value={name} onChangeText={setName} editable/>
					</InputWrapper>

					<InputWrapper>
						<InputText>Price (in $)</InputText>
						<ModalTextInput value={price.toString()} onChangeText={setPrice} editable keyboardType={'numeric'}/>
					</InputWrapper>

					<TouchableImageHandler
						activeOpacity={0.8}
						onPress={() => {
							AvatarUtils.changeAvatar(({
								source: 'gallery',
								onUpdateAvatarURI: (uri) => {
									setImageLink(uri)
								},
								onSetFetching: (isFetching) => {
									setLoading(isFetching)
								},
							}))
						}}
					>
						<ImageItself
							source={{
								uri: imageLink ||
									'https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png',
							}}
						/>
					</TouchableImageHandler>

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
