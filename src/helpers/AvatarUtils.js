import ImagePicker from 'react-native-image-crop-picker'
import { RNS3 } from 'react-native-aws3'
import uuid from 'react-native-uuid'

export default class AvatarUtils {

	static changeAvatar({ source, onUpdateAvatarURI, onSetFetching = null }) {
		AvatarUtils.pickImage(source)
			.then(image => {
				onSetFetching && onSetFetching(true)
				return AvatarUtils.uploadToS3({
					uri: image.path,
					prefix: 'avatars',
					filename: image.fileName,
				})
			})
			.then(response => {
				onUpdateAvatarURI(response.body.postResponse.location)
				onSetFetching && onSetFetching(false)
			})
			.catch(err => {
				console.log('image picker error', err)
				onSetFetching && onSetFetching(false)
			})
	}

	static pickImage = (source, props = {}) => {
		return ImagePicker[source === 'gallery' ? 'openPicker' : 'openCamera']({
			width: 400,
			height: 244,
			cropping: true,
			enableRotationGesture: true,
			...props,
		})
	}

	static uploadToS3 = ({ uri, prefix, filename, type = 'image/jpeg' }) => {
		console.log('uploading to S3', { uri, prefix, filename })

		const file = {
			uri,
			name: filename || uuid.v1(),
			type,
		}

		return RNS3.put(file, {
			keyPrefix: `${prefix}/`,
			bucket: 'shiftposts',
			region: 'ca-central-1',
			accessKey: 'AKIAI2AQTG57FOVWTVRA',
			secretKey: '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',
			successActionStatus: 201,
		}).then(response => {
			if (response.status !== 201) {
				throw new Error('Failed to upload image to S3')
			}
			return response
		})
	}
}
