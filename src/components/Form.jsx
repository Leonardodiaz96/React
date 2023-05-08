export const Form = ({ newTaskName, handleNewTaskSubmit, handleNewTaskNameChange }) => (
    <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTaskName} onChange={handleNewTaskNameChange} placeholder="Tarea..." />
    </form>
)