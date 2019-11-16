import styled from 'styled-components/native';
import {
  View
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
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px 0 15px;
`;
