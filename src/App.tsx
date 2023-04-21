import {useRef, useState } from 'react';
import React from 'react';
import { Todos } from './interface/Todos';
import './App.css';
import Form from './components/Form';

const App :React.FC = () => {

  let todo = useRef<HTMLInputElement>(null);
  const [todos,setTodos] = useState<Todos[]>([])


  const handleSubmit = (event :React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log("Formulaire soumis");
    if(todo.current?.value){
      setTodos([...todos,{name:todo.current?.value,isDone:false,isDisabled:true}])
    }
  } 

  const handleChange = (event :React.FormEvent<HTMLInputElement>,id :number):void  => {
    const {value} = event.currentTarget;
    const edit = todos.map((element,index) => index === id ? {...element, name:value}:element)  
    setTodos(edit)
  }

  const handleEdit = (id:number,event:React.MouseEvent) => {
    
    let html:string = event.currentTarget.innerHTML === "edit" ? 'Validé' : "edit";
    event.currentTarget.innerHTML = html
    const toggleDisabled = todos.map((element,index) => index === id ? {...element,isDisabled : !element.isDisabled} : element)
    setTodos(toggleDisabled)
  }

  const handleDone = (id:number) => {
    const toggleDone = todos.map((element,index) => index === id ? {...element,isDone : !element.isDone} : element )
    setTodos(toggleDone);
  }
 
  const getTodo = () => { // Get the list
    return todos.map((element,index) => 
    <div key={index}>
      <input 
        key={index}
        type="text" 
        name="todo"
        id="" 
        value={element.name}
        disabled={element.isDisabled}
        onChange={(event) => handleChange(event,index)}
        placeholder='Entrez un todo'
        className={element.isDone ? 'done':'active'}
      />
      <i onClick={()=>handleDone(index)}>V</i> - 
      <i onClick={(event)=>handleEdit(index,event)}>edit</i>
    </div>
    )
  }

  return (
    <div className="App">
      <Form 
      name="todo" 
      value='Nom' 
      handleSubmit={handleSubmit}
      inputRef={todo} />
      <ul>
        {getTodo()}
      </ul>
    </div>

  );
}

export default App;
