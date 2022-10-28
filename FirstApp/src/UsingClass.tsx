import React,{Component} from "react";
import myStyles from './Sample.module.css'

export class Toast extends Component{
    //Is a virtual function in component class framework
    render(): React.ReactNode {
        return(
            <div className={myStyles.boxstyle}>
                This is a Toast Message
            </div>
        )
    }
}