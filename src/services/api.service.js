import axios from 'axios';

const API_URL = process.env.REACT_APP_API;

function getCategories() {
  return axios.get(`${API_URL}/categories`);
}

function getDisciplines() {
  return axios.get(`${API_URL}/disciplines`);
}

function registerTest(test) {
  return axios.post(`${API_URL}/tests`, test);
}

function getProfessors() {
  return axios.get(`${API_URL}/professors`);
}

function getTestsByProfessor(idProfessor) {
  return axios.get(`${API_URL}/tests/professor/${idProfessor}`);
}

function getPeriods() {
  return axios.get(`${API_URL}/periods`);
}

function getDisciplinesByPeriod(idPeriod) {
  return axios.get(`${API_URL}/disciplines/${idPeriod}`);
}

function getTestsByDiscipline(idDiscipline) {
  return axios.get(`${API_URL}/tests/discipline/${idDiscipline}`);
}
export {
  getCategories,
  getDisciplines,
  registerTest,
  getProfessors,
  getTestsByProfessor,
  getPeriods,
  getDisciplinesByPeriod,
  getTestsByDiscipline,
};
