import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { css } from '@emotion/react';
import styled from 'styled-components';
import Button from '../components/Button';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import SelectMenu from '../components/SelectMenu';
import TextInput from '../components/TextInput';
import { colors } from '../globalStyles';
import { isValidLink, isValidName } from '../helpers/dataValidation';
import * as apiService from '../services/api.service';

export default function TestRegistration() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState(0);
  const [discipline, setDiscipline] = useState(0);
  const [professor, setProfessor] = useState(0);
  const [invalidFields, setInvalidFields] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getCategories().then((r) => {
      setCategories(r.data);
      setCategory(r.data[0].id);
    });
    apiService.getDisciplines().then((r) => {
      setDisciplines(r.data);
      setDiscipline(r.data[0].id);
      setProfessor(r.data[0].professors[0].id);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const selectedDisc = disciplines.filter((disc) => disc.id === discipline);
    setProfessors(selectedDisc[0]?.professors);
    setProfessor(selectedDisc[0]?.professors[0].id);
  }, [discipline]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidName(name)) {
      setInvalidFields({ ...invalidFields, name: true });
    } else if (!isValidLink(link)) {
      setInvalidFields({ ...invalidFields, link: true });
    } else {
      const formInfo = {
        name,
        category,
        link,
        professor,
        discipline,
      };
      apiService.registerTest(formInfo).then(navigate('/'));
    }
  }

  return (
    <>
      <PacmanLoader
        css={override}
        color={colors.listBackground}
        loading={loading}
      />
      {!loading && (
        <Container width='500px' marginTop='100px'>
          <PageTitle>Register a new test</PageTitle>
          <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <TextInput
              setInvalidFields={setInvalidFields}
              invalid={invalidFields.name}
              value={name}
              setValue={setName}
              placeholder='Ex: 2020.1'
              label='Test name:'
            />
            <TextInput
              setInvalidFields={setInvalidFields}
              invalid={invalidFields.link}
              value={link}
              setValue={setLink}
              placeholder='Ex: https://drive.google.com/file.../'
              label='Test file url:'
            />
            <SelectMenu
              loading={loading}
              itens={categories}
              label='Category:'
              value={category}
              setValue={setCategory}
            />
            <SelectMenu
              itens={disciplines}
              label='Discipline:'
              value={discipline}
              setValue={setDiscipline}
            />
            <SelectMenu
              itens={professors}
              label='Professor:'
              value={professor}
              setValue={setProfessor}
            />
            <ButtonsContainer>
              <Button type='submit' text='Submit' width='115px' height='40px' />
              <Link to='/'>
                <Button
                  text='Cancel'
                  width='115px'
                  height='40px'
                  color={colors.cancelButton}
                />
              </Link>
            </ButtonsContainer>
          </StyledForm>
        </Container>
      )}
    </>
  );
}

const StyledForm = styled.form`
  margin-top: 30px;
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

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
