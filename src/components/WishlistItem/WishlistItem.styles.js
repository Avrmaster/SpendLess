import styled from 'styled-components/native';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'components';
import Progressbar from 'components/Progressbar';

export const Wrapper = styled(TouchableOpacity)`
  margin-bottom: 20px;
  background: rgb(255,255,255);
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 100%;
`;

export const ItemImage = styled(Image)`
  width: 100%;
  height: auto;
  aspectRatio: 1.75;
  resizeMode: contain;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ContentWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  flex-wrap: wrap;
`;

export const ItemName = styled(Text)`
  font-size: 20px;
  font-weight: 300;
`;

export const ItemPrice = styled(Text)`
  font-size: 30px;
  font-weight: 700;
`;

export const ProgressbarStyled = styled(Progressbar)`
  margin: 10px 15px 0;
`;
