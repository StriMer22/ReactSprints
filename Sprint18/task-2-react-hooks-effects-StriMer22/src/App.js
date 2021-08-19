import './App.css';
import {useEffect, useState} from "react";

export default function App() {

    const[value,setValue] = useState()

    useEffect(()=>{
        setValue(localStorage.getItem('appData'))
    },[])

  return (
    <div>
      React Marathon, appData: <input size='5' value={value}/>
    </div>
  );
}