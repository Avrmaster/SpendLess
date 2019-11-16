import styled from 'styled-components/native';
import {
  View,
  Image,
} from 'react-native';

export const Wrapper = styled(View)`
  margin-bottom: 20px;
  background: rgb(255,255,255);
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 100%;
`;

export const ItemImage = styled(Image)`
  width: 100%;
  height: auto;
  aspectRatio: 1.5;
  resizeMode: contain;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
