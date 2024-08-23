import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import { useState } from "react";
import './App.css';

const App = () => {
  const [ todoList, setTodoList ] = useState( [] );
  const [ filter, setFilter ] = useState( 'all' );

  const addTodo = ( todoObj ) => {
    setTodoList( ( prevTodoList ) => [ ...prevTodoList, todoObj ] );
  };

  const toggleTodoStatus = ( id ) => {
    setTodoList( ( prevTodoList ) =>
      prevTodoList.map( todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = ( id, updatedTodo ) => {
    setTodoList( ( prevTodoList ) =>
      prevTodoList.map( todo =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const deleteTodo = ( id ) => {
    setTodoList( ( prevTodoList ) =>
      prevTodoList.filter( todo => todo.id !== id )
    );
  };

  const filteredTodos = todoList.filter( todo => {
    if ( filter === 'completed' ) return todo.completed;
    if ( filter === 'notcompleted' ) return !todo.completed;
    return true;
  } );

  return (
    <div className="todo-container">
      <Header addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <div className="todo-list">
        {filteredTodos.map( ( todo ) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ) )}
      </div>
    </div>
  );
};

export default App;
