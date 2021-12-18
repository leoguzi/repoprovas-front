import styled from 'styled-components';
import Button from '../components/Button';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import SelectMenu from '../components/SelectMenu';
import TextInput from '../components/TextInput';
import { colors } from '../globalStyles';

export default function TestRegistration() {
  const options = ['Opção 1', 'Opção 1', 'Opção 1'];
  return (
    <Container width='500px' marginTop='100px'>
      <PageTitle>Register a new test</PageTitle>
      <StyledForm>
        <TextInput placeholder='Ex: 2020.1' label='Test name:' />
        <TextInput placeholder='Ex: 2020.1' label='Test file url:' />
        <SelectMenu items={options} label='Category:' />
        <SelectMenu items={options} label='Discipline:' />
        <SelectMenu items={options} label='Professor:' />
        <ButtonsContainer>
          <Button type='submit' text='Submit' width='115px' height='40px' />
          <Button
            text='Cancel'
            width='115px'
            height='40px'
            color={colors.cancelButton}
          />
        </ButtonsContainer>
      </StyledForm>
    </Container>
  );
}

const StyledForm = styled.form`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  width: 240px;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
`;
