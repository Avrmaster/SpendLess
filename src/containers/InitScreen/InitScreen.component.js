import React, { PureComponent } from 'react'
import * as PropTypes from 'prop-types'
import {
	StatusBar,
	Animated,
} from 'react-native'

import {
	Container,
	IntroBackground,
	LogoText,
} from './InitScreen.styles'

class InitLoading extends PureComponent {
	static propTypes = {
		onAnimationFinished: PropTypes.func.isRequired,
		loadingFinished: PropTypes.bool,
	}

	logoScale = new Animated.Value(0.8)

	componentDidMount() {
		this.loopAnim = Animated.loop(
			Animated.sequence([
				Animated.spring(this.logoScale, {
					toValue: 1.05,
					useNativeDriver: true,
					isInteraction: false,
					mass: 2,
				}),
				Animated.spring(this.logoScale, {
					toValue: 0.95,
					useNativeDriver: true,
					isInteraction: false,
					mass: 2,
				}),
			]),
		)

		Animated.spring(this.logoScale, {
			toValue: 1,
			useNativeDriver: true,
			isInteraction: false,
			mass: 2,
			stiffness: 50,
		}).start(() => {
			this.loopAnim.start()
			this.props.onAnimationFinished()
		})
	}

	componentWillUnmount(): void {
		this.loopAnim.stop()
	}

	render() {

		return (
			<Container>
				<StatusBar
					hidden
				/>
				<IntroBackground
					source={require('../../images/Night.png')}
				/>
				<LogoText
					animated
					style={{
						transform: [{
							scale: this.logoScale,
						}],
					}}
				>
					{`SpendLess`}
				</LogoText>
			</Container>
		)
	}
}

export default InitLoading
