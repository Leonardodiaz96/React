export const  Ul = ({ tasks }) => (
    <ul>
    {tasks.map((task, index) => (
      <li key={index}>{task}</li> //con el key identifico cada elemento de la lista teniendo en cuenta un index que es unico para cada elemento
    ))}
  </ul>
)