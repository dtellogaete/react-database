import 'bootstrap/dist/css/bootstrap.min.css';
import {database} from './Data/Employees';
import React, { useState} from 'react';
import { Form, Button, Container, Navbar, InputGroup, Table} from 'react-bootstrap';

const App = () =>{

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    data: database
  });

  const handleChange = (event) => {      
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    
  };
  
  const handleSubmit = (event) => {      
    event.preventDefault();
    const nextId = formData.data.length + 1;
    setFormData({
      ...formData,
      data: formData.data.concat({id: nextId, name: formData.name, email: formData.email}),
      name: '',
      email: '',
    });      
    console.log(formData.data);      
  }; 

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);    
  };    

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
        <Table striped bordered hover style = {{ paddingTop: '50px', padding: '20px'}}>
            <thead>
                <tr>
                <th>ID</th>          
                <th>Colaborador</th>
                <th>Email</th>            
                </tr>
            </thead>           
            <tbody>                  
              {formData.data.filter((item) => {
                if (searchTerm === '') {
                    return item;
                } else {
                    return (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.email.toLowerCase().includes(searchTerm.toLowerCase()));
                }
            }).map((item, index) =>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>                    
                </tr>
            )}                                                   
            </tbody>
        </Table>        
        </div>        
      </Container>      
    </div>
  );
}

export default App;
