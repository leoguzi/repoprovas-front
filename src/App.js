import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Main from './pages/Main';
import TestRegistration from './pages/TestRegistration';
import SearchByProfessor from './pages/SearchByProfessor';
import SearchByPeriod from './pages/SearchByPeriod';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<TestRegistration />} />
        <Route path='/searchbyprofessor' element={<SearchByProfessor />} />
        <Route path='/searchbyperiod' element={<SearchByPeriod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
