import React from "react";
import './App.css';
import myStyles from './Sample.module.css';

let fontColor:any={color:'red',backgroundColor:'yellow',fontSize:'20px',
                    padding:'10px',
                    fontWeight:'bold'
                    };
let ColorComponent= ()=>{
    return(
        <>
        <input type='text' value='Some thing in Red' style={fontColor}/>
        <input type='text' value='CSS style without Databinding' className="Sample.module.css"/>
        <input type='text' value='CSS style with Databinding' className={myStyles.boxstyle}/>
        </>
    )
}
export default ColorComponent