import styled from 'styled-components';
import Button from '../components/button';
import Container from '../components/container';
import { colors } from '../globalStyles';

export default function Main() {
  return (
    <>
      <Title>RepoProvas</Title>
      <Container marginTop='200px' width='1000px'>
        <Button
          color={colors.button}
          textColor={colors.standardText}
          text='Register test'
        />

        <Button
          color={colors.button}
          textColor={colors.standardText}
          text='Search test'
        />
      </Container>
    </>
  );
}

const Title = styled.h1`
  font-family: 'Lobster', cursive;
  margin-top: 150px;
  color: ${colors.standardText};
  font-size: 88px;
  text-align: center;
`;
