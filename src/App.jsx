import Formulario from './components/Formulario';
import { useState } from 'react';
import Tasklist from './components/Tasklist';

const App = () => {
  const defaultTaskList = [];

  const [tasks, setTasks] = useState(defaultTaskList);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container mt-5'>
      <Formulario tasks={tasks} setTasks={setTasks} />
      <Tasklist tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
