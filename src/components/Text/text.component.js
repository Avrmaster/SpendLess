import { Platform, StyleSheet, Animated, Text as NativeText } from 'react-native'
import * as PropTypes from 'prop-types'
import React from 'react'

const Text: {
	propTypes: {
		animated?: PropTypes.bool
	}
} = React.forwardRef((props, ref) => {

	let defaultFontFamily = 'SF-UI-Text-Regular'
	if (props.style) {
		const { fontWeight, fontStyle } = StyleSheet.flatten(props.style)
		if (fontWeight) {
			defaultFontFamily = 'Roboto-' + ({
				normal: 'Regular',
				bold: 'Bold',
				'100': 'Thin',
				'200': 'Thin',
				'300': 'Light',
				'400': 'Medium',
				'500': 'Medium',
				'600': 'Bold',
				'700': 'Bold',
				'800': 'Black',
				'900': 'Black',
			}[fontWeight])
		}
		if (fontStyle === 'italic') {
			defaultFontFamily += 'Italic'
		}
	}

	const TextComponent = props?.animated
		? Animated.Text
		: NativeText

	return (
		<TextComponent
			ref={ref}
			allowFontScaling={false}
			{...props}
			style={[
				// eslint-disable-next-line react-native/no-inline-styles
				{
				  fontFamily: Platform.select({ ios: 'Roboto', android: defaultFontFamily }),
				},
				props.style,
				Platform.select({ android: { fontWeight: null, fontStyle: null } }),
			]}
		/>
	)
})

export default Text
