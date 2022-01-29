import React from 'react';
import { useState} from 'react';
import { Link , Route, Switch} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Display from './components/Display';
import Navbar from './components/Navbar';
import Input from './components/Input';
import View from './components/View';
import Sorted from './components/Sorted';


function App() {

  const checkBox=(status)=>{
    console.log("$$$$$", status)
    setChecked(status)
} 
  const [checked, setChecked]= useState()


  return (
    <div className="App">
    <Navbar/>
     <Switch>
     <Route exact path="/">  <Display checked={checked}/> </Route>
     <Route exact path="/sorted"> <Sorted/> </Route>
     <Route exact path="/create">  <Input/> </Route>
     <Route exact path="/viewone/:id"><View checkBox={checkBox}/></Route>
     </Switch>
    
    </div>
  );
}

export default App;
