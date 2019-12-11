import LottieView from 'web-modules/react-lottie'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function (props) {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: props.source,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	const style = (props.style && StyleSheet.flatten(props.style)) || {}

	console.log({
		style
	})

	return (
		<LottieView
			options={defaultOptions}
			height={style.height || 0}
			width={style.width || 0}
			isStopped={false}
			isPaused={false}
		/>
	)
}
