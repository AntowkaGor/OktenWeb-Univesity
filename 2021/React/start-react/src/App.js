import React from 'react';
import './App.css';
// import {Form} from './components/input/Input'
// import {Cards} from './components/card/Cards'
import {Card} from './components/MainCard/Cards'



function App() {
  return (
    <div className="App">
        {/*<Form/>*/}
        {/*<Cards/>*/}
        <div className="CardDiv">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

    </div>
  );
}

export default App;
