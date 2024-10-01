import React from 'react';
import Btn from './Btn';
import { TiEdit } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({todo,index,todoDelete,handleEdit}) => {
 
  return (
    <div className='card shadow p-3 mb-3'>
      <div className='row'>
        <div className='col-8'>
            <h5>{++index}.{todo}</h5>
        </div>
        <div className='col-4 text-end'>
            <div className='btn-group'>
                <Btn onClick={()=>handleEdit(--index)} className='btn-sm btn-warning'><TiEdit /></Btn>
                <Btn onClick ={()=>todoDelete(--index)} className='btn-sm btn-danger'><AiFillDelete /></Btn>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
