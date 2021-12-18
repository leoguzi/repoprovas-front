import styled from 'styled-components';

export default function Button({ color, text, textColor }) {
  return (
    <StyledButton color={color} textColor={textColor}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: ${(props) => props.textColor};
  font-weight: bold;
  font-size: 20px;
  width: 300px;
  height: 80px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.color};
  margin-bottom: 15px;
`;
