/*
import React, { useReducer, useState } from "react";

const App = () => {
  function reducer(state, action) {
    if (action.type === "inc") {
      return state + 1;
    } else if (action.type === "dec") {
      return state - 1;
    } else if (action.type === "reset") {
      return 0;
    } else {
      return state;
    }
  }

  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function addList() {
    if (text.trim() === "") return;

    setList([...list, text]);
    setText("");
  }

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{state}</h2>

      <button onClick={() => dispatch({ type: "dec" })}>Dec</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "inc" })}>Inc</button>

      <hr />

      <h1>To-Do</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addList}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/

import React, { useReducer } from 'react'
import "./App.css";

const App = () => {
    let data={
        input:"",
        list:[]
    }
    function reduser(state,action){
        if(action.type=="inp"){
            return{
                ...state,
                input:action.payload
            }
        }
        else if(action.type=="add"){
            return{
                ...state,
                list:[...state.list,state.input]
            }
        }
        else if(action.type=="d"){
            return{
                ...state,
                list:state.list.filter((_,id)=>id!=action.payload)
            }
        }
    }

    let [state,dispatch]=  useReducer(reduser,data)

  return (
    <div>
        <input  onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}/>
       <button  onClick={()=>dispatch({type:"add"})}>add</button>
       {
        state.list.map((a,id)=>{
            return(<>
            <li onClick={()=>dispatch({type:"d",payload:id})}>{a}</li>
            </>)
        })
       }
    </div>
  )
}

export default App