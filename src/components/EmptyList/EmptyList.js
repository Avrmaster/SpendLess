import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-native'

import { createFollowAnimation } from 'helpers'
import styles from './EmptyListStyle'
import Text from 'components/Text'

export default class EmptyList extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    show: PropTypes.bool,
    circleLoader: PropTypes.any,
  }

  textOpacityAnim = createFollowAnimation({
    overshootClamping: false,
  })

  render() {
    this.textOpacityAnim.setGoal(!!this.props.show ? 1 : 0)

    return (
      <View
        pointerEvents={'none'}
        style={[styles.container, this.props.style]}
      >
        <Text
          animated
          style={[
            styles.text,
            { opacity: this.textOpacityAnim.getCurrent() },
          ]}
        >
          {this.props.text}
        </Text>
      </View>
    )
  }
}
