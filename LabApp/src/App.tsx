import React from 'react';
import './App.css';
import Footer from './footer';
import ColorComponent from './Stylesbinding';

let C1=() => {return (<h1>Lab App</h1>)}
//let C2=()=>{return (<h2>Home</h2>)}
//let C3=()=>{return (<h3>@Copyright</h3>)}
function App() {
  return (
    <>
    <h2>
    <C1/>
    </h2>
    <hr/>
    <ColorComponent/>
    <hr/>
    <Footer/>
    </>
  );
}

export default App;
