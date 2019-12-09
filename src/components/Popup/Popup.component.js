import { Keyboard } from 'react-native'
import React from 'react'

import { createFollowAnimation } from 'helpers'
import {
	Background,
	ContentHolder,
	ContentContainer,
} from './Popup.styles'

export default class Popup extends React.PureComponent {

	state = {
		content: null,
		hidden: true,
	}

	appearAnimation = createFollowAnimation()

	set(content): Popup {
		this.setState({
			content,
			hidden: false,
		})
		return this
	}

	hide = (): Popup => {
		Keyboard.dismiss()
		this.setState({
			hidden: true,
		})
		return this
	}

	render() {
		this.appearAnimation.setGoal(this.state.hidden ? 0 : 1)

		return (
			<React.Fragment>
				<Background
					pointerEvents={'none'}
					style={{
						opacity: this.appearAnimation.getCurrent()
							.interpolate({
								inputRange: [0, 0.9],
								outputRange: [0, 0.4],
								extrapolate: 'clamp',
							}),
					}}
				/>
				<ContentContainer
					pointerEvents={this.state.hidden ? 'none' : 'all'}
					onPress={this.hide}
				>
					<ContentHolder
						style={{
							transform: [
								{
									scale: this.appearAnimation.getCurrent(),
								},
							],
						}}
					>
						{this.state.content}
					</ContentHolder>
				</ContentContainer>
			</React.Fragment>
		)
	}
}
