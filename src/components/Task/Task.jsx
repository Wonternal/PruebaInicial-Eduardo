import PropTypes from 'prop-types';

const Task = ({ id, task, handleDelete }) => {
  return (
    <>
      <p>{task}</p>
      <button
        type='button'
        className='btn btn-danger'
        onClick={() => handleDelete(id)}
      >
        {' '}
        Delete
      </button>
    </>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  handleDelete: PropTypes.func
};
export default Task;
