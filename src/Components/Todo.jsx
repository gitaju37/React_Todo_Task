import { useState } from 'react';
import PropTypes from 'prop-types';

const Todo = ( { todo, toggleTodoStatus, editTodo, deleteTodo } ) => {
  const [ isEditing, setIsEditing ] = useState( false );
  const [ newName, setNewName ] = useState( todo.name );
  const [ newDesc, setNewDesc ] = useState( todo.description );

  const handleEdit = () => {
    editTodo( todo.id, { name: newName, description: newDesc } );
    setIsEditing( false );
  };

  return (
    <div className="todo-card" style={{ margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={( e ) => setNewName( e.target.value )}
          />
          <input
            type="text"
            value={newDesc}
            onChange={( e ) => setNewDesc( e.target.value )}
          />
          <button
            className="btn btn-success"
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditing( false )}
          >
            Cancel
          </button>
        </div>
      ) : (
          <div>
            <div className='todo-detail'>
          <h5>Name:{todo.name}</h5>
              <h6>Description:{todo.description}</h6>
            </div>
          <button
            className={`btn ${todo.completed ? 'btn-success' : 'btn-warning'}`}
            onClick={() => toggleTodoStatus( todo.id )}
          >
            {todo.completed ? 'Completed' : 'Mark as Completed'}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsEditing( true )}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo( todo.id )}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodoStatus: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;
