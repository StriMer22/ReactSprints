import React, { useState } from 'react';

import './App.css';

import { SubTask1 } from './SubTask1';
import { SubTask2 } from './SubTask2';
import { SubTask3 } from './SubTask3';
import { SubTask4 } from './SubTask4';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default function App() {
  const [even, setEven] = useState(false);
  const [check, setCheck] = useState(false);
  return (
    <Router>
      <div className='App'>
        <h1>React Marathon</h1>
        <h2>The topic 'Routes'</h2>
        <Link to="/subtask3">Show protected information if</Link>
        <span>&nbsp;</span>
        <input onChange={(e) => setEven(e.target.value %2 !== 0)} size="5"></input> is odd
        <div className='mainClass'>
          Go to the component programmatically, by checking the box:{' '}
          <input onChange={(event) => setCheck(event.target.checked)} type='checkbox'></input>
        </div>
        <Switch>
          <Route path='/subtask1/:id' component={SubTask1}></Route>
          <Route path="/subtask2" component={SubTask2}/>
          <Route path="/subtask3"><SubTask3 even={even}/></Route>
          <Route exact path='/' render={()=>check ? (<Redirect to='/subtask4'/>) : (<Redirect to='/'/>)}/>
          <Route path="/subtask4"><SubTask4 check={check}/></Route>
        </Switch>
      </div>
    </Router>
  );
}