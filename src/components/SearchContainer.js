import styled from 'styled-components';

export default function SearchContainer({
  width,
  height,
  marginTop,
  children,
}) {
  return (
    <StyledContainer width={width} heigth={height} marginTop={marginTop}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
`;
