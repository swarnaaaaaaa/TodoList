import React from 'react';
import Btn from './Btn';
import { FaPlusSquare } from "react-icons/fa";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
})

 
const AddTodo = ({todos,setTodos,input,setInput,index,setIndex}) => {


  // FORM SUBMIT-- ADD TODO
const formSubmit = (e)=>{
  e.preventDefault();
  // VALIDATION---//
  if(input.length<=3){
    return false
  }
  if (index !=null){
    const newTodoLists=[...todos]
    newTodoLists.splice(index,1,input)
    setTodos(newTodoLists)
   
  }else{
    setTodos(prev=>[input,...prev])
  }
  
  setInput('')

  
  
  ;(async () => {
    await Toast.fire({
      icon: 'success',
      title: 'Success',
    })
    await Toast.fire({
      icon: 'error',
      title: 'Error',
    })
    await Toast.fire({
      icon: 'warning',
      title: 'Warning',
    })
    await Toast.fire({
      icon: 'info',
      title: 'Info',
    })
    await Toast.fire({
      icon: 'question',
      title: 'Question',
    })
  })
  setIndex(null)
 
}

    
  return (
    <div className='card'>
        <div className='card-body'>
        <form onSubmit={formSubmit}>
        <div className='d-flex'>  
         <input
           onChange={(e)=>setInput(e.target.value)}
           value={input} 
           type='text'
           placeholder='Add Todo'
           className='form-control rounded-0'/>
         {console.log(index)}  
         <Btn className='col-4 rounded-0 btn-dark'>{index!= null? 'Update': 'Add'} Todo<FaPlusSquare /></Btn>
        </div>
        </form>
        </div>
    </div>
  );
}

export default AddTodo;
