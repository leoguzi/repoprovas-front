import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Main from './pages/Main';
import TestRegistration from './pages/TestRegistration';
import TestSearch from './pages/TestSearch';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<TestRegistration />} />
        <Route path='/search' element={<TestSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
