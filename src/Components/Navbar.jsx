import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Nav = () => {
    return (
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
                        />
                    </InputGroup>                              
                </Navbar.Brand>                      
        </Navbar>        
    );
}

export default Nav;