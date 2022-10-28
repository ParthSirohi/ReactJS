import React,{Component} from "react";
import { useState } from "react";

export class Login extends Component<{},{username:string,password:string}>{
    constructor(props:any){
        super(props)
        this.state={username:'', password:''}
    }
    render():React.ReactNode{
        return(
            <div>
                Enter Username: <input type='text' placeholder="Enter Username" onChange={(f)=>this.setUsername(f)}/>
                <br/>
                Enter Password: <input type='password' placeholder="Enter Password" onChange={(f)=>this.setPassword(f)}/>
                <br/>
                <button onClick={(f)=>this.VerifyLogin(f)} onMouseEnter={(f)=>this.ChangeBackground(f)} onMouseOut={(f)=>this.ResetBackground(f)}>Login</button>
                {this.toast}
            </div>

        )
    }

    
    public ChangeBackground(f:any){
        console.log(f.target.style.backgroundColor='blue')
    }
    public ResetBackground(f:any){
        console.log(f.target.style.backgroundColor='white')
    }

    public setUsername(f:any){
        console.log(f.target.value)
        this.setState({username:f.target.value})
    }
    public setPassword(f:any){
        console.log(f.target.value)
        this.setState({password:f.target.value})
    }
    public toast:any=<p></p>
    public VerifyLogin(f:any){
        f.preventDefault();
        if(this.state.username== 'admin' && this.state.password== 'nimda'){
            this.toast=<OkToast/>
        }
        else{
            this.toast=<ErrorToast/>
        }
        this.forceUpdate()


    }


}


export function OkToast(){
    return(
        <div className="success">Login Successful</div>

        )
}
export function ErrorToast(){
    return(
        <div className="error">Login Failed</div>
    )
}