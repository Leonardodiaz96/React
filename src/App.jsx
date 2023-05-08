import { useState } from 'react'

import './App.css'

import { Container, Form, Ul } from './components/'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  function handleNewTaskSubmit(event) {
    event.preventDefault(); //evita que se recargue la pagina
    setTasks(tasks.concat(newTaskName)); //concateno lo que tenia guardado con lo que quiero agregar
    setNewTaskName('');//vacio input
  }

  function handleNewTaskNameChange(event) {  //actualiza el estado del componente con el valor actual cada vez que hay un cambio
    setNewTaskName(event.target.value);
  }

  return (
    <Container>
      <h1>Bienvenido</h1>
      <h2>Ingresa tus tareas</h2>
      <Form newTaskName={newTaskName} handleNewTaskSubmit={handleNewTaskSubmit} handleNewTaskNameChange={handleNewTaskNameChange} />
      <Ul tasks={tasks} />
    </Container>
  );
}

export default App;
