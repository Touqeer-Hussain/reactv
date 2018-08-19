import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"};
    const data = ['We', 'are', 'United'] ;
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] ;
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}];


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="one">
            <p>{name}</p>
            <p>{obj.name}</p>
        {data.map(snap =>{
          return  <span>{snap}</span>
        })}
        <ul>{list.map(snap =>{
          return <li>{snap.name}</li>
        })
        }</ul>
        {
          complex.map(snap1 =>{
            return (
                <ul>
                <li>{snap1.company}</li>
                <ul>{snap1.jobs.map(snap2 =>{ return <li>{snap2}</li>})}</ul>
                </ul>
            );
          })
        }

        </div>
        
      </div>
    );
  }
}

export default App;
