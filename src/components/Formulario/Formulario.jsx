import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ tasks, setTasks }) => {
  const initTask = { task: '' };

  const [form, setFormState] = useState(initTask);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormState({
      ...form,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const handleAdd = () => {
    setTasks([{ id: uuidv4(), task: form.task }, ...tasks]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
    setFormState(initTask);
  };

  return (
    <div className='row'>
      <div className='form-content w500'>
        <h1 className='form-title'>My TaskList App!!!</h1>
        <form onSubmit={handleSubmit}>
          <div className='col mb-3'>
            <label htmlFor='task' className='form-label'>
              New Task
            </label>
            <input
              type='text'
              className='form-control'
              id='task'
              name='task'
              placeholder='Introduce new task'
              onChange={handleInputChange}
              value={form.task}
            />
          </div>

          <div className='col'>
            <div className='row'>
              <div className='col-6'>
                <button className='btn btn-primary' type='submit'>
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func
};

export default Formulario;
