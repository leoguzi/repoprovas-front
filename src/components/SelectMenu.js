import styled from 'styled-components';
import { colors } from '../globalStyles';

export default function SelectMenu({ items, label }) {
  return (
    <SelectContainer>
      <Label htmlFor='SelectMenu'>{label}</Label>
      <Select id='SelectMenu'>
        {items.map((item) => (
          <option>{item}</option>
        ))}
      </Select>
    </SelectContainer>
  );
}

const Select = styled.select`
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.themeSecondary};
  color: ${colors.standardText};
  font-size: 18px;
  padding-left: 5px;
`;

const Label = styled.label`
  color: ${colors.standardText};
  margin-bottom: 5px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
