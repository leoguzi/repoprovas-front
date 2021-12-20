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

export default function SearchByPeriod() {
  const [periods, setPeriods] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [period, setPeriod] = useState(0);
  const [discipline, setDiscipline] = useState(0);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    apiService.getPeriods().then((r) => {
      setPeriods(r.data);
      setPeriod(r.data[0].id);
    });
  }, []);

  useEffect(() => {
    if (period) {
      apiService.getDisciplinesByPeriod(period).then((r) => {
        setDisciplines(r.data);
        setDiscipline(r.data[0].id);
      });
    }
  }, [period]);

  useEffect(() => {
    if (discipline) {
      apiService.getTestsByDiscipline(discipline).then((r) => setTests(r.data));
    }
  }, [discipline]);

  return (
    <SearchContainer marginTop='30px' width='700px'>
      <PageTitle>Search for a test by period and discipline</PageTitle>
      <FormContainer>
        <SelectMenu itens={periods} value={period} setValue={setPeriod} />
        <SelectMenu
          itens={disciplines}
          value={discipline}
          setValue={setDiscipline}
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
