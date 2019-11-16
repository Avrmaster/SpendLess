import React from 'react';

import { View, Modal, TouchableHighlight } from 'react-native';
import { Text } from 'components';

export default class WishlistNewModal extends React.Component {
  render() {
    console.log(this.props.modalVisible)
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}>
          <View style={{marginTop: 30}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => this.props.hideModal()}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
