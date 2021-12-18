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

export { getCategories, getDisciplines, registerTest };
