import React from 'react';
import Todo from './Todo';

const TodoList = ({todos,setTodos,handleEdit}) => {
  // ---TODO DELETE----//
  const handleDelete =(index)=>{
    const newTodoLists = [...todos]
    newTodoLists.splice(index, 1)
    setTodos(newTodoLists)
  };
 

  return (
    <div className='card mt-3'>
      <div className='card-body'>
      {
        todos.map((todo,index) =>(
        <Todo handleEdit={handleEdit} todoDelete={handleDelete} key={index} todo={todo} index={index}/>
        ))
      }
      {
        todos.length === 0 && <p className='text-center'>Please add a new todo</p>
      }
          
        
      </div>
    </div>
  );
}

export default TodoList;
