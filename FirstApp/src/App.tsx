import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorComponent from './StyleBinding';
import { Toast } from './UsingClass';
import Movie from './Movies';
import Movies from './Movies';
import { Login, OkToast,ErrorToast } from './LoginWithStates';
import { WithHttp } from './SimpleHttp';


let C1=() => {return (<h2>Sub-Heading created in component C1</h2>)}
let user:any = {username:'admin',pwd:'nimda'}
let C2=() => {return (<p>Username:{user.username}| Password:{user.pwd}</p>)}

let C3= ()=>{return(<img src={logo}/>)}

let C4=()=>{return(
  <div>
    <input type='text' value={user.username}/>
    <br/>
    <input type='password' value={user.pwd}/>
    <br/>
    <button>Login</button>
  </div>
)}

//since the function returns a html , it can be accessed as <App/> inside index.html
function App(){
  return (
    <>
    <Toast/>
    <C3/>
    <h1>
      Hello React!  
    </h1>
    <WithHttp/>
    <hr/>
    <Login/>
    <hr/>
    <C1/> 
    <hr/>
    <C2/>
    <C4/>
    <hr/>
    <ColorComponent/>
    <hr/>
    <Movie movieName="Movie 1" rating='5' dp='logo192.png'/>
    <Movie movieName="Movie 2" rating='4.5' dp='logo192.png'/>
    
    
    
    
    </>
    
    
    
  )
}
//only one default export per file 
export default App
