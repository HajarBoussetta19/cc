import React, { useContext, useState } from 'react'
import Task from './Task';
import FromsContext from './FromsContext';
import "./comp3.css"

export default function Forms() {
  const {task,settask,addTaks,deleteTaks,tasks,settasks}=useContext(FromsContext)
  return (
    <div className='b'>
          <h1>To do list __ app</h1>  
          <br/> 
     <form>
       Entrer une tache :  <input type="text"  value={task} onChange={(e)=>{settask(e.target.value)}} className='rounded bnone'/> &nbsp; &nbsp;<input type='button' value='ajouter' onClick={addTaks} className='mx-2 mb-1 btn btn-info'  />
        </form>
        <br/> <br/>
        <h1>liste des choses a faire</h1>
        <br/> 
        <ul className='pe-5 me-2'>
            {
                tasks.map((e)=>{
                return <li className='nav-link' key={e.id}><Task txt={e.name} delf={()=>{deleteTaks(e.id)}}/></li> 
                })
            }
        </ul>
   
    </div>
  )
}
