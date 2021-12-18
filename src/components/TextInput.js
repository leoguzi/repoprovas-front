import styled from 'styled-components';
import { colors } from '../globalStyles';

export default function TextInput({ placeholder, label }) {
  return (
    <TextInputContainer>
      <Label for='TextInput'>{label}</Label>
      <Input id='TextInput' type='text' placeholder={placeholder} />
    </TextInputContainer>
  );
}

const Input = styled.input`
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding-left: 5px;
  font-size: 18px;
`;

const Label = styled.label`
  color: ${colors.standardText};
  margin-bottom: 5px;
`;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
