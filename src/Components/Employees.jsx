import Table from 'react-bootstrap/Table';

const Employees = (props) => {
    const {dataset} = props;
    
    return (         
            <Table striped bordered hover style = {{ paddingTop: '50px', padding: '20px'}}>
            <thead>
                <tr>
                <th>ID</th>          
                <th>Colaborador</th>
                <th>Email</th>            
                </tr>
            </thead>
            <tbody>                  
                {dataset.map((item, index) =>
                <tr>
                    <td>{index+1}</td>        
                    <td>{item.name}</td>
                    <td>{item.email}</td>    
                </tr>
                )};
                
            </tbody>
        </Table>           
    );
}

export default Employees;