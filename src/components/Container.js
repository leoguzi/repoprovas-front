import styled from 'styled-components';

export default function Container({ width, height, marginTop, children }) {
  return (
    <StyledContainer width={width} heigth={height} marginTop={marginTop}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
`;
