import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Employees = () => {
    return ( 
        
            <Table striped bordered hover style = {{ paddingTop: '50px', padding: '20px'}}>
            <thead>
                <tr>          
                <th>Colaborador</th>
                <th>Email</th>            
                </tr>
            </thead>
            <tbody>
                <tr>        
                    <td>Mark</td>
                    <td>mark@gmail.com</td>    
                </tr>
                <tr>        
                    <td>Jacob</td>
                    <td>Thornton</td>       
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
           
    );
}

export default Employees;