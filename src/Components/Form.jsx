
import { Form, Button, Container } from 'react-bootstrap';

const FormEmployees = () =>{   
    return (
        <Form style = {{ paddingTop: '50px', padding: '20px'}}>
            <Form.Group class='form' controlId="formName" >
                <Form.Label>Nombre del Colaborador</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el nombre del colaborador"/>
            </Form.Group>    
            <Form.Group class='form' controlId="formEmail">
                <Form.Label>Correo del Colaborador</Form.Label>
                <Form.Control type="email" placeholder="Ingresa correo del colaborador"/>
            </Form.Group>
            <Form.Group class='form' controlId="formEmail">
                <Button variant="primary" type="submit">
                    Agregar Colaborador
                </Button>
            </Form.Group>                     
        </Form>
    );
}

export default FormEmployees;
