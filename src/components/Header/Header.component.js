import React from 'react'
import * as PropTypes from 'prop-types'

import { createBackNavigation } from 'navigation/NavigationStructure'
import {
	Container,
	LeftButtonHolder,
	LeftIcon,
} from './Header.styles'

export default class Header extends React.Component {
	goBack = createBackNavigation(this)

	render() {

		return (
			<Container>
				{
					this.props.hasBack && (
						<LeftButtonHolder
							activeOpacity={0.8}
							onPress={this.goBack}
						>
							<LeftIcon
								name={'arrow-left'}
								color={'white'}
								size={30}
							/>
						</LeftButtonHolder>
					)
				}
			</Container>
		)
	}
}

Header.propTypes = {
	hasBack: PropTypes.bool,
}
