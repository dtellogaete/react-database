import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Components/Navbar'
import FormEmployees from './Components/Form';
import { Container } from 'react-bootstrap';
import Employees from './Components/Employees';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Container className="container">
        <FormEmployees/>
        <Employees/>
      </Container>
      
    </div>
  );
}

export default App;
