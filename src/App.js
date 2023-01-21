import React, {  useState } from 'react';
import './App.css';
import Forms from './Forms';
import FromsContext from './FromsContext';
import { v4 as uuid } from 'uuid';

function App() {
  const [task,settask]=useState('');
  const[tasks,settasks]=useState([
      {id:uuid(),name:'sport',state:false},
      {id:uuid(),name:'travel',state:false},
      {id:uuid(),name:'music',state:false}
    ]);

  const addTaks=()=>{
      let newtasks=[...tasks,{
          id:uuid(),
          name:task,
          state:false
      }];
     settasks(newtasks);
     settask('');
  }

  const deleteTaks=(idp)=>{
      let nastak=tasks.filter((t)=>{
          return t.id!=idp;
      })
      settasks(nastak);
  }
 

 
  return (
    <div>
  <FromsContext.Provider value={{task,settask,addTaks,deleteTaks,tasks,settasks}}>
  <Forms/>
  </FromsContext.Provider>
 

    </div>
  );
}

export default App;
