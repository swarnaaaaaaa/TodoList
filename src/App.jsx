import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Swal from 'sweetalert2'
import './todo.css'
import TodoList from './components/TodoList';


function App() {
  const [todos,setTodos]=useState(['hi','hellow'])
  // -- SELECT INPUT--//
  const [input, setInput]= useState('')
  // -- STORE INDEX--//
  const [index,setIndex]=useState(null)
  // --EDIT TODO-- //
  const handleEdit = (index)=>{
   
   setInput(todos[index])
   setIndex(index)
  }
  return (
    <div className='wraper'>
     
      
      <AddTodo setIndex={setIndex} todos={todos} index={index} input={input} setInput={setInput} setTodos={setTodos}/>
      <TodoList handleEdit={handleEdit} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;

