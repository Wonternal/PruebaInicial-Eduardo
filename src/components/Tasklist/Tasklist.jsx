import Task from '../Task/Task';
import PropTypes from 'prop-types';

const Tasklist = ({ tasks, handleDelete }) => {
  return (
    <div className='row mt-4 w500'>
      <h1 className='centertxt'>Tasklist</h1>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              task={task.task}
              handleDelete={handleDelete}
            />
          );
        })
      )}
    </div>
  );
};

Tasklist.propTypes = {
  tasks: PropTypes.array,
  handleDelete: PropTypes.func
};

export default Tasklist;
