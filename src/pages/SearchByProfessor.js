import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import SearchContainer from '../components/SearchContainer';
import * as apiService from '../services/api.service';
import SelectMenu from '../components/SelectMenu';
import TestsList from '../components/TestsList';
import Button from '../components/Button';
import { colors } from '../globalStyles';

export default function SearchByProfessor() {
  const [professors, setProfessors] = useState([]);
  const [professor, setProfessor] = useState(0);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    apiService.getProfessors().then((r) => {
      setProfessors(r.data);
      setProfessor(r.data[0].id);
    });
  }, []);

  useEffect(() => {
    if (professor) {
      apiService
        .getTestsByProfessor(professor)
        .then((res) => setTests(res.data));
    }
  }, [professor]);

  return (
    <SearchContainer marginTop='30px' width='700px'>
      <PageTitle>Search for a test by professor</PageTitle>
      <FormContainer>
        <SelectMenu
          itens={professors}
          value={professor}
          setValue={setProfessor}
        />
        <Link to='/'>
          <Button
            color={colors.cancelButton}
            width='115px'
            height='40px'
            text='Voltar'
          />
        </Link>
      </FormContainer>
      <TestsList itens={tests} />
    </SearchContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
