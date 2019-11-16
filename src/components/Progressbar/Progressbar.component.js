import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import {
  ProgressLine,
  ProgressWrapper,
} from './Progressbar.styles';
import { View } from 'react-native';

class Progressbar extends PureComponent {
  static propTypes = {
    progress: PropTypes.number.isRequired,
  };

  render() {
    return (
      <View {...this.props}>
        <ProgressWrapper>
          <ProgressLine style={{width: `${this.props.progress * 100}%`}} />
        </ProgressWrapper>
      </View>
    );
  }
}

export default Progressbar;
