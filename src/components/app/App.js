import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';

import JobBoard from '../jobBoard/JobBoard';
import JobDetails from '../jobDetails/JobDetails';

function App() {
  return (
      <Container className='app'>
        <Routes>
          <Route path='/test-task-fe-allab' element={<JobBoard />}/>
          <Route path='/test-task-fe-allab/:id' element={<JobDetails />}/>
          <Route path='/test-task-fe-allab/*' element={<JobBoard />}/>
        </Routes>
      </Container>
  );
}

export default App;
