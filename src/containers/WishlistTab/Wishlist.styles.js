import styled from 'styled-components/native';
import {
  View,
  Button
} from 'react-native';
import { Text } from 'components';

export const Container = styled(View)`
  margin-top: 30px;
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  margin: 15px 0 15px;
`;

export const TopWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
