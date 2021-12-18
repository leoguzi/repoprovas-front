import styled from 'styled-components';
import { colors } from '../globalStyles';

export default function Button({ text, width, height, color }) {
  return (
    <StyledButton width={width} height={height} color={color}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: ${colors.standardText};
  font-weight: bold;
  font-size: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8px;
  border: none;
  background-color: ${(props) =>
    props.color ? props.color : colors.themeSecondary};
  margin-bottom: 15px;
`;
