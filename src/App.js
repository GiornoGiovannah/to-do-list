import React, {useState} from "react";
import './App.css'

function App() {
  // Component Code - without importing from different component files.
  
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('')
  // Creating two variables, the 'useState' hook is used to manage the state.
  
    const addTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  // Adding a New todo, this function is called then the Add button will be clicked.

    const removeTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index); 
      setTodos(newTodos);
    };
  // Removing a New todo, the functions will be called when the remove button is clicked for the specific todo item.
  
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
          <div key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
  // This renders the UI, an Add button to add new tasks, A list of tasks added using the 'todos' state array, Each of the tasks have a remove button that will call the 'removeTodo' function.

}
 

export default App;
