import styled from 'styled-components';
import { colors } from '../globalStyles';

export default function SelectMenu({
  items,
  label,
  stdValue,
  value,
  setValue,
}) {
  return (
    <SelectContainer>
      <Label htmlFor='SelectMenu'>{label}</Label>
      <Select
        value={value}
        id='SelectMenu'
        onChange={(e) => setValue(Number(e.target.value))}
      >
        {stdValue ? (
          <option>{stdValue}</option>
        ) : (
          items?.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))
        )}
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
