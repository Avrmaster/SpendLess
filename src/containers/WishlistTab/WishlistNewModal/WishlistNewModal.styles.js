import styled from 'styled-components/native';
import { Text } from 'components';

export const ModalWrapper = styled.View`
  padding: 40px 15px 0;  
`;

export const ModalTextInput = styled.TextInput`
  height: 38px;
  border-bottom-color: rgb(177,177,177);
  border-bottom-width: 1px;
  font-size: 18px;
`;

export const InputText = styled(Text)`
  font-size: 14px;
  color: #747474;
`;

export const InputWrapper = styled.View`
  margin-bottom: 25px;
`;
