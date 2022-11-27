import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';

import JobBoard from '../jobBoard/JobBoard';
import JobDetails from '../jobDetails/JobDetails';

function App() {
  return (
      <Container className='app'>
        <Routes>
          <Route path='/' element={<JobBoard />}/>
          <Route path='/:id' element={<JobDetails />}/>
          <Route path='*' element={<JobBoard />}/>
        </Routes>
      </Container>
  );
}

export default App;
