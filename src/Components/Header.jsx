import { useState } from "react";
import PropTypes from 'prop-types';

const Header = ( { addTodo } ) => {
  const [ todoName, setTodoName ] = useState( '' );
  const [ todoDesc, setTodoDesc ] = useState( '' );

  const saveTodo = () => {
    if ( todoName.trim() && todoDesc.trim() ) {
      const todoObj = {
        id: Date.now(),
        name: todoName,
        description: todoDesc,
        completed: false
      };
      addTodo( todoObj );
      setTodoName( '' );
      setTodoDesc( '' );
    }
  };

  return (
    <div className="todo-header">
      <h2 className="my-title" style={{ textAlign: "center", padding: "30px",color:"green"}}>MY TODO</h2>
      <form
        className="todo-input"
        onSubmit={( e ) => { e.preventDefault(); saveTodo(); }}
      >
        <input
          className="input-box"
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={( e ) => setTodoName( e.target.value )}
         
        />
        <input
          className="input-box"
          type="text"
          placeholder="Todo Description"
          value={todoDesc}
          onChange={( e ) => setTodoDesc( e.target.value )}
        />
        <button
          className="btn btn-success"
          style={{ width: "120px"}}
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
