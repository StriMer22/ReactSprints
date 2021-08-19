import './App.css';
import {useState} from "react";

export default function App() {

  const [data,setData] = useState('React Marathon')

  return <div onClick={()=>{
  return setData(data.toLowerCase())
  }}> {data} </div>;
}