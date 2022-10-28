import React from "react";
import './App.css'
import myStyles from './Sample.module.css'

let fontColor:any={color:'red',backgroundColor:'aqua',fontSize:'20px',
                    padding:'10px',
                    fontWeight:'bold'
                    
                    };


let ColorComponent= ()=>{
        return(
         <>
             <input type='text' value='Home' style={fontColor}/>
             <input type='text' value='Contact' className={myStyles.boxstyle}/>
             
            </>
    )
    } 
    export default ColorComponent