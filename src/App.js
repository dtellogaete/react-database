import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Components/Employees';
import {database} from './Data/Employees';
import React, { useState} from 'react';
import { Form, Button, Container, Navbar, InputGroup} from 'react-bootstrap';

const App = () =>{

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    data: database
  });

    const handleChange = (event) => {      
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
      
    }
  
    const handleSubmit = (event) => {     
      
      event.preventDefault();
      setFormData({
        ...formData,
        data: formData.data.concat({name: formData.name, email: formData.email}),
        name: '',
        email: '',
      });
      
      console.log(formData.data);      
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(formData.data);

    const handleSearch = event => {
      if (event.keyCode === 13 && results !== '') {
        setSearchTerm(event.target.value);
        const filteredResults = formData.data.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
        setDataSearch(true)
      }else{
        setDataSearch(false)
      }
    };

    const [dataSearch, setDataSearch] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark"
            variant="dark"
            style ={{display:'flex',
            flexdirection:'row',
            justifyContent:'space-between',
            width: '100%',
            height: '70px',
            padding: '20px'}} >            
                <Navbar.Brand href="#home" >
                    <h4> Buscador de colaboradores</h4>                   
                </Navbar.Brand>
                <Navbar.Brand>
                    <InputGroup className="mb-3" style={{paddingTop: '15px'}} >
                        <InputGroup.Text id="inputGroup-sizing-default">                   
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder='Busca un colaborador'
                            onKeyDown={handleSearch}
                            name='dataSearch'
                        />
                    </InputGroup>                              
                </Navbar.Brand>                      
        </Navbar>    
      <Container className="container" onSubmit={handleSubmit}>
      <Form style = {{ paddingTop: '50px', padding: '20px'}}
            >
            <Form.Group 
                className='form'
                controlId="formName"   
                >
                <Form.Label>Nombre del Colaborador</Form.Label>
                <Form.Control type="text"
                    name='name'
                    placeholder="Ingresa el nombre del colaborador" 
                    onChange={handleChange}
                    value={formData.name}                  
                    
                    />          
            </Form.Group>    
            <Form.Group className='form' controlId="formEmail">
                <Form.Label>Correo del Colaborador</Form.Label>
                <Form.Control type="email"
                    name='email'
                    placeholder="Ingresa correo del colaborador"
                    onChange={handleChange}
                    value={formData.email}                  
                    />
            </Form.Group>
            <Form.Group class='form' controlId="formEmail">
                <Button variant="primary" type="submit">
                    Agregar Colaborador
                </Button>
            </Form.Group>                     
        </Form>
        <div className='EmployeesTable'>       
        <Employees dataset = {dataSearch === true ? results : formData.data}></Employees>
        </div>        
      </Container>      
    </div>
  );
}

export default App;
