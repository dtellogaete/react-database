# Renderización dinámica de los componentes

## Base de datos de los colaboradores

La página puede visualizarse en  [https://dtellogaete.github.io/react-database/](https://dtellogaete.github.io/react-database/)

### Proceso: "Agregar Colaborador"

Agrega un nuevo coloraborado usando el formulario.

```
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    data: database
  });

    const [searchTerm, setSearchTerm] = useState('');  
```
* `formData`: Es un dataset con los datos de los colaboradores (nombre y correo electrónico), el estado inicial es un objeto con las propiedades "name", "email" y "data", donde "name" y "email" tienen un valor vacío y "data" contiene un arreglo con los datos de 3 colaboradores ['src/Data/Employees'](src/Data/Employees.jsx)

```
const handleChange = (event) => {      
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    
  };
  
const handleSubmit = (event) => {      
event.preventDefault();
setFormData({
    ...formData,
    data: formData.data.concat({name: formData.name, email: formData.email}),
    name: '',
    email: '',
});      
console.log(formData.data);      
};
```
La función `handleChange` captura los datos del colaborador en un arreglo (name  y email) cuando hay un cambio en el formulario. Actualiza el estado de "formData" con el nuevo valor del elemento en el formulario.

La función `handleSubmit` se ejecuta al enviarse el formulario (botón Agregar Colaborador). Actualiza el estado de "formData" agregando un nuevo objeto a data, el cual incluye los datos del colaborador (name y email). Al final establece "formData.name" y "formData.email" como variables vacías.

### Proceso buscar un colaborador.

El criterio de búsqueda de un colaborador es el nombre.

```
    const [searchTerm, setSearchTerm] = useState('');  
```
* `searchTerm`: Almacena el nombre del colaborador buscado.

```
    const handleSearch = event => {
    setSearchTerm(event.target.value);    
  };   
```

La función `handleSearch` actualiza la variable searchTerm con el nuevo colaborador buscado.

