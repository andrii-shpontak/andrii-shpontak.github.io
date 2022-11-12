import {Container} from '@mui/system'; 

import './App.css';
import JobList from '../jobList/JobList';

function App() {
  return (
    <Container className='app'>
      <JobList/>
    </Container>
  );
}

export default App;
