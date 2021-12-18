import styled from 'styled-components';
import { colors } from '../globalStyles';

export default function TextInput({ placeholder, label, value, setValue }) {
  return (
    <TextInputContainer>
      <Label htmlfor='TextInput'>{label}</Label>
      <Input
        required
        value={value}
        id='TextInput'
        type='text'
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
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
