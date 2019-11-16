import React from 'react'
import * as PropTypes from 'prop-types'

import { createBackNavigation } from 'navigation/NavigationStructure'
import {
  Container,
  Title,
  LeftButtonHolder,
  LeftIcon, RightComponentHolder,
} from './Header.styles'

export default class Header extends React.Component {
  goBack = createBackNavigation(this)

  render() {
    const {hasBack, title, rightComponent} = this.props

    return (
      <Container {...this.props}>
        {
          title && <Title children={title} />
        }
        {
          hasBack && (
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
        {
					rightComponent && (
            <RightComponentHolder>{rightComponent}</RightComponentHolder>
          )
        }
      </Container>
    )
  }
}

Header.propTypes = {
  hasBack: PropTypes.bool,
  title: PropTypes.string,
  rightComponent: PropTypes.object,
}
