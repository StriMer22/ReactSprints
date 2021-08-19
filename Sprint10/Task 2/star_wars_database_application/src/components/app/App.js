import './App.module.css';
import {get, getImg} from "../../services/sw-service";
import React, {useEffect, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Main} from "../Main/Main";

let count = 1
let query = 'people'

function App() {

    const [useData, setData] = useState('')
    const [useImg, setImg] = useState('')

    useEffect(() => {
        get(query, count).then(res => {
            setData(res)
        })
        getImg(query, count).then(res => setImg(res))
    }, [setData])

    function changeQuery(event) {
        query = event.target.innerHTML.toLowerCase()
        count = 1
        get(query, count).then(res => {
            setData(res)
        })
        getImg(query, count).then(res => setImg(res))
    }

    function add() {
        count++
        get(query, count).then(res => {
            setData(res)
        })
        getImg(query, count).then(res => setImg(res))
    }

    return (
        <>
           <Navbar changeQuery={changeQuery} />

            <button onClick={add}>NEXT</button>

            <Main useData={useData} useImg={useImg} query={query}/>
        </>)
}
export default App;