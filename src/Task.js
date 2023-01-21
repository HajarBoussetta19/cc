import React, { useRef, useState } from 'react'
import "./comp3.css"

export default function Task({txt,delf}) {
  const inpRef = useRef();
  const editRef = useRef();
  const [newvalue,setNewValue] = useState('');
    const done = (elem)=>{
      inpRef.current.classList.add("class","realise");
        
    }       
    const handleChange = (el)=>{
      setNewValue(el.target.value)
    }

    const edit = ()=>{
      editRef.current.classList.add("d-none");
      inpRef.current.removeAttribute("disabled")
    }
    const save = ()=>{
      editRef.current.classList.remove("d-none");
      inpRef.current.setAttribute("disabled","true")
    }
  return (
    <>
        <input className='rounded bnone' ref={inpRef} onChange={handleChange} type='text' value={newvalue==''?txt:newvalue} disabled /> 
        <input className='mx-2 mb-1 btn btn-light c '   type='button'value='Supprimer' onClick={delf}/>   
        <input className='mx-2 mb-1 btn btn-secondary' type='button' value='realise' onClick={done}/>
        <span className='parent'>
          <input className='mx-2 mb-1 btn btn-info child' type='button' value='save' onClick={save} />
          <input ref={editRef} className='mx-2 mb-1 btn btn-info child' type='button' value='edit' onClick={edit}/>
        </span>
    </>
  )
}
