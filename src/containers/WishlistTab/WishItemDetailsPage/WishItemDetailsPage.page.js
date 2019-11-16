import React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-native'
import { createBackNavigation } from 'navigation/NavigationStructure'


export default class WishItemDetailsPage extends React.Component {
  // goBack = createBackNavigation(this)
  render() {
    return (
      <View style={{flex: 1, marginTop: 40}}>
        Helllooo from other page
      </View>
    )
  }
}
