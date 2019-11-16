import styled from 'styled-components/native';
import {
  View,
} from 'react-native';

export const ProgressWrapper = styled(View)`
  width: 100%;
  background: #f4f2f2;
  border-radius: 100px;
  height: 12px;
  position: relative;
  overflow: hidden;
`;

export const ProgressLine = styled(View)`
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
  background-color: #c1d9bb;
`;
