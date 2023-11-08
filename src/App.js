import React, { useState } from "react";
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, editedValue) => {
    const newTodos = [...todos];
    newTodos[index] = editedValue;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {!todos.length && 'No items in your list'}
        {!!todos.length && todos.map((todo, index) => (
          <TodoItem
            key={index}
            value={todo}
            onDelete={() => removeTodo(index)}
            onEditSave={(editedValue) => editTodo(index, editedValue)} // Pass the index and edited value
          />
        ))}
      </div>
    </div>
  );
}

export default App;
