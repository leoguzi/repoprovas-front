import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import { colors } from '../globalStyles';

export default function Main() {
  return (
    <>
      <Title>RepoProvas</Title>
      <Container marginTop='160px' width='1000px'>
        <Link to='/register'>
          <Button
            color={colors.button}
            textColor={colors.standardText}
            text='Register test'
            width='300px'
            height='80px'
          />
        </Link>
        <Link to='/search'>
          <Button
            color={colors.button}
            textColor={colors.standardText}
            text='Search test'
            width='300px'
            height='80px'
          />
        </Link>
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
